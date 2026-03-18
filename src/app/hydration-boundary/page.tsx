import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ClientRender from "./clientRender";
import { fetchApi } from "./fetchApi";

const Page = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["comments"],
    queryFn: fetchApi,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="p-4">
        <h1>Danh sách Todo (Render từ Server)</h1>
        <ClientRender />
      </main>
    </HydrationBoundary>
  );
};

export default Page;
