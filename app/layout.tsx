import type { Metadata } from "next";
import { Inter, Inter_Tight, PT_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter_Tight({ subsets: ["latin"] });
const pt_sans = PT_Sans({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Página Inicial | Ardósia do Vale",
  description: "Ardósia do Vale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={
          pt_sans.className +
          " bg-[url('/body-bg.png')] min-h-screen text-gray-500"
        }
      >
        <div className="flex justify-center">
          <main className="bg-white xl:w-9/12 2xl:w-8/12 w-11/12 md:mt-8 mt-4 shadow-md">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
