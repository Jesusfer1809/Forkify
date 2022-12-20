import React from "react";

import {
  IoNutritionOutline,
  IoLeafOutline,
  IoPauseOutline,
  IoInfiniteOutline,
} from "react-icons/io5";

import { animScrollProps } from "../utils/anim";
import { motion } from "framer-motion";

function Descriptions() {
  return (
    <motion.div
      initial={animScrollProps.animInitial}
      transition={animScrollProps.animTransition}
      whileInView={animScrollProps.animWhileInView}
      viewport={animScrollProps.animViewport}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-14"
    >
      <div>
        <div className=" bg-omnifood-tint_1 w-16 h-16 flex justify-center items-center rounded-full mb-8">
          <IoInfiniteOutline className="text-omnifood-primary h-8 w-8" />
        </div>

        <h4 className="font-bold text-xl sm:text-2xl block mb-2 text-tg-g_333">
          Never cook again!
        </h4>

        <p className=" text-base sm:text-lg text-tg-g_555 leading-relaxed sm:leading-loose">
          Our subscriptions cover 365 days per year, even including major
          holidays.
        </p>
      </div>

      <div>
        <div className=" bg-omnifood-tint_1 w-16 h-16 flex justify-center items-center rounded-full mb-8">
          <IoNutritionOutline className="text-omnifood-primary h-8 w-8" />
        </div>

        <h4 className="font-bold text-xl sm:text-2xl block mb-2 text-tg-g_333">
          Local and organic
        </h4>

        <p className=" text-base sm:text-lg text-tg-g_555 leading-relaxed sm:leading-loose">
          Our cooks only use local, fresh, and organic products to prepare your
          meals.
        </p>
      </div>

      <div>
        <div className=" bg-omnifood-tint_1 w-16 h-16 flex justify-center items-center rounded-full mb-8">
          <IoLeafOutline className="text-omnifood-primary h-8 w-8" />
        </div>

        <h4 className="font-bold text-xl sm:text-2xl block mb-2 text-tg-g_333">
          No waste
        </h4>

        <p className=" text-base sm:text-lg text-tg-g_555 leading-relaxed sm:leading-loose">
          All our partners only use reusable containers to package all your
          meals.
        </p>
      </div>

      <div>
        <div className=" bg-omnifood-tint_1 w-16 h-16 flex justify-center items-center rounded-full mb-8">
          <IoPauseOutline className="text-omnifood-primary h-8 w-8" />
        </div>

        <h4 className="font-bold text-xl sm:text-2xl block mb-2 text-tg-g_333">
          Pause anytime
        </h4>

        <p className=" text-base sm:text-lg text-tg-g_555 leading-relaxed sm:leading-loose">
          Going on vacation? Just pause your subscription, and we refund unused
          days.
        </p>
      </div>
    </motion.div>
  );
}

export default Descriptions;
