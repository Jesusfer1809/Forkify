import React from "react";

function Navbar() {
  return (
    <div className=" flex justify-between py-7 px-12 items-center bg-omnifood-tint_1">
      <img src="./omnifood-logo.png" className=" h-6" />

      <ul className=" list-none">
        <li className=" inline-block ml-12">
          <a
            href="#"
            className=" text-gray-700 font-semibold text-lg tracking-wide hover:text-omnifood-shade_1 transition-all cursor-pointer "
          >
            How it works
          </a>
        </li>

        <li className=" inline-block ml-12">
          <a
            href="#"
            className=" text-gray-700 font-semibold text-lg tracking-wide hover:text-omnifood-shade_1 transition-all cursor-pointer"
          >
            Meals
          </a>
        </li>

        <li className=" inline-block ml-12">
          <a
            href="#"
            className=" text-gray-700 font-semibold text-lg tracking-wide hover:text-omnifood-shade_1 transition-all cursor-pointer"
          >
            Testimonials
          </a>
        </li>

        <li className=" inline-block ml-12">
          <a
            href="#"
            className=" text-gray-700 font-semibold text-lg tracking-wide hover:text-omnifood-shade_1 transition-all cursor-pointer"
          >
            Pricing
          </a>
        </li>

        <li className=" inline-block ml-12">
          <a
            href="#"
            className=" text-white font-semibold bg-omnifood-primary px-5 py-3 rounded-lg text-lg tracking-wide hover:bg-omnifood-shade_1 transition-all"
          >
            Try for free
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
