import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StudyNotes AI",
  description: "Your intelligent study companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <header className="w-full bg-black py-4">
              <div className="container max-w-4xl flex items-center justify-between">
                <div className="flex items-center">
                  <Link href="/" className="flex items-center gap-1">
                    <BookOpen className="h-5 w-5" />
                    <span className="font-semibold">StudyNotes AI</span>
                  </Link>
                </div>
                <nav className="flex items-center gap-4">
                  <Link href="/login">
                    <span className="text-sm hover:text-gray-300">Login</span>
                  </Link>
                  <Link href="/register">
                    <span className="text-sm hover:text-gray-300">Sign Up</span>
                  </Link>
                </nav>
              </div>
            </header>
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
