import * as t from "drizzle-orm/pg-core";
import { pgTable as table } from "drizzle-orm/pg-core";
import { Employee } from "./employee";

export const Department = table("department", {
  id: t.uuid("id").primaryKey().notNull().defaultRandom(),
  name: t.varchar("name", { length: 100 }).notNull(),
  manager_id: t
    .uuid("manager_id")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .references((): any => Employee.id)
    .unique(),
  department_code: t.char("department_code", { length: 10 }).notNull(),
  createAt: t.timestamp("createAt").defaultNow().notNull(),
  updateAt: t.timestamp("updateAt").defaultNow().notNull(),
});
