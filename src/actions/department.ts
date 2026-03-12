"use server";

import { db } from "@/db";
import { Department } from "@/db/schema/department";
import { departmentSchema } from "@/lib/validations/department";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const createDepartment = async (formData: FormData) => {
  // 1. Lấy data từ form ở client --> đưa đống data đó vào object mới
  const data = {
    name: formData.get("name"),
    manager_id: formData.get("manager_id"),
    department_code: formData.get("department_code"),
  };

  // 2. Validate đống data đó, nếu error --> return lỗi
  const validateData = departmentSchema.safeParse(data);
  if (!validateData.success) {
    return {
      success: false,
      msg: validateData.error.issues[0].message,
    };
  }
  // 3. Lưu vào db
  try {
    await db.insert(Department).values(validateData.data);

    // 4. Cập nhật path
    revalidatePath("/department");
    return { success: true, msg: "Thêm phòng ban thành công" };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

export const updateDepartment = async (formData: FormData) => {
  // 1. Lấy data từ form ở client --> đưa đống data đó vào object mới
  const data = {
    name: formData.get("name"),
    manager_id: formData.get("manager_id"),
    department_code: formData.get("department_code"),
  };

  // 2. Validate đống data đó, nếu error --> return lỗi hoặc throw new Error
  const validateData = departmentSchema.safeParse(data);
  if (!validateData.success) {
    return {
      success: false,
      msg: validateData.error.issues[0].message,
    };
  }
  // 3. Lưu vào db
  try {
    const idData = formData.get("id") as string;

    await db
      .update(Department)
      .set(validateData.data)
      .where(eq(Department.id, idData));

    // 4. Cập nhật path
    revalidatePath("/department");
    return { success: true, msg: "Cập nhật phòng ban thành công" };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

export const deleteDepartment = async (id: string) => {
  try {
    await db.delete(Department).where(eq(Department.id, id));

    revalidatePath("/department");
    return { success: true, msg: "Xóa phòng ban thành công" };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};
