import axios from "axios";

const LIMIT = 20;

export const fetchPag = async (
  page: number,
  userId?: string,
  sort?: string,
  order?: string,
) => {
  // const { data } = await axios.get(
  //   `https://jsonplaceholder.typicode.com/posts?_limit=${LIMIT}&_page=${page}`,
  // );
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts`,
    {
      params: {
        _page: page,
        _limit: LIMIT,
        _sort: sort,
        _order: order,
        userId: userId === "all" ? undefined : userId,
      },
    },
  );
  return data;
};
