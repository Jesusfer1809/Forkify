import React from "react";
import {
  IoFlameOutline,
  IoRestaurantOutline,
  IoStarOutline,
} from "react-icons/io5";

function MealCard({ meal }) {
  return (
    <div className=" shadow-omnifood w-full sm:w-2/3 md:w-full justify-self-center  rounded-lg overflow-hidden">
      <img src={meal.image} />

      <div className="  p-6 xl:p-10 pb-0 text-tg-g_333">
        <div className="flex space-x-2 mb-4">
          {meal.mealTypes.map((mealType) => (
            <span
              className={`text-xs uppercase font-semibold bg-[${mealType.color}] px-3 py-1 rounded-full inline-block mb-3 xl:mb-2`}
            >
              {mealType.name}
            </span>
          ))}
        </div>

        <h4 className=" font-semibold text-xl xl:text-2xl block mb-8 tracking-wide ">
          {meal.name}
        </h4>

        <div className="text-omnifood-primary flex mb-8">
          <div className="mr-6 flex items-center justify-center">
            <IoFlameOutline className="text-omnifood-primary w-7 h-7" />
          </div>

          <span className=" text-tg-g_555 text-lg">
            <span className="font-semibold">{meal.calories}</span> calories
          </span>
        </div>

        <div className="text-omnifood-primary flex mb-8">
          <div className="mr-6 flex items-center justify-center">
            <IoRestaurantOutline className="text-omnifood-primary w-7 h-7" />
          </div>
          <span className=" text-tg-g_555 text-lg">
            Nutriscore &reg;
            <span className="font-semibold">{meal.nutriscore}</span>
          </span>
        </div>

        <div className="text-omnifood-primary flex mb-8">
          <div className="mr-6 flex items-center justify-center">
            <IoStarOutline className="text-omnifood-primary w-7 h-7" />
          </div>
          <span className=" text-tg-g_555 text-lg">
            <span className="font-semibold">{meal.ratingsAverage}</span> rating
            ({meal.ratings})
          </span>
        </div>
      </div>
    </div>
  );
}

export default MealCard;
