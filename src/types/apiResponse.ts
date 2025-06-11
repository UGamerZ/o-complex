export type ReviewDTO = {
  id: number;
  text: string;
};

export type ItemsResponseDTO = {
  page: number;
  amount: number;
  total: number;
  items: ItemDTO[];
};

export type ItemDTO = {
  id: 12;
  image_url: string;
  title: string;
  description: string;
  price: number;
};
