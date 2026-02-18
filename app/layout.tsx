import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./component/header/page";
import Footer from "./component/footer/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const interRegular = localFont({
  src: "./fonts/InterRegular.ttf",
  variable: "--font-inter-regular",
  weight: "400",
});
const interMedium = localFont({
  src: "./fonts/InterMedium.ttf",
  variable: "--font-inter-medium",
  weight: "500",
});
const interSemibold = localFont({
  src: "./fonts/InterSemiBold.ttf",
  variable: "--font-inter-semibold",
  weight: "600",
});

export const metadata: Metadata = {
  title: "Best Web Development Services in Karachi | Glowza Digital",
  description: "We provide professional web development services in Karachi including React, Next.js and custom solutions.",
  robots:{
    index:true,
    follow:true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative  ${geistSans.variable} ${geistMono.variable} ${interRegular.variable} ${interMedium.variable} ${interSemibold.variable} antialiased`}
      >
        
          <Header/>
        
        

        {children}
        <Footer/>
      </body>
    </html>
  );
}
