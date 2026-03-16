import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "React Playground",
  description: "Learning React concepts with Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main style={{ padding: "20px" }}>{children}</main>
      </body>
    </html>
  );
}
