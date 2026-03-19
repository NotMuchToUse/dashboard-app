import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import TableRender from "./render";
import axios from "axios";
// import Link from "next/link";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const fetchPagination = async (page: number) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?_limit=5&_page=${page}`,
  );

  return res.data;
};

const Page = async (props: { searchParams: SearchParams }) => {
  const searchParams = await props.searchParams;
  const page = Number(searchParams.page || 1);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["comments", page],
    queryFn: () => fetchPagination(page),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="p-4">
        <h1 className="text-xl font-bold mb-4">
          Danh sách Comments (Trang {page})
        </h1>
        <TableRender page={page} />
      </main>
    </HydrationBoundary>
  );
};

export default Page;
