"use client";

import React, { useRef } from "react";
import { Bars3BottomRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { MenuItem } from "@/models/website";

interface NavBarProps {
  menu: MenuItem[];
}

export default function navbar({ menu }: NavBarProps) {
  const handleClick = () => {
    const elem = document.getElementById("parent");
    const elem2 = document.activeElement;
    if (elem2) {
      elem?.blur();
    }
    if (elem) {
      elem.open = false;
    }
  };

  return (
    <div className="navbar bg-base-100 border-gray-200 border-t-[1px] h-7">
      <div className="navbar">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menu.map((item, index) =>
              item.subItems ? (
                <li key={index}>
                  <details id="parent">
                    <summary className="hover:text-[#e58b00]">
                      {item.description}
                    </summary>
                    <ul className="p-2 z-[1]">
                      <li
                        key={-1}
                        className="hover:text-[#e58b00]"
                        onClick={handleClick}
                      >
                        <Link href={item.path}>Todos</Link>
                      </li>
                      {item.subItems.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="hover:text-[#e58b00]"
                          onClick={handleClick}
                        >
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
                  <details id="parent">
                    <summary>{item.description}</summary>
                    <ul className="p-2">
                      <li
                        key={-1}
                        className="hover:text-[#e58b00]"
                        onClick={handleClick}
                      >
                        <Link href={item.path}>Todos</Link>
                      </li>
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex} onClick={handleClick}>
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
