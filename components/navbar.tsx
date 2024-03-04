import React from "react";
import { Bars3BottomRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

interface MenuItem {
  description: string;
  path: string;
  subItems?: MenuItem[];
}

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

export default function navbar() {
  return (
    <div className="navbar bg-base-100 border-gray-200 border-t-[1px] h-0">
      <div className="navbar">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menu.map((item, index) =>
              item.subItems ? (
                <li key={index} className="hover:text-[#e58b00]">
                  <details>
                    <summary>{item.description}</summary>
                    <ul className="p-2 z-[1]">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link href={subItem.path}>{subItem.description}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={index} className="hover:text-[#e58b00]">
                  <Link href={item.path}>{item.description}</Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="navbar-end lg:hidden">
        <div className="dropdown relative">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Bars3BottomRightIcon className="w-8" />
          </div>
          <ul
            tabIndex={0}
            className="absolute menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-80 right-0"
          >
            {menu.map((item, index) =>
              item.subItems ? (
                <li key={index}>
                  <details>
                    <summary>{item.description}</summary>
                    <ul className="p-2">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link href={subItem.path}>{subItem.description}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={index}>
                  <Link href={item.path}>{item.description}</Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
