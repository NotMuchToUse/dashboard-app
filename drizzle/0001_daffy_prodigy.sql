ALTER TABLE "auth" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "auth" CASCADE;--> statement-breakpoint
ALTER TABLE "employee" DROP CONSTRAINT "employee_role_id_role_id_fk";
--> statement-breakpoint
ALTER TABLE "department" ALTER COLUMN "manager_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "department" ADD CONSTRAINT "department_manager_id_employee_id_fk" FOREIGN KEY ("manager_id") REFERENCES "public"."employee"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "employee" ADD CONSTRAINT "employee_role_id_role_id_fk" FOREIGN KEY ("role_id") REFERENCES "public"."role"("id") ON DELETE restrict ON UPDATE cascade;