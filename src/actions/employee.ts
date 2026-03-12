"use server";

import { db } from "@/db";
import { Employee } from "@/db/schema/employee";
import { employeeSchema } from "@/lib/validations/employee";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const createEmployee = async (formData: FormData) => {
  const data = {
    employee_code: formData.get("employee_code"),
    name: formData.get("name"),
    birth: formData.get("birth"),
    gender: formData.get("gender"),
    email: formData.get("email"),
    phone_number: formData.get("phone_number"),
    address: formData.get("address"),
    role_id: formData.get("role_id"),
    department_id: formData.get("department_id"),
    salary: formData.get("salary"),
    start_work: formData.get("start_work"),
  };

  const validateData = employeeSchema.safeParse(data);
  if (!validateData.success) {
    return { success: false, msg: validateData.error.issues[0].message };
  }

  try {
    await db.insert(Employee).values(validateData.data);

    revalidatePath("/employee");

    return { success: true, msg: "Thêm nhân viên thành công" };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

export const updateEmployee = async (formData: FormData) => {
  const data = {
    employee_code: formData.get("employee_code"),
    name: formData.get("name"),
    birth: formData.get("birth"),
    gender: formData.get("gender"),
    email: formData.get("email"),
    phone_number: formData.get("phone_number"),
    address: formData.get("address"),
    role_id: formData.get("role_id"),
    department_id: formData.get("department_id"),
    salary: formData.get("salary"),
    start_work: formData.get("start_work"),
    end_work: formData.get("end_work"),
  };

  const validateData = employeeSchema.safeParse(data);
  if (!validateData.success) {
    return { success: false, msg: validateData.error.issues[0].message };
  }

  try {
    const idData = formData.get("id") as string;
    await db
      .update(Employee)
      .set(validateData.data)
      .where(eq(Employee.id, idData));

    revalidatePath("/employee");

    return { success: true, msg: "Cập nhật nhân viên thành công" };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

export const deleteEmployee = async (id: string) => {
  try {
    await db.delete(Employee).where(eq(Employee.id, id));

    revalidatePath("/employee");
    return { success: true, msg: "Xóa nhân viên thành công" };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};
