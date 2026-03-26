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
import { useState, useMemo, useCallback } from "react";
import { debounceFn } from "./debounce";
import { Input } from "@/components/ui/input";
import { userV } from "./data";

export function FilterSortHeader() {
  const router = useRouter();
  const params = useSearchParams();
  const [localValue, setLocalValue] = useState("");

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

  const handleSearchChange = useCallback(
    (newValue: string): void => {
      const newParams = new URLSearchParams(params.toString());

      if (newValue) {
        newParams.set("userId", newValue);
      } else {
        newParams.delete("useId");
      }

      newParams.set("page", "1");

      router.push(`?${newParams.toString()}`, { scroll: false });
    },
    [params, router],
  );

  const debounceInput = useMemo(
    () => debounceFn(handleSearchChange, 300),
    [handleSearchChange],
  );

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const val = e.target.value;
    setLocalValue(val);
    debounceInput(val);
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6 items-center">
      <div>
        <Input
          type="text"
          value={localValue}
          onChange={(e) => onChangeInput(e)}
        />
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
