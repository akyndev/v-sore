"use client";

import { increaseCount } from "@/features/counter/counter";
import Image from "next/image";
import React from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { useDispatch } from "react-redux";

const Product = () => {

  const dispatch = useDispatch()


  return (
    <div className="w-full flex flex-col rounded-sm justify-between h overflow-hidden bg-white shadow">
      <div className="h-72 overflow-hidden">
        <Image
          alt="name"
          width={600}
          height={500}
          className="h-96 w-full transition-all duration-300 object-cover hover:scale-105"
          src="https://media.istockphoto.com/id/1018293976/photo/attractive-fashionable-woman-posing-in-white-trendy-sweater-beige-pants-and-autumn-heels-on.jpg?s=612x612&w=0&k=20&c=_CLawpZw6l9z0uV4Uon-7lqaS013E853ub883pkIK3c="
        />
      </div>
      <div className="px-4 py-2">
        <h3 className="text-lg font-semibold">A beautiful trousers</h3>
        <p className="text-sm text-gray-700 py-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          non et nemo aliquam minus consectetur nulla culpa reiciendis itaque
          sint
        </p>
      </div>
      <div className="flex items-center py-2 px-4 justify-between">
        <div className="flex text-base font-semibold items-center">
          <TbCurrencyNaira fontSize={20} />
          <span className="text-lg">5,000</span>
        </div>
        <div>
          <button onClick={() => dispatch(increaseCount())} className="rounded-full bg-blue-700 text-white py-2 px-4 text-sm font-semibold">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
