import { Inter, Inter_Tight, PT_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter_Tight({ subsets: ["latin"] });
const pt_sans = PT_Sans({ weight: "400", subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={
          pt_sans.className}
        id="body"
      >
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">=(</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Página não encontrada!
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Página não encontrada!
        </p>        
      </div>
    </main>
      </body>
    </html>
  );
}
