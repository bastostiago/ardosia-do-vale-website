import { MenuItem } from "@/models/website";
import { Philosopher } from "next/font/google";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

const philosopher = Philosopher({ weight: "400", subsets: ["latin"] });

interface FooterProps {
  menu: MenuItem[];
}

export default function Footer({ menu }: FooterProps) {
  return (
    <>
      <section className="flex flex-wrap w-full bg-gray-100 border-gray-200 border-t-[1px] pl-8 pb-10 mt-14">
        <div className="flex flex-col w-full mt-10 md:w-1/3">
          <p className={philosopher.className + " text-lg"}>ENDEREÇO</p>
          <p className={"text-sm mt-4"}>Ardósia do Vale Comércio de Pedras</p>
          <p className={"text-sm"}>Rod. BR 470, Km 162 - Bracatinga I</p>
          <p className={"text-sm"}>Trombudo Central - SC</p>
          <p className={"text-sm"}>CEP: 89176-000</p>
          <p className={"text-sm"}>
            Fone: (47) 3544-0444 / 98835-0061 / 98813-1671
          </p>
          <Link href={"/contato"} className={"text-sm text-[#e58b00]"}>
            vendas@ardosiadovale.com.br
          </Link>
        </div>
        <div className="hidden md:flex md:w-1/3 md:mt-10"></div>
        <div className="flex flex-col w-full md:w-1/3 mt-10">
          <p className={philosopher.className + " text-lg"}>MAPA DO SITE</p>
          <div className={"text-sm mt-4"}>
            <ul className="list-none">
              {menu.map((item, index) =>
                item.subItems ? (
                  <li key={index} className="capitalize">
                    <Link href={item.path} className="hover:text-[#e58b00]">
                      {item.description.toLowerCase()}
                    </Link>
                    <ul className="ml-4 list-disc">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex} className="hover:text-[#e58b00]">
                          <Link href={subItem.path}>{subItem.description}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li
                    key={index}
                    className="hover:text-[#e58b00] capitalize list-none"
                  >
                    <Link href={item.path}>
                      {item.description.toLowerCase()}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>
      <footer className="flex flex-wrap w-full p-8 items-center border-gray-200 border-t-[1px]">
        <div className="w-full md:w-2/5 text-sm items-center text-center md:text-start p-3">
          Copyright © 2024 Ardósia do Vale . Todos os Direitos Reservados.
        </div>
        <div className="hidden md:flex md:w-1/5"></div>
        <div className="w-full md:w-2/5 flex justify-center md:justify-end gap-x-2">
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
      </footer>
    </>
  );
}
