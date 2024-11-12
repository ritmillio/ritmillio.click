import "@/styles/globals.css";

import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";

import localFont from "next/font/local";

export const font = localFont({
  src: "../fonts/MagdaClean.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
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
