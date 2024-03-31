import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "АН РЕВАС",
  description:
    "Надежное агентство РЕВАС поможет вам найти идеальное жилье. Широкий выбор квартир, домов и коммерческой недвижимости.Звоните для консультации!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>АН РЕВАС</title>
        <meta
          name="description"
          content="Надежное агентство РЕВАС поможет вам найти идеальное жилье. Широкий выбор квартир, домов и коммерческой недвижимости.Звоните для консультации!"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
