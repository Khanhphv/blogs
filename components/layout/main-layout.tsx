"use client";
import { useEffect, useState } from "react";
import { Navbar } from "../organism/navbar";
import Header from "../molecules/header";

interface Props {
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
}
export const MainLayout = (props: Props) => {
  const [vertical, setVertical] = useState(false);
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      setVertical(document.body.clientWidth <= 625);
    });
    resizeObserver.observe(document.body);
    return () => resizeObserver.disconnect();
  }, []);
  return (
    <div className="w-full h-full flex">
      <Header />
      {/* <Navbar vertical={vertical} /> */}
      <div
        className={`sm:min-h-full w-full sm:container max-sm:mb-[50px] flex justify-center sm:pl-[70px] mt-[60px]`}
      >
        <div className="max-w-[640px] pb-[60px] w-full">{props.children}</div>
      </div>
    </div>
  );
};
