"use client";
import Image from "next/image";
import React from "react";
import { AiOutlineGithub, AiFillHeart } from "react-icons/ai";
import { GrTwitter, GrLinkedinOption } from 'react-icons/gr'
import { ImFacebook } from 'react-icons/im'
import { RiWhatsappFill } from 'react-icons/ri'

const footer = [
  [
    "catergory",
    "catergory",
    "catergory",
    "catergory",
    "catergory",
    "catergory",
    "catergory",
  ],
  [
    "career",
    "catergory",
    "catergory",
    "catergory",
    "catergory",
    "catergory",
    "catergory",
  ],
  [
    "About",
    "catergory",
    "catergory",
    "catergory",
    "catergory",
    "catergory",
    "catergory",
  ],
  [
    "contact",
    "catergory",
    "catergory",
    "catergory",
    "catergory",
    "catergory",
    "catergory",
  ],
].map((i, index) => (
  <ul key={index} className="space-y-2">
    {i.map((l, n) => (
      <li key={n} className="first:text-lg first:font-semibold capitalize">
        {l}
      </li>
    ))}
  </ul>
));

const Footer = () => {
  return (
    <div className="bg-white mt-12 shadow pt-12 pb-4">
      <div className="container mx-auto">
        <div className="flex space-x-20 items-start">
          <div className="flex items-center">
            <Image
              width={80}
              height={80}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCMNNupi0JoorthY3TgUCUqcTlO63vm98abQ&usqp=CAU"
              alt="logo"
              // placeholder="blur"
            />
            <span className="font-bold text-2xl">v-store</span>
          </div>
          <div className="grid grid-cols-4  flex-1">{footer}</div>
        </div>
        <div className="my-10">

        <hr className="border-1 w-full  border-gray-300" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex space-x-2 items-center">
            <div className="h-10 w-10 bg-gray-100 hover:bg-gray-300 transition-all duration-300 cursor-pointer flex items-center justify-center rounded-full">
              <AiOutlineGithub fontSize={18} />
            </div>
            <div className="h-10 w-10 text-green-700 bg-gray-100 hover:bg-gray-300 transition-all duration-300 cursor-pointer flex items-center justify-center rounded-full">
              <RiWhatsappFill fontSize={18} />
            </div>
            <div className="h-10 w-10 text-blue-900 bg-gray-100 hover:bg-gray-300 transition-all duration-300 cursor-pointer flex items-center justify-center rounded-full">
              <GrLinkedinOption fontSize={18} />
            </div>
            <div className="h-10 w-10 text-blue-800 bg-gray-100 hover:bg-gray-300 transition-all duration-300 cursor-pointer flex items-center justify-center rounded-full">
              <ImFacebook fontSize={18} />
            </div>
            <div className="h-10 w-10 text-blue-600 bg-gray-100 hover:bg-gray-300 transition-all duration-300 cursor-pointer flex items-center justify-center rounded-full">
              <GrTwitter fontSize={18} />
            </div>
          </div>
          <div className="flex font-semibold items-center text-sm">
            <span className="pr-2">All right reserved &#169; {new Date().getFullYear()}</span>
            <span className="flex items-center">
                Made with {"  "}<span className="text-red-700 px-1"><AiFillHeart fontSize={24} /></span> {"  "} by osla
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
