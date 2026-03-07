import * as t from "drizzle-orm/pg-core";
import { pgTable as table } from "drizzle-orm/pg-core";

export const Auth = table("auth", {
  id: t.uuid("id").primaryKey().notNull().defaultRandom().unique(),
  email: t.varchar("email", { length: 255 }).notNull().unique(),
  password: t.varchar("password", { length: 255 }).notNull(),
  employee_id: t
    .uuid("employee_id")
    .notNull()
    .references(() => Employee.id),
  createAt: t.timestamp("createAt").defaultNow().notNull(),
  updateAt: t.timestamp("updateAt").defaultNow().notNull(),
});

export const Employee = table("employee", {
  id: t.uuid("id").primaryKey().notNull().defaultRandom(),
  employee_code: t.char("employee_code", { length: 10 }).notNull().unique(),
  name: t.varchar("name", { length: 100 }).notNull(),
  birth: t.date("birth").notNull(),
  gender: t.char("gender", { length: 10 }).notNull(),
  email: t.varchar("email", { length: 255 }).notNull().unique(),
  phone_number: t.varchar("phone_number", { length: 15 }).notNull(),
  address: t.varchar("address", { length: 255 }).notNull(),
  role_id: t
    .uuid("role_id")
    .notNull()
    .references(() => Role.id),
  department_id: t
    .uuid("department_id")
    .notNull()
    .references(() => Department.id),
  salary: t.decimal("salary", { precision: 10, scale: 2 }).notNull(),
  start_work: t.date("start_work").notNull(),
  end_work: t.date("end_work"),
  createAt: t.timestamp("createAt").defaultNow().notNull(),
  updateAt: t.timestamp("updateAt").defaultNow().notNull(),
});

export const Department = table("department", {
  id: t.uuid("id").primaryKey().notNull().defaultRandom(),
  name: t.varchar("name", { length: 100 }).notNull(),
  manager_id: t.uuid("manager_id").notNull().unique(),
  department_code: t.char("department_code", { length: 10 }).notNull(),
  createAt: t.timestamp("createAt").defaultNow().notNull(),
  updateAt: t.timestamp("updateAt").defaultNow().notNull(),
});

export const Role = table("role", {
  id: t.uuid("id").primaryKey().notNull().defaultRandom(),
  role_name: t.varchar("role_name", { length: 100 }).notNull(),
});
