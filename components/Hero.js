import React from "react";

function Hero() {
  return (
    <div className=" grid grid-cols-2  px-16 gap-24  py-20 bg-omnifood-tint_1">
      <div>
        <h1 className=" font-bold tracking-wide leading-tight block mb-12 font-rubik text-5xl text-tg-g_333">
          A healthy meal delivered to your door, every single day
        </h1>
        <p className=" text-tg-g_555 text-xl leading-relaxed block mb-8">
          The smart 365-days-per-year food subscription that will make you eat
          healthy again. Tailored to your personal tastes and nutritional needs.
        </p>

        <div className="flex mb-20">
          <a
            href="#"
            className="py-3 px-8 border-2 border-omnifood-primary text-white bg-omnifood-primary text-xl font-semibold rounded-lg inline-block mr-8 hover:bg-omnifood-shade_1 hover:border-omnifood-shade_1 transition-all"
          >
            Start eating well
          </a>

          <a
            href="#"
            className="py-3 px-8 border-2 border-white  text-tg-g_555 bg-white text-xl font-semibold rounded-lg inline-block hover:bg-omnifood-tint_1 transition-all"
          >
            Learn more &darr;
          </a>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex ">
            <img
              src="./customers/customer-1.jpg"
              className=" h-12 rounded-full -mr-4 border-2 border-white"
            />
            <img
              src="./customers/customer-2.jpg"
              className=" h-12 rounded-full -mr-4 border-2 border-white"
            />
            <img
              src="./customers/customer-3.jpg"
              className=" h-12 rounded-full -mr-4 border-2 border-white"
            />
            <img
              src="./customers/customer-4.jpg"
              className=" h-12 rounded-full -mr-4 border-2 border-white"
            />
            <img
              src="./customers/customer-5.jpg"
              className=" h-12 rounded-full -mr-4 border-2 border-white"
            />
            <img
              src="./customers/customer-6.jpg"
              className=" h-12 rounded-full -mr-4 border-2 border-white"
            />
          </div>

          <div className=" text-tg-g_555 text-lg font-semibold">
            <span className="text-omnifood-shade_1">250,000+</span> meals
            delivered last year!
          </div>
        </div>
      </div>

      <div>
        <img src="./hero.png" />
      </div>
    </div>
  );
}

export default Hero;
