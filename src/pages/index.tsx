import { Card } from "primereact/card";
import Reviews from "@/components/reviews";
import Cart from "@/components/cart";
import ItemsList from "@/components/itemsList";
import { ItemsState } from "@/stores/items";
import { CartState } from "@/stores/cart";
import { getItems, getReviews } from "@/apiRequests";
import { ItemDTO, ReviewDTO } from "@/types/apiResponse";

export default function Home({
  reviews,
  firstItems,
}: {
  reviews: ReviewDTO[];
  firstItems: ItemDTO[];
}) {
  const items = new ItemsState();
  const cart = new CartState();

  items.pushItems(firstItems);

  return (
    <>
      <Card title="Тестовое Задание" className="header" />
      <Reviews reviews={reviews} />
      <Cart cart={cart} />
      <ItemsList cart={cart} itemsState={items} />
    </>
  );
}

export async function getServerSideProps() {
  const reviews = await getReviews();
  const firstItems = await getItems(1);
  return { props: { reviews, firstItems: firstItems.items } };
}
