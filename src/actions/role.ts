"use server";

import { db } from "@/db";
import { Role } from "@/db/schema/role";
import { roleSchema } from "@/lib/validations/role";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const createRole = async (formData: FormData) => {
  const data = {
    role_name: formData.get("role_name"),
  };

  const validateData = roleSchema.safeParse(data);
  if (!validateData.success) {
    return {
      success: false,
      msg: validateData.error.issues[0].message,
    };
  }

  try {
    await db.insert(Role).values(validateData.data);
    revalidatePath("/role");
    return { success: true, msg: "Tạo vai trò thành công" };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

export const updateRole = async (formData: FormData) => {
  const data = {
    role_name: formData.get("role_name"),
  };

  const validateData = roleSchema.safeParse(data);
  if (!validateData.success) {
    return {
      success: false,
      msg: validateData.error.issues[0].message,
    };
  }

  try {
    const idData = formData.get("id") as string;
    await db.update(Role).set(validateData.data).where(eq(Role.id, idData));
    revalidatePath("/role");
    return { success: true, msg: "Cập nhật vai trò thành công" };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

export const deleteRole = async (id: string) => {
  try {
    await db.delete(Role).where(eq(Role.id, id));
    revalidatePath("/role");
    return { success: true, msg: "Xóa vai trò thành công" };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};
