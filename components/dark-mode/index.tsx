"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useLayoutEffect, useState } from "react";

export const LightDarkSwitch = () => {
  const onChangeDarkMode = (mode: Boolean) => {
    if (mode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  useLayoutEffect(() => {
    onChangeDarkMode(localStorage.theme && localStorage.theme == "dark");
  }, []);

  return (
    <div className="flex justify-center mt-2">
      <div onClick={() => onChangeDarkMode(false)}>
        <SunIcon
          className="dark:text-white dark:hover:bg-pink-400 bg-pink-400 dark:bg-black rounded-full p-2"
          width={50}
        />
      </div>
      <div onClick={() => onChangeDarkMode(true)}>
        <MoonIcon
          className="ms-3 dark:text-white dark:bg-pink-400 hover:bg-pink-400 rounded-full p-2"
          width={50}
        />
      </div>
    </div>
  );
};
