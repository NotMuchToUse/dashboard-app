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

export function FilterSortHeader() {
  const router = useRouter();
  const params = useSearchParams();

  const currUser = params.get("userId") || "all";

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
  return (
    <div className="flex flex-wrap gap-4 mb-6 items-center">
      {/* Filter theo User ID */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium">Lọc theo tác giả</label>
        <Select value={currUser} onValueChange={handleFilterChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Chọn User" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tất cả tác giả</SelectItem>
            <SelectItem value="1">User 1</SelectItem>
            <SelectItem value="2">User 2</SelectItem>
            <SelectItem value="3">User 3</SelectItem>
            {/* ... bạn có thể map thêm từ 1-10 */}
          </SelectContent>
        </Select>
      </div>

      {/* Sort dữ liệu */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium">Sắp xếp</label>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sắp xếp theo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="id-asc">Mới nhất (ID tăng dần)</SelectItem>
            <SelectItem value="id-desc">Cũ nhất (ID giảm dần)</SelectItem>
            <SelectItem value="title-asc">Tiêu đề (A-Z)</SelectItem>
            <SelectItem value="title-desc">Tiêu đề (Z-A)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
