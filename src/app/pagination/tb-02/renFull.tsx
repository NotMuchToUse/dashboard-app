"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { fetchPag } from "./fetchPag";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { pagService } from "./pagService";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");

const total = data.length / 20;
console.table(data);

const RenFull = ({ page }: { page: number }) => {
  const totalPage = total;
  const getPag = pagService(page, totalPage);

  const { data, isPlaceholderData } = useQuery<Post[]>({
    queryKey: ["posts", page],
    queryFn: () => fetchPag(page),
    placeholderData: (prev) => prev,
  });
  return (
    <div
      className={`overflow-x-auto transition-opacity ${isPlaceholderData ? "opacity-50" : "opacity-100"}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 grid-flow-rows gap-4">
        {data?.map((item, index) => (
          <div
            key={item?.id ?? index}
            className="border p-2 flex flex-col gap-2 shadow-sm"
          >
            <span>{item.userId}</span>
            <span>{item.title}</span>
            <p>{item.body}</p>
          </div>
        ))}
      </div>

      <Pagination className="mt-10">
        <PaginationContent>
          {/* Trước */}
          <PaginationItem>
            <PaginationPrevious
              href={page > 1 ? `?page=${page - 1}` : "#"}
              className={page <= 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>

          {/* 3 chấm */}
          {getPag.map((p, i) => (
            <PaginationItem key={i}>
              {p === "..." ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink href={`?page=${p}`} isActive={p === page}>
                  {p}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

          {/* Sau */}
          <PaginationItem>
            <PaginationNext
              href={`?page${page + 1}`}
              className={
                page >= totalPage ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default RenFull;
