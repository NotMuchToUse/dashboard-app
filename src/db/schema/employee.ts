import * as t from "drizzle-orm/pg-core";
import { pgTable as table } from "drizzle-orm/pg-core";
import { Role } from "./role";
import { Department } from "./department";

export const Employee = table("employee", {
  id: t.uuid("id").primaryKey().notNull().defaultRandom(),
  employee_code: t.char("employee_code", { length: 10 }).notNull().unique(),
  name: t.varchar("name", { length: 100 }).notNull(),
  birth: t.date("birth", { mode: "date" }).notNull(),
  gender: t.char("gender", { length: 10 }).notNull(),
  email: t.varchar("email", { length: 255 }).notNull().unique(),
  phone_number: t.varchar("phone_number", { length: 15 }).notNull(),
  address: t.varchar("address", { length: 255 }).notNull(),
  role_id: t
    .uuid("role_id")
    .notNull()
    .references(() => Role.id, { onDelete: "restrict", onUpdate: "cascade" }),
  department_id: t
    .uuid("department_id")
    .notNull()
    .references(() => Department.id),
  salary: t.decimal("salary", { precision: 10, scale: 2 }).notNull(),
  start_work: t.date("start_work", { mode: "date" }).notNull(),
  end_work: t.date("end_work", { mode: "date" }),
  createAt: t.timestamp("createAt").defaultNow().notNull(),
  updateAt: t.timestamp("updateAt").defaultNow().notNull(),
});
