import React from "react";

function DeskLinks() {
  return (
    <ul className=" list-none hidden lg:inline">
      <li className=" inline-block ml-8 xl:ml-12">
        <a
          href="#"
          className=" text-gray-700 font-semibold text-base xl:text-lg tracking-wide hover:text-omnifood-shade_1 transition-all cursor-pointer "
        >
          How it works
        </a>
      </li>

      <li className=" inline-block ml-8 xl:ml-12 ">
        <a
          href="#"
          className=" text-gray-700 font-semibold text-base xl:text-lg tracking-wide hover:text-omnifood-shade_1 transition-all cursor-pointer"
        >
          Meals
        </a>
      </li>

      <li className=" inline-block ml-8 xl:ml-12">
        <a
          href="#"
          className=" text-gray-700 font-semibold text-base xl:text-lg tracking-wide hover:text-omnifood-shade_1 transition-all cursor-pointer"
        >
          Testimonials
        </a>
      </li>

      <li className=" inline-block ml-8 xl:ml-12">
        <a
          href="#"
          className=" text-gray-700 font-semibold text-base xl:text-lg tracking-wide hover:text-omnifood-shade_1 transition-all cursor-pointer"
        >
          Pricing
        </a>
      </li>

      <li className=" inline-block ml-8 xl:ml-12">
        <a
          href="#"
          className=" text-white font-semibold bg-omnifood-primary px-4 py-2 xl:px-5 xl:py-3 rounded-lg text-base xl:text-lg tracking-wide hover:bg-omnifood-shade_1 transition-all"
        >
          Try for free
        </a>
      </li>
    </ul>
  );
}

export default DeskLinks;
