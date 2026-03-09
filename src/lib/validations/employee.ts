import * as z from "zod";

export const employeeSchema = z.object({
  employee_code: z
    .string()
    .min(5, "Mã nhân viên không được dưới 5 ký tự")
    .max(10, "Mã nhân viên không được vượt quá 10 ký tự"),
  name: z
    .string()
    .min(0, "Tên nhân viên không được trống")
    .max(100, "Tên nhân viên không được vượt quá 100 ký tự"),
  birth: z.coerce.date().max(new Date(), "Ngày sinh không hợp lệ"),
  gender: z.enum(["Nam", "Nữ", "Khác"]),
  email: z
    .string()
    .email("Email không hợp lệ")
    .min(11, "Email không được dưới 11 ký tự")
    .max(255, "Email không được vượt quá 255 ký tự")
    .regex(
      /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i,
    ),
  phone_number: z.coerce
    .number()
    .min(0, "Số điện thoại không hợp lệ")
    .max(15, "Số điện thoại không hợp lệ"),
  address: z
    .string()
    .min(0, "Địa chỉ không hợp lệ")
    .max(255, "Địa chỉ không được vượt quá 255 ký tự"),
  role_id: z.string().uuid("Vai trò không hợp lệ"),
  department_id: z.string().uuid("Mã phòng ban không hợp lệ"),
  salary: z.coerce.number().min(0, "Tiên lương không hợp lệ"),
  start_work: z.coerce.date(),
});

export type EmployeeSchema = z.infer<typeof employeeSchema>;
