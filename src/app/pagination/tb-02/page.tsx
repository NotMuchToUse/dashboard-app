import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchPag } from "./fetchPag";
import RenFull from "./renFull";
import { FilterSortHeader } from "./selectUI";

type SearchP = Promise<{ [key: string]: string | string[] | undefined }>;

const Page = async (props: { searchParams: SearchP }) => {
  const searchParams = await props.searchParams;
  const page = Number(searchParams.page || 1);
  const sort = (searchParams._sort as string) || "id";
  const order = (searchParams._order as string) || "asc";
  const userId = (searchParams.userId as string) || "all";

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", page, userId, sort, order],
    queryFn: () => fetchPag(page, userId, sort, order),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold mb-4">
            Danh sách Post (Trang {page})
          </h1>
          <FilterSortHeader />
        </div>
        <RenFull page={page} userId={userId} sort={sort} order={order} />
      </main>
    </HydrationBoundary>
  );
};

export default Page;
