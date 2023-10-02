"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export const LightDarkSwitch = () => {
  return (
    <div className="flex justify-center">
      <SunIcon width={30} />
      <MoonIcon className="ms-3" width={30} />
    </div>
  );
};
