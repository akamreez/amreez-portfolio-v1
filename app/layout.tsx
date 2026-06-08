import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amreez Khan A | Software Engineer",
  description:
    "Backend Developer, AI & Data Science Engineer, Machine Learning Enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}