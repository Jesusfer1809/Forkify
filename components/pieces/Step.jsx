import React from "react";
import { motion } from "framer-motion";
import { animScrollProps } from "utils/anim";

function Step({ step }) {
  return (
    <>
      {step.imageStatus === "right" ? (
        <>
          <motion.div
            initial={animScrollProps.animInitial}
            transition={animScrollProps.animTransition}
            whileInView={animScrollProps.animWhileInView}
            viewport={animScrollProps.animViewport}
            className={` self-center `}
          >
            <span className=" text-[#DDDDDD] text-6xl md:text-7xl xl:text-8xl font-bold block mb-4">
              {step.id}
            </span>
            <h3 className="text-tg-g_333 font-semibold text-xl md:text-2xl xl:text-3xl block mb-8">
              {step.title}
            </h3>
            <p className="block text-md xl:text-lg text-tg-g_555 leading-relaxed">
              {step.description}
            </p>
          </motion.div>

          <motion.div
            initial={animScrollProps.animInitial}
            transition={animScrollProps.animTransition}
            whileInView={animScrollProps.animWhileInView}
            viewport={animScrollProps.animViewport}
            className="relative flex justify-center"
          >
            <img
              src={step.image}
              className=" w-1/3 md:w-1/2 sz900:w-1/3 z-30"
            />

            <div className="absolute h-72 w-72 sz600:h-80 sz600:w-80 sz700:h-96 sz700:w-96 md:h-64 sz850:h-80 md:w-64 sz850:w-80 rounded-full top-1/2 left-1/2 -translate-x-1/2  z-10 -translate-y-1/2 bg-omnifood-tint_1"></div>
            <div className="absolute h-48 w-48 sz600:h-60 sz600:w-60 sz700:h-72 sz700:w-72  md:h-48 sz850:h-60 md:w-48 sz850:w-60 rounded-full top-1/2 left-1/2 -translate-x-1/2  z-10 -translate-y-1/2 bg-omnifood-tint_2"></div>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            initial={animScrollProps.animInitial}
            transition={animScrollProps.animTransition}
            whileInView={animScrollProps.animWhileInView}
            viewport={animScrollProps.animViewport}
            className="relative flex justify-center"
          >
            <img
              src={step.image}
              className=" w-1/3 md:w-1/2 sz900:w-1/3 z-30"
            />

            <div className="absolute h-72 w-72 sz600:h-80 sz600:w-80 sz700:h-96 sz700:w-96 md:h-64 sz850:h-80 md:w-64 sz850:w-80 rounded-full top-1/2 left-1/2 -translate-x-1/2  z-10 -translate-y-1/2 bg-omnifood-tint_1"></div>
            <div className="absolute h-48 w-48 sz600:h-60 sz600:w-60 sz700:h-72 sz700:w-72  md:h-48 sz850:h-60 md:w-48 sz850:w-60 rounded-full top-1/2 left-1/2 -translate-x-1/2  z-10 -translate-y-1/2 bg-omnifood-tint_2"></div>
          </motion.div>
          <motion.div
            initial={animScrollProps.animInitial}
            transition={animScrollProps.animTransition}
            whileInView={animScrollProps.animWhileInView}
            viewport={animScrollProps.animViewport}
            className={` self-center ${
              step.id === "02" &&
              "row-start-3 md:row-start-2 col-start-1 md:col-start-2"
            }`}
          >
            <span className=" text-[#DDDDDD] text-6xl md:text-7xl xl:text-8xl font-bold block mb-4">
              {step.id}
            </span>
            <h3 className="text-tg-g_333 font-semibold text-xl md:text-2xl xl:text-3xl block mb-8">
              {step.title}
            </h3>
            <p className="block text-md xl:text-lg text-tg-g_555 leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        </>
      )}
    </>
  );
}

export default Step;
