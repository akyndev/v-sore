"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Search from "./search";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Navbar = () => {
  const count = useSelector((state: any) => state.counter.value);

  return (
    <nav className="shadow w-full py-2 fixed top-0 z-[9999] bg-white">
      <div className="container mx-auto">
        <div className="flex items-center space-x-12 justify-between">
          <div className="flex items-center space-x-12">
            <Image
              width={80}
              height={80}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCMNNupi0JoorthY3TgUCUqcTlO63vm98abQ&usqp=CAU"
              alt="logo"
              // placeholder="blur"
            />
            <div className="flex gap-4 font-semibold">
              <Link href="/all" className="">
                All
              </Link>
              <Link href="/all" className="">
                Men
              </Link>
              <Link href="/all" className="">
                Women
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <Search />
          </div>
          <div className="pl-10 space-x-8  flex items-center">
            <div className="text-gray-500 cursor-pointer ">
              <AiOutlineHeart fontSize={30} />
            </div>
            <div className="text-gray-500 cursor-pointer relative">
              <AiOutlineShoppingCart fontSize={30} />

              {count > 0 ? (
                <span className="absolute text-sm bg-green-700 rounded-full h-5 w-5 text-white -right-2 font-semibold text-center top-0 -translate-y-1/2">
                  {count}
                </span>
              ) : null}
            </div>
            <div className="w-10 h-10 bg-gradient-to-b from-blue-300 to-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
