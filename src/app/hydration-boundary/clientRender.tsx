"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchApi } from "./fetchApi";

interface Comments {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

const ClientRender = () => {
  const { data } = useQuery<Comments[]>({
    queryKey: ["comments"],
    queryFn: fetchApi,
  });

  return (
    <div className="p-6">
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <th className="px-6 py-4 text-left font-semibold">Id</th>
              <th className="px-6 py-4 text-left font-semibold">PostId</th>
              <th className="px-6 py-4 text-left font-semibold">Name</th>
              <th className="px-6 py-4 text-left font-semibold">Email</th>
              <th className="px-6 py-4 text-left font-semibold">Body</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr
                key={item?.id ?? index}
                className="border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200"
              >
                <td className="px-6 py-4 text-gray-700">{item.id}</td>
                <td className="px-6 py-4 text-gray-700">{item.postId}</td>
                <td className="px-6 py-4 text-gray-700 font-medium">
                  {item.name}
                </td>
                <td className="px-6 py-4 text-gray-600 text-sm">
                  {item.email}
                </td>
                <td className="px-6 py-4 text-gray-600 max-w-xs truncate">
                  {item.body}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientRender;
