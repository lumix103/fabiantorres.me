import type { Metadata } from "next";
import { Bricolage_Grotesque, Sora } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "./providers";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "Fabs' Portfolio",
  description: "Fabs' personal website",
  openGraph: {
    images: [
      {
        url: "https://www.fabiantorres.me/images/logo.png",
        width: 500,
        height: 500,
        alt: "Fabs' Portfolio Thumbnail",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${bricolage.variable} antialiased bg-vodka min-h-screen min-w-screen text-vampire-black overflow-x-hidden`}
      >
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
