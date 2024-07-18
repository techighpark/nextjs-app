import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import '../styles/globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Next Movies',
    default: 'Loading...',
  },
  description: "Generated by create next app",
  authors: {
    name: 'aaa',
    url: 'zzz'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
