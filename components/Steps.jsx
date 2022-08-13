import React from "react";
import { animScrollProps } from "../utils/anim";
import { motion } from "framer-motion";

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
        <motion.div
          initial={animScrollProps.animInitial}
          transition={animScrollProps.animTransition}
          whileInView={animScrollProps.animWhileInView}
          viewport={animScrollProps.animViewport}
          className=" self-center"
        >
          <span className=" text-[#DDDDDD] text-6xl md:text-7xl xl:text-8xl font-bold block mb-4">
            01
          </span>
          <h3 className="text-tg-g_333 font-semibold text-xl md:text-2xl xl:text-3xl block mb-8">
            Tell us what you like (and what not)
          </h3>
          <p className="block text-md xl:text-lg text-tg-g_555 leading-relaxed">
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
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
            src="./app/app-screen-1.png"
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
          className="relative flex justify-center  "
        >
          <img
            src="./app/app-screen-2.png"
            className="w-1/3 md:w-1/2 sz900:w-1/3 z-30"
          />

          <div className="absolute h-72 w-72 sz600:h-80 sz600:w-80 sz700:h-96 sz700:w-96 md:h-64 sz850:h-80 md:w-64 sz850:w-80 rounded-full top-1/2 left-1/2 -translate-x-1/2  z-10 -translate-y-1/2 bg-omnifood-tint_1"></div>
          <div className="absolute h-48 w-48 sz600:h-60 sz600:w-60 sz700:h-72 sz700:w-72  md:h-48 sz850:h-60 md:w-48 sz850:w-60 rounded-full top-1/2 left-1/2 -translate-x-1/2  z-10 -translate-y-1/2 bg-omnifood-tint_2"></div>
        </motion.div>

        <motion.div
          initial={animScrollProps.animInitial}
          transition={animScrollProps.animTransition}
          whileInView={animScrollProps.animWhileInView}
          viewport={animScrollProps.animViewport}
          className=" self-center row-start-3 md:row-start-2 col-start-1 md:col-start-2"
        >
          <span className=" text-[#DDDDDD] text-6xl md:text-7xl xl:text-8xl font-bold block mb-4">
            02
          </span>
          <h3 className="text-tg-g_333 font-semibold text-xl md:text-2xl xl:text-3xl block mb-8">
            Approve your weekly meal plan
          </h3>
          <p className="block text-md xl:text-lg text-tg-g_555 leading-relaxed">
            Once per week, approve the meal plan generated for you by Omnifood
            AI. You can change ingredients, swap entire meals, or even add your
            own recipes.
          </p>
        </motion.div>

        <motion.div
          initial={animScrollProps.animInitial}
          transition={animScrollProps.animTransition}
          whileInView={animScrollProps.animWhileInView}
          viewport={animScrollProps.animViewport}
          className=" self-center"
        >
          <span className=" text-[#DDDDDD] text-6xl md:text-7xl xl:text-8xl font-bold block mb-4">
            03
          </span>
          <h3 className="text-tg-g_333 font-semibold text-xl md:text-2xl xl:text-3xl block mb-8">
            Receive meals at convenient time
          </h3>
          <p className="block text-md xl:text-lg text-tg-g_555 leading-relaxed">
            Best chefs in town will cook your selected meal every day, and we
            will deliver it to your door whenever works best for you. You can
            change delivery schedule and address daily!
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
            src="./app/app-screen-3.png"
            className=" w-1/3 md:w-1/2 sz900:w-1/3 z-30"
          />

          <div className="absolute h-72 w-72 sz600:h-80 sz600:w-80 sz700:h-96 sz700:w-96 md:h-64 sz850:h-80 md:w-64 sz850:w-80 rounded-full top-1/2 left-1/2 -translate-x-1/2  z-10 -translate-y-1/2 bg-omnifood-tint_1"></div>
          <div className="absolute h-48 w-48 sz600:h-60 sz600:w-60 sz700:h-72 sz700:w-72  md:h-48 sz850:h-60 md:w-48 sz850:w-60 rounded-full top-1/2 left-1/2 -translate-x-1/2  z-10 -translate-y-1/2 bg-omnifood-tint_2"></div>
        </motion.div>
      </div>
    </div>
  );
}

export default Steps;
