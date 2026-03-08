import * as t from "drizzle-orm/pg-core";
import { pgTable as table } from "drizzle-orm/pg-core";

export const Role = table("role", {
  id: t.uuid("id").primaryKey().notNull().defaultRandom(),
  role_name: t.varchar("role_name", { length: 100 }).notNull(),
});
