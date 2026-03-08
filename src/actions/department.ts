"use server";

import { db } from "@/db";
import { Department } from "@/db/schema";
import { revalidatePath } from "next/cache";

export const createDepartment = async (formData: FormData) => {
  // 1. lấy data từ form ở client
  //   const
  // 2. Validate (zod)
  // 3. kết nối db và dùng lệnh crud (select ,insert, update, delete)
  // 4. Dùng revidatePath để cập nhật UI
};
