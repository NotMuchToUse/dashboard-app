import { defineConfig } from "drizzle-kit";

const URL = process.env.DATABASE_URL as string;

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema/*.ts",
  out: "./drizzle",
  dbCredentials: {
    url: URL,
  },
});
