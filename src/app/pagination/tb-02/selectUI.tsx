"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const userV = [
  {
    v: "1",
    n: "User 1",
  },
  {
    v: "2",
    n: "User 2",
  },
  {
    v: "3",
    n: "User 3",
  },
  {
    v: "4",
    n: "User 4",
  },
  {
    v: "5",
    n: "User 5",
  },
  {
    v: "6",
    n: "User 6",
  },
  {
    v: "7",
    n: "User 7",
  },
  {
    v: "8",
    n: "User 8",
  },
  {
    v: "9",
    n: "User 9",
  },
  {
    v: "10",
    n: "User 10",
  },
];

export function FilterSortHeader() {
  const router = useRouter();
  const params = useSearchParams();

  const currUser = params.get("userId") || "all";
  const currSort = params.get("_sort") || "id";
  const currOrder = params.get("_order") || "asc";
  const sortUser = `${currSort}-${currOrder}`;

  const handleFilterChange = (newValue: string): void => {
    const newParams = new URLSearchParams(params.toString());

    if (newValue === "all") {
      newParams.delete("userId");
    } else {
      newParams.set("userId", newValue);
    }

    newParams.set("page", "1");
    router.push(`?${newParams.toString()}`, { scroll: false });
  };

  const handleSortChange = (newValue: string): void => {
    const newParams = new URLSearchParams(params.toString());
    const [sortField, sortOrder] = newValue.split("-");

    newParams.set("_sort", sortField);
    newParams.set("_order", sortOrder);

    newParams.set("page", "1");

    router.push(`?${newParams.toString()}`, { scroll: false });
  };
  return (
    <div className="flex flex-wrap gap-4 mb-6 items-center">
      <div>
        <input type="text" />
      </div>
      {/* Filter theo User ID */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium">Lọc theo tác giả</label>
        <Select value={currUser} onValueChange={handleFilterChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Chọn User" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tất cả tác giả</SelectItem>
            {userV.map((i) => (
              <SelectItem value={i.v} key={i.v}>
                {i.n}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Sort dữ liệu */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium">Sắp xếp</label>
        <Select value={sortUser} onValueChange={handleSortChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sắp xếp theo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Sắp xếp</SelectItem>
            <SelectItem value="id-asc">Mới nhất</SelectItem>
            <SelectItem value="id-desc">Cũ nhất</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
