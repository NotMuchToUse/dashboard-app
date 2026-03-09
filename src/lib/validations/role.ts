import * as z from "zod";

export const roleSchema = z.object({
  role_name: z
    .string()
    .min(0, "Tên vai trò không được để trống")
    .max(100, "Tên vai trò không được vượt quá 100 ký tự"),
});

export type RoleSchema = z.infer<typeof roleSchema>;
