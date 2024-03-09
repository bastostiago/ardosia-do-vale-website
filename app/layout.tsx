import { Inter, Inter_Tight, PT_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import Navbar from "@/components/navbar";
import { MenuItem } from "@/models/website";
import Footer from "@/components/footer";
import Link from "next/link";

const inter = Inter_Tight({ subsets: ["latin"] });
const pt_sans = PT_Sans({ weight: "400", subsets: ["latin"] });

const menu: MenuItem[] = [
  {
    description: "PÁGINA INICIAL",
    path: "/",
  },
  {
    description: "QUEM SOMOS",
    path: "/quem-somos",
  },
  {
    description: "PRODUTOS",
    path: "/produtos",
    subItems: [
      {
        description: "Residencial",
        path: "/produtos/residencial",
      },
      {
        description: "Jazigos",
        path: "/produtos/jazigos",
      },
    ],
  },
  {
    description: "PEDRA ARDÓSIA",
    path: "/pedra-ardosia",
  },
  {
    description: "TROMBUDO CENTRAL",
    path: "/trombudo-central",
  },
  {
    description: "MEIO AMBIENTE",
    path: "/meio-ambiente",
  },
  {
    description: "CONTATO",
    path: "/contato",
  },
];

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
          <main className="bg-white xl:w-9/12 2xl:w-8/12 w-11/12 md:mt-8 mt-4 mb-4 md:mb-8 shadow-md">
            <header className="p-8 items-center flex md:h-48 h-36">
              <div className="w-11/12">
                <Link href={"/"}>
                  <Image
                    alt="Logo Ardósia do Vale"
                    src={"/logo.png"}
                    width={300}
                    height={50}
                  ></Image>
                </Link>
              </div>
              <div className="md:flex md:gap-x-2 hidden">
                <SocialIcon
                  href="https://www.facebook.com/ardosiadovale"
                  network="facebook"
                  style={{ height: 30, width: 30 }}
                  className="transition ease-out duration-300 hover:scale-125"
                />
                <SocialIcon
                  href="https://www.instagram.com/ardosiadovale/"
                  network="instagram"
                  style={{ height: 30, width: 30 }}
                  className="transition ease-out duration-300 hover:scale-125"
                />
              </div>
            </header>
            <Navbar menu={menu} />
            {children}
            <Footer menu={menu} />
          </main>
        </div>
        <div className="fixed bottom-4 right-4">
          <Link
            href={
              "https://api.whatsapp.com/send/?phone=55047988131671&text=Gostaria+de+conversar+a+respeito+dos+seus+produtos.&type=phone_number&app_absent=0"
            }
            className="bg-green-500 text-white w-44 rounded-lg p-0 text-base font-medium shadow-sm hover:bg-green-400"
            target="_blank"
          >
            <SocialIcon
              href={
                "https://api.whatsapp.com/send/?phone=55047988131671&text=Gostaria+de+conversar+a+respeito+dos+seus+produtos.&type=phone_number&app_absent=0"
              }
              network="whatsapp"
              className="hover:scale-110 transition-transform"
              style={{ width: 60, height: 60 }}
              as="div"
            ></SocialIcon>
          </Link>
        </div>
      </body>
    </html>
  );
}
