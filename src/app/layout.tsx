import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {NavBar} from "@/components/ui/NavBar/NavBar";
import {ThemeProvider} from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <ThemeProvider>
          <section className={`${inter.className} dark:bg-[#020e21] bg-slate-200`}>
                <NavBar />
                {children}
              <footer className={''}>
                <p>© {new Date().getFullYear()} My Company</p>

              </footer>
          </section>
        </ThemeProvider>
    </html>
  );
}