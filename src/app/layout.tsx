import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gitfólio",
  description: "Crie o seu portfólio com apenas um clique",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
