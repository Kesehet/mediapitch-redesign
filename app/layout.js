import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mediapitch",
  description: "Your strategic partner in comprehensive digital solutions, combining innovation with execution to transform your brand vision into reality.",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        {/* <ScrollRestoration /> */}
        {/* <Scripts /> */}
      </body>
    </html>
  );
}
