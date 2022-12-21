import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Hero() {
  const renderImages = () => {
    const arr = new Array(6).fill(1);

    return arr.map((_, i) => (
      <div className="relative h-12 w-12 rounded-full -mr-4 border-2 border-white overflow-hidden">
        <Image src={`/customers/customer-${i + 1}.jpg`} layout="fill" />
      </div>
    ));
  };

  return (
    <div className="grid grid-cols-1 pt-[10rem]  text-center lg:grid-cols-2 lg:text-left px-4 sz500:px-8 sm:px-16 gap-20 xl:gap-24  py-20 bg-omnifood-tint_1">
      <div>
        <motion.h1
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className=" font-bold tracking-normal xl:tracking-wide leading-tight block mb-12 font-rubik text-3xl sz550:text-4xl lg:text-5xl  text-tg-g_333"
        >
          A healthy meal delivered to your door, every single day
        </motion.h1>
        <motion.p
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className=" text-tg-g_555 text-base sz550:text-lg xl:text-xl leading-relaxed block mb-8"
        >
          The smart 365-days-per-year food subscription that will make you eat
          healthy again. Tailored to your personal tastes and nutritional needs.
        </motion.p>

        <motion.div
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="flex mb-20 justify-center lg:justify-left"
        >
          <a
            href="#"
            className=" py-1 px-2  sz550:py-2 sz550:px-6 xl:py-3 xl:px-8 text-base leading-loose sz550:text-lg xl:text-xl font-semibold border-2 border-omnifood-primary text-white bg-omnifood-primary  rounded-lg inline-block mr-8 hover:bg-omnifood-shade_1 hover:border-omnifood-shade_1 transition-all"
          >
            Start eating well
          </a>

          <a
            href="#"
            className=" py-1 px-2 sz550:py-2 sz550:px-6 xl:py-3 xl:px-8 text-base leading-loose sz550:text-lg xl:text-xl font-semibold border-2 border-white  text-tg-g_555 bg-white  rounded-lg inline-block hover:bg-omnifood-tint_1 transition-all"
          >
            Learn more &darr;
          </a>
        </motion.div>

        <div className="flex flex-row  gap-12  items-center justify-center flex-wrap lg:items-start lg:flex-col lg:gap-4 sz1275:flex-row  ">
          <div className="flex flex-wrap  ">{renderImages()}</div>

          <div className=" text-tg-g_555 text-lg font-semibold">
            <span className="text-omnifood-shade_1">250,000+</span> meals
            delivered last year!
          </div>
        </div>
      </div>

      <div className=" w-2/3 sm:w-1/2 justify-self-center lg:w-full">
        <img src="./hero.png" />
      </div>
    </div>
  );
}

export default Hero;
