"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { paginationRange } from "./advPagination";

interface Comments {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

const { data } = await axios.get(
  `https://jsonplaceholder.typicode.com/comments`,
);
const total = data.length / 5;
// console.log(data.length);

const fetchPagination = async (page: number) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?_limit=5&_page=${page}`,
  );
  console.log(res.data);
  return res.data;
};

const TableRender = ({ page }: { page: number }) => {
  const totalPages = total; // Giả sử tổng 100 trang
  const getPaginationRange = paginationRange(page, totalPages);

  const { data, isPlaceholderData } = useQuery<Comments[]>({
    queryKey: ["comments", page],
    queryFn: () => fetchPagination(page),
    placeholderData: (prev) => prev,
  });
  return (
    <div className="p-6">
      <div
        className={`overflow-x-auto rounded-lg shadow-md transition-opacity ${isPlaceholderData ? "opacity-50" : "opacity-100"}`}
      >
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
      <Pagination className="mt-10">
        <PaginationContent>
          <PaginationItem>
            {/* Prev */}
            <PaginationPrevious
              href={page > 1 ? `?page=${page - 1}` : "#"}
              className={page <= 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>

          {/* Hiển thị số trang linh hoạt */}
          {/* <PaginationItem>
            <PaginationLink href="?page=1" isActive={page === 1}>
              1
            </PaginationLink>
          </PaginationItem>

          {page > 2 && <PaginationEllipsis />}

          {page !== 1 && (
            <PaginationItem>
              <PaginationLink href={`?page=${page}`} isActive>
                {page}
              </PaginationLink>
            </PaginationItem>
          )} */}

          {getPaginationRange.map((pag, index) => (
            <PaginationItem key={index}>
              {pag === "..." ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink href={`?page=${pag}`} isActive={pag === page}>
                  {pag}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

          {/* Next */}
          <PaginationItem>
            <PaginationNext
              href={`?page=${page + 1}`}
              className={
                page >= totalPages ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default TableRender;
