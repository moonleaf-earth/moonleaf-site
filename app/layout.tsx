import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HOME_DESCRIPTION, pageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = pageMetadata({
  title: "MoonLeaf AB",
  description: HOME_DESCRIPTION,
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
