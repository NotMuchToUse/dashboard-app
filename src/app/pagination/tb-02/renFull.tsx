"use client";
import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
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
import { type DynamicPagination, type Item, Params, Post } from "./interface";
import FollowingPointerCard from "@/components/following-pointer-demo";
import { Products, productsData } from "./data";

// const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");

// const total = data.length / 20;
// console.table(data);

const RenFull = ({ page, userId, sort, order }: Params) => {
  const totalPage = productsData.length / 20;
  const getPag = pagService(page, totalPage);

  const { data, isPlaceholderData } = useQuery<Products[] | undefined>({
    queryKey: ["posts", page, userId, sort, order],
    queryFn: () => fetchPag(page, userId, sort, order),
    placeholderData: (prev) => prev,
  });

  return (
    <div
      className={`overflow-x-auto transition-opacity ${isPlaceholderData ? "opacity-50" : "opacity-100"}`}
    >
      <Item data={data} />

      <DynamicPagination page={page} getPag={getPag} totalPage={totalPage} />
    </div>
  );
};

export default RenFull;

function Item({ data }: Products[]) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 grid-flow-rows gap-4">
      {data?.map((item, index) => (
        // <div
        //   key={item?.id ?? index}
        //   className="border p-2 flex flex-col gap-2 shadow-sm"
        // >
        //   <span>{item.userId}</span>
        //   <span>{item.title}</span>
        //   <p>{item.body}</p>
        // </div>
        <FollowingPointerCard
          id={item.id}
          name={item.name}
          title={item.title}
          author={item.author}
          authorAvatar={item.authorAvatar}
          image={item.image}
          description={item.description}
          date={item.date}
          key={item.id ?? index}
        />
      ))}
    </div>
  );
}

function DynamicPagination({ page, getPag, totalPage }: DynamicPagination) {
  return (
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
            href={`?=page${page + 1}`}
            className={
              page >= totalPage ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
