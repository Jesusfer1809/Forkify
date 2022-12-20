import React from "react";

import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

import { motion } from "framer-motion";
import { animScrollProps } from "utils/anim";

function Footer() {
  const def = (e) => {
    e.preventDefault();
  };

  return (
    <motion.div
      initial={animScrollProps.animInitial}
      transition={animScrollProps.animTransition}
      whileInView={animScrollProps.animWhileInView}
      viewport={animScrollProps.animViewport}
      className=" p-8 sz850:p-16 lg:p-20 xl:p-28  "
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 sz500:grid-cols-6 lg:grid-cols-[2fr_2fr_1fr_1fr_1fr] gap-y-24 gap-x-8 lg:gap-16 text-tg-g_6f6f6f">
        <div className=" col-span-1 sz500:col-span-3 lg:col-span-1">
          <img src="./omnifood-logo.png" className=" w-2/5 lg:w-4/5" />
          <div className="mt-8 mb-20 flex">
            <div className="mr-8 ">
              <AiOutlineInstagram className="w-7 h-7" />
            </div>

            <div className="mr-8">
              <AiFillFacebook className="w-7 h-7" />
            </div>

            <div className="mr-8">
              <AiOutlineTwitter className="w-7 h-7" />
            </div>
          </div>

          <div className=" text-sm">
            Copyright © 2021 by Omnifood, Inc. All rights reserved.
          </div>
        </div>

        <div className=" col-span-1 sz500:col-span-3 lg:col-span-1">
          <h4 className="text-lg text-tg-g_555 font-medium block mb-8">
            Contact us
          </h4>

          <div className=" text-tg-g_555 mb-6">
            623 Harrison St., 2nd Floor, San Francisco, CA 94107
          </div>
          <div>
            <span className="block">415-201-6370</span>
            <span className="block">hello@omnifood.com</span>
          </div>
        </div>

        <div className=" col-span-1 sz500:col-span-2 lg:col-span-1">
          <h4 className="text-lg text-tg-g_555 font-medium block mb-8">
            Account
          </h4>

          <a href="#" className="block mb-4" onClick={def}>
            Create account
          </a>

          <a href="#" className="block mb-4" onClick={def}>
            Sign in
          </a>

          <a href="#" className="block mb-4" onClick={def}>
            iOS app
          </a>

          <a href="#" className="block" onClick={def}>
            Android app
          </a>
        </div>

        <div className=" col-span-1 sz500:col-span-2 lg:col-span-1">
          <h4 className="text-lg text-tg-g_555 font-medium block mb-8">
            Company
          </h4>

          <a href="#" className="block mb-4" onClick={def}>
            About Omnifood
          </a>

          <a href="#" className="block mb-4" onClick={def}>
            For Business
          </a>

          <a href="#" className="block mb-4" onClick={def}>
            Cooking partners
          </a>

          <a href="#" className="block" onClick={def}>
            Careers
          </a>
        </div>

        <div className=" col-span-1 sz500:col-span-2 lg:col-span-1">
          <h4 className="text-lg text-tg-g_555 font-medium block mb-8">
            Resources
          </h4>

          <a href="#" className="block mb-4" onClick={def}>
            Recipe directory
          </a>

          <a href="#" className="block mb-4" onClick={def}>
            Help center
          </a>

          <a href="#" className="block mb-4" onClick={def}>
            Privacy & terms
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Footer;
