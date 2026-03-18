"use client";

import { useQuery } from "@tanstack/react-query";
import { instance } from "./axios";

// import { Button } from "@/components/ui/button";
// import { useState } from "react";

interface Todos {
  id: number;
  completed: boolean;
  title: string;
  userId: number;
}

// Fetch truyền thống

// const Page = () => {
//   //B1: Tạo state
//   const [data, setData] = useState<Todos[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       // B2.1: Fetch
//       const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//       //   console.log(res);

//       // B2.2: Check nếu fetch api failed --> trả về false thì ném lỗi - fetch thành công thì chạy tiếp
//       if (!res.ok) throw new Error("Lấy data không thành công");

//       // B3.1: Chuyển data thô thành json
//       const data = await res.json();
//       console.log(data);

//       // B3.2: Set lại state của data
//       setData(data);
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (error: any) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div>
//       {loading && <div>Loading...</div>}
//       {error && <div>{error}</div>}
//       <Button onClick={fetchData}>Click</Button>
//       <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 grid-flow-rows gap-4">
//         {data.map((item, index) => (
//           <div
//             key={item?.id ?? index}
//             className="border p-2 flex flex-col gap-2 shadow-sm"
//           >
//             <span
//               className={`text-xs ${item.completed ? "text-green-500" : "text-red-600"}`}
//             >
//               Trạng thái: {item.completed ? "Hoàn thành" : "Chưa hoàn thành"}
//             </span>
//             <span className="text-xs">User id: {item.userId}</span>
//             <p className="text-sm font-semibold text-neutral-800">
//               Nội dung: {item.title}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Page;

// Fetch dùng thư viện Axios + Tanstack Query (React Query)
// Axios sẽ làm nhiệm vụ fetch
// Tanstack Query sẽ làm nhiệm vụ quản lý state fetching

const fetchData = async (): Promise<Todos[]> => {
  const res = await instance.get("/comments");
  console.table(res.data);
  return res.data;
};

const Page = () => {
  const { data, isLoading, error } = useQuery<Todos[]>({
    queryKey: ["comments"],
    queryFn: fetchData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 grid-flow-rows gap-4">
        {data?.map((item, index) => (
          <div
            key={item?.id ?? index}
            className="border p-2 flex flex-col gap-2 shadow-sm"
          >
            <span
              className={`text-xs ${item.completed ? "text-green-500" : "text-red-600"}`}
            >
              Trạng thái: {item.completed ? "Hoàn thành" : "Chưa hoàn thành"}
            </span>
            <span className="text-xs">User id: {item.userId}</span>
            <p className="text-sm font-semibold text-neutral-800">
              Nội dung: {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
