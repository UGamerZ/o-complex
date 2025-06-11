import axios from "axios";
import { ItemsResponseDTO, ReviewDTO } from "@/types/apiResponse";
import { CartItemDTO } from "@/types/apiRequest";

export const getReviews = async (): Promise<ReviewDTO[]> => {
  const { data } = await axios.get("http://o-complex.com:1337/reviews");
  return data;
};

export const getItems = async (page: number): Promise<ItemsResponseDTO> => {
  const { data } = await axios.get(
    `http://o-complex.com:1337/products?page=${page}&page_size=3`,
  );
  return data;
};

export const postOrder = async (phone: string, cart: CartItemDTO[]) => {
  const { data } = await axios.post("http://o-complex.com:1337/order", {
    phone,
    cart,
  });
  return data;
};
