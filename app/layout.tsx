import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Priyanshu Kumar | Junior Software Engineer",
  description:
    "Portfolio of Priyanshu Kumar — aspiring Junior Software Engineer focused on JavaScript, React.js, Next.js, Node.js, full-stack development and Data Structures & Algorithms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}