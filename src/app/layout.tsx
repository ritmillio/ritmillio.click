import "@/styles/globals.css";

import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";

import localFont from "next/font/local";

const font = localFont({
  src: "../fonts/MagdaClean.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ritmillio",
  description: "ritmillio portfolio website - building cool stuff only...",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${font.className}`}>
      <body>
        <TRPCReactProvider>
          <main className="bg-gradient h-screen">{children}</main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
