/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/public/scss/style.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iniciar sesión - Spotify",
  description: "App for testing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/img/favicon.png" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
