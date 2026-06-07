import { Poppins } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { css } from "@/styled-system/css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Catgirl discoverer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={body}>{children}</body>
    </html>
  );
}

const body = css({
  maxHeight: "100dvh",
  height: "100dvh",
  display: "flex",
  flexDirection: "column",
});
