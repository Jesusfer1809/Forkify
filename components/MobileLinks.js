import React from "react";
import HamburguerButton from "./HamburguerButton";

function MobileLinks({ openMenu, isOpened }) {
  return (
    <div className="flex lg:hidden items-center space-x-4 ">
      <div className=" hidden sz500:inline-block   ">
        <a
          href="#"
          className=" text-white font-semibold bg-omnifood-primary px-4 py-2 xl:px-5 xl:py-3 rounded-lg text-sm md:text-base xl:text-lg tracking-wide hover:bg-omnifood-shade_1 transition-all"
        >
          Try for free
        </a>
      </div>

      <div className="flex items-center space-x-4" onClick={openMenu}>
        <span className="font-semibold text-sm sm:text-base">MENU</span>
        <HamburguerButton isOpened={isOpened} />
      </div>
    </div>
  );
}

export default MobileLinks;
