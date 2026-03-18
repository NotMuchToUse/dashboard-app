import { instance } from "../fetch-api-adv/axios";

export async function fetchApi() {
  const res = await instance("/comments");

  return res.data;
}
