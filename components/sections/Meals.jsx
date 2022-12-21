import React from "react";

import { motion } from "framer-motion";
import { animScrollProps } from "utils/anim";
import Check from "components/pieces/Check";
import { mealCards, mealTypes } from "utils/data";
import MealCard from "components/pieces/MealCard";

function Meals() {
  return (
    <div
      id="meals"
      className=" px-8 sz550:px-16 lg:px-20 xl:px-28 py-16 bg-white"
    >
      <motion.h2
        initial={animScrollProps.animInitial}
        transition={animScrollProps.animTransition}
        whileInView={animScrollProps.animWhileInView}
        viewport={animScrollProps.animViewport}
        className=" flex flex-col text-center "
      >
        <span className=" text-omnifood-shade_1 font-medium text-xs sm:text-sm xl:text-md block mb-3">
          MEALS
        </span>
        <span className=" text-tg-g_333 font-semibold text-2xl sm:text-3xl xl:text-4xl block mb-24 xl:mb-28">
          Omnifood AI chooses from 5,000+ recipes
        </span>
      </motion.h2>

      <motion.div
        initial={animScrollProps.animInitial}
        transition={animScrollProps.animTransition}
        whileInView={animScrollProps.animWhileInView}
        viewport={animScrollProps.animViewport}
        className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20"
      >
        {mealCards.map((meal) => (
          <MealCard meal={meal} />
        ))}

        <div className="w-full sm:w-2/3 md:w-full justify-self-center">
          <span className=" text-2xl xl:text-3xl  font-semibold text-tg-g_333 block mb-6">
            Works with any diet:
          </span>

          {mealTypes.map((mealType) => (
            <Check meal={mealType} />
          ))}
        </div>
      </motion.div>

      <div className="flex justify-center mt-14">
        <button className="inline-block text-omnifood-primary pb-1 border-b-2 border-omnifood-primary text-base md:text-lg hover:border-transparent hover:text-omnifood-shade_1 transition-all">
          See all recipes &rarr;
        </button>
      </div>
    </div>
  );
}

export default Meals;
