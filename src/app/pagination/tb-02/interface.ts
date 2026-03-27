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

interface Search {
  localValue: string;
  onChangeInput: (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => void;
}

interface Filter {
  currUser: string;
  handleFilterChange: (newValue: string) => void;
}

interface Sort {
  sortUser: string;
  handleSortChange: (newValue: string) => void;
}

export type { Post, Params, Item, DynamicPagination, Search, Filter, Sort };
