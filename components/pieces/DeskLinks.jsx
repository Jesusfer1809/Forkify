import React from "react";

import { Link as ScrollLink } from "react-scroll";

function DeskLinks() {
  return (
    <ul className=" list-none hidden lg:inline">
      <li className=" inline-block ml-8 xl:ml-12 text-gray-700 font-semibold text-base xl:text-lg 2xl:text-xl tracking-wide hover:text-omnifood-shade_1 transition-all cursor-pointer">
        <ScrollLink
          to="work"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          How it works
        </ScrollLink>
      </li>

      <li className=" inline-block ml-8 xl:ml-12 text-gray-700 font-semibold text-base xl:text-lg 2xl:text-xl tracking-wide hover:text-omnifood-shade_1 transition-all cursor-pointer ">
        <ScrollLink
          to="meals"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Meals
        </ScrollLink>
      </li>

      <li className=" inline-block ml-8 xl:ml-12 text-gray-700 font-semibold text-base xl:text-lg 2xl:text-xl tracking-wide hover:text-omnifood-shade_1 transition-all cursor-pointer">
        <ScrollLink
          to="testimonials"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Testimonials
        </ScrollLink>
      </li>

      <li className="inline-block ml-8 xl:ml-12 text-gray-700 font-semibold text-base xl:text-lg 2xl:text-xl tracking-wide hover:text-omnifood-shade_1 transition-all cursor-pointer">
        <ScrollLink
          to="pricing"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Pricing
        </ScrollLink>
      </li>

      <li className=" inline-block ml-8 xl:ml-12 text-white font-semibold bg-omnifood-primary px-4 py-2 xl:px-5 xl:py-3 rounded-lg text-sm md:text-base xl:text-lg 2xl:text-xl tracking-wide hover:bg-omnifood-shade_1 transition-all cursor-pointer">
        <ScrollLink
          to="try"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Try for free
        </ScrollLink>
      </li>
    </ul>
  );
}

export default DeskLinks;
