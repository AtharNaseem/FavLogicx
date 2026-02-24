import Header from "@/components/common/header";
import BottomNav from "@/components/common/MobileBottomBar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <>
      <div className="lg:p-[1%]">
        {children}
      </div>{" "}
    </>
  );
}
