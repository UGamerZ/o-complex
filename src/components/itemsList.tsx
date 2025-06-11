import { useEffect, useRef } from "react";
import { getItems } from "@/apiRequests";
import { Skeleton } from "primereact/skeleton";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputNumber } from "primereact/inputnumber";
import { observer } from "mobx-react-lite";
import { ItemsState } from "@/stores/items";
import { CartState } from "@/stores/cart";

const ItemsList = observer(
  ({ itemsState, cart }: { itemsState: ItemsState; cart: CartState }) => {
    const triggerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      cart.setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
      let page = 2;
      const observer = new IntersectionObserver(() => {
        getItems(page).then((data) => {
          itemsState.pushItems(data.items);
          page++;
        });
      });
      if (triggerRef.current) observer.observe(triggerRef.current);
    }, []);

    return (
      <>
        {itemsState.itemsMatrix.map((items) => (
          <div
            key={Date.now()}
            className="container"
            style={{ margin: "1rem", marginInline: "auto" }}
          >
            {items ? (
              items.map((item) => (
                <Card
                  key={item.id}
                  title={item.title}
                  footer={
                    <>
                      {cart.cart.some((cartItem) => cartItem.id === item.id) ? (
                        <div className="container-small">
                          <InputNumber
                            value={
                              cart.cart.find(
                                (cartItem) => cartItem.id === item.id,
                              )?.quantity
                            }
                            onValueChange={(e) => {
                              if (e.value)
                                cart.updateCart(
                                  item.id,
                                  e.value,
                                  item.title,
                                  item.price,
                                );
                              else cart.removeItem(item.id);
                            }}
                            showButtons
                            buttonLayout="horizontal"
                            step={1}
                            incrementButtonIcon="pi pi-plus"
                            decrementButtonIcon="pi pi-minus"
                          />
                        </div>
                      ) : (
                        <Button
                          label="Купить"
                          style={{ width: "100%" }}
                          onClick={() =>
                            cart.updateCart(item.id, 1, item.title, item.price)
                          }
                        />
                      )}
                    </>
                  }
                  header={<img src={item.image_url} />}
                >
                  <p>{item.description}</p>
                  <h3>Цена: {item.price}</h3>
                </Card>
              ))
            ) : (
              <Skeleton key={Date.now()} />
            )}
          </div>
        ))}
        <div ref={triggerRef}>
          <Skeleton />
        </div>
      </>
    );
  },
);

export default ItemsList;
