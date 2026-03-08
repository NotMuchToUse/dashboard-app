import * as z from "zod";

export const departmentSchema = z.object({
  name: z
    .string()
    .min(0, "Tên phòng ban không được trống")
    .max(100, "Tên phòng ban không được vượt quá 100 ký tự"),
  department_code: z
    .string()
    .min(5, "Mã phòng ban không được dưới 5 ký tự")
    .max(10, "Mã phòng ban không được vượt quá 10 ký tự"),
});

export type DepartmentSchema = z.infer<typeof departmentSchema>;
