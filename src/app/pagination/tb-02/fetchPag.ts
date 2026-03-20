import axios from "axios";

const LIMIT = 20;

export const fetchPag = async (page: number) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=${LIMIT}&_page=${page}`,
  );
  return data;
};
