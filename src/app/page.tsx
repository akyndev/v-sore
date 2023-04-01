"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { increaseCount } from "@/features/counter/counter";
import { useSelector, useDispatch } from 'react-redux'
import Products from "@/components/products";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  // const dispatch =   useDispatch()
  // const count = useSelector((state: any) => state.counter.value)

  

  return (
    <>
      <Products />
    </>
  );
}
