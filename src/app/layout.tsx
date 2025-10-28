import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Werner Müller | Desarrollador Web Full Stack",
  description:
    "Sitios rápidos, escalables y modernos con React, Next.js, Node.js y Tailwind CSS.",
  icons: {
    icon: "/icons8-analistica-web-windows-11-color-32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
