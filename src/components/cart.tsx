import "@/styles/wrappers.css";
import { Card } from "primereact/card";
import { InputMask } from "primereact/inputmask";
import { Button } from "primereact/button";
import { CartState } from "@/stores/cart";
import { observer } from "mobx-react-lite";
import { useLocalStorage } from "primereact/hooks";
import { useRef, useState } from "react";
import { postOrder } from "@/apiRequests";
import { Toast } from "primereact/toast";

const Cart = observer(({ cart }: { cart: CartState }) => {
  const [phone, setPhone] = useLocalStorage<string>("", "phone");
  const [invalid, setInvalid] = useState(false);
  const toast = useRef<Toast>(null);

  function order() {
    const phoneNums = phone.match(/\b\d+\b/g)?.join("");
    if (phoneNums?.length === 11) {
      setInvalid(false);
      postOrder(phoneNums, cart.cart).then(() => popup());
    } else setInvalid(true);
  }

  function popup() {
    toast.current?.show({
      severity: "success",
      summary: "Успешно",
      detail: "Заказ был успешно отправлен",
    });
  }

  return (
    <div className="container">
      <Card subTitle="Добавленные товары">
        <div
          className="container"
          style={{ margin: 0, flexDirection: "column" }}
        >
          <div className="cart">
            {cart.cart.map((item) => (
              <p key={item.id}>
                {item.name} x{item.quantity} {item.price * item.quantity}руб.
              </p>
            ))}
          </div>
          <div className="container" style={{ margin: 0 }}>
            <InputMask
              id="phone-input"
              invalid={invalid}
              mask="+7 (999) 999 99-99"
              value={phone}
              autoClear={false}
              onChange={(e) => setPhone(e.value || "")}
            />

            <Button label="Заказать" onClick={order} />
          </div>
        </div>
      </Card>
      <Toast ref={toast} />
    </div>
  );
});

export default Cart;
