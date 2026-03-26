type GetPage = (number | string)[];
type ItemData = Post[] | undefined;

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface Params {
  page: number;
  userId: string;
  sort: string;
  order: string;
}

interface Item {
  data: ItemData;
}

interface DynamicPagination {
  page: number;
  getPag: GetPage;
  totalPage: number;
}

export type { Post, Params, Item, DynamicPagination };
