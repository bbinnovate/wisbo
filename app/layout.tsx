import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wisbo – Screen-Free Storytelling Speakers for Kids | Indian Stories Come Alive",
  description:
    "Wisbo creates screen-free storytelling speakers for children. Place a character figure to hear Indian stories instantly, and lift it to pause. Simple, playful, and value-driven learning.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        

 <SmoothScroll>

        {children}

 </SmoothScroll>

      </body>
    </html>
  );
}
