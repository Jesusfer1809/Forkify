import React from "react";

import { motion } from "framer-motion";
import { animScrollProps } from "utils/anim";
import Step from "components/pieces/Step";
import { steps } from "utils/data";

function Steps() {
  return (
    <div
      id="work"
      className=" px-8 sz550:px-16 lg:px-20 xl:px-28 py-28 xl:py-32 bg-white"
    >
      <motion.h2
        initial={animScrollProps.animInitial}
        transition={animScrollProps.animTransition}
        whileInView={animScrollProps.animWhileInView}
        viewport={animScrollProps.animViewport}
        className=" flex flex-col "
      >
        <span className=" text-omnifood-shade_1 font-medium text-xs sm:text-sm xl:text-md block mb-3">
          HOW IT WORKS
        </span>
        <span className=" text-tg-g_333 font-semibold text-2xl sm:text-3xl xl:text-4xl block">
          Your daily dose of health in 3 simple steps
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-x-20 gap-y-20 md:gap-y-28 mt-24">
        {steps.map((step) => (
          <Step step={step} />
        ))}
      </div>
    </div>
  );
}

export default Steps;
