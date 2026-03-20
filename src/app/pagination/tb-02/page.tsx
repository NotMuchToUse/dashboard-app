import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchPag } from "./fetchPag";
import RenFull from "./renFull";

type SearchP = Promise<{ [key: string]: string | string[] | undefined }>;

const Page = async (props: { searchParams: SearchP }) => {
  const searchParams = await props.searchParams;
  const page = Number(searchParams.page || 1);

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPag(page),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="p-4">
        <h1 className="text-xl font-bold mb-4">
          Danh sách Post (Trang {page})
        </h1>
        <RenFull page={page} />
      </main>
    </HydrationBoundary>
  );
};

export default Page;
