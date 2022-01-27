import React from "react";
import HamburguerButton from "./HamburguerButton";

function DropMenu({ isOpened, setIsOpened }) {
  return (
    <div
      className={` bg-omnifood-tint_3 fixed top-0 left-0 right-0 h-screen ${
        isOpened ? "" : "hidden"
      } lg:hidden z-50`}
    >
      <div
        className="flex space-x-4 justify-end py-7  px-6  lg:px-8 xl:px-12 items-center h-20"
        onClick={() => setIsOpened(false)}
      >
        <span className="font-semibold text-sm sm:text-base">CLOSE</span>
        <HamburguerButton isOpened={isOpened} />
      </div>
      <ul className=" list-none flex flex-col items-center text-4xl md:text-5xl  space-y-12 text-gray-700 font-semibold ">
        <li className=" inline-block ">
          <a
            href="#"
            className="   tracking-wide border-b-2 border-transparent hover:border-gray-700 transition-all cursor-pointer "
          >
            How it works
          </a>
        </li>

        <li className=" inline-block  ">
          <a
            href="#"
            className="   tracking-wide border-b-2 border-transparent hover:border-gray-700 transition-all cursor-pointer"
          >
            Meals
          </a>
        </li>

        <li className=" inline-block ">
          <a
            href="#"
            className="   tracking-wide border-b-2 border-transparent hover:border-gray-700 transition-all cursor-pointer"
          >
            Testimonials
          </a>
        </li>

        <li className=" inline-block ">
          <a
            href="#"
            className="   tracking-wide border-b-2 border-transparent hover:border-gray-700 transition-all cursor-pointer"
          >
            Pricing
          </a>
        </li>
      </ul>
    </div>
  );
}

export default DropMenu;
