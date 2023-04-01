import React, { PropsWithChildren } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard for dev",
};

const layout = ({ children }: PropsWithChildren) => {
  return <div className="bg-white text-black h-screen">{children}</div>;
};

export default layout;
