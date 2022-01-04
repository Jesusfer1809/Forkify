import React from "react";

function Steps() {
  return (
    <div className=" px-14 lg:px-20 xl:px-28 py-28 xl:py-32 bg-white">
      <h2 className=" flex flex-col ">
        <span className=" text-omnifood-shade_1 font-medium text-sm xl:text-md block mb-3">
          HOW IT WORKS
        </span>
        <span className=" text-tg-g_333 font-semibold text-3xl xl:text-4xl block">
          Your daily dose of health in 3 simple steps
        </span>
      </h2>

      <div className="grid grid-cols-1 sz550:grid-cols-2  gap-x-20 gap-y-28 mt-24">
        <div className=" self-center">
          <span className=" text-[#DDDDDD] text-7xl xl:text-8xl font-bold block mb-4">
            01
          </span>
          <h3 className="text-tg-g_333 font-semibold text-2xl xl:text-3xl block mb-8">
            Tell us what you like (and what not)
          </h3>
          <p className="block text-md xl:text-lg text-tg-g_555 leading-relaxed">
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
          </p>
        </div>

        <div className="relative flex justify-center">
          <img
            src="./app/app-screen-1.png"
            className=" w-1/3 sz550:w-1/2 sz900:w-1/3 z-30"
          />

          <div className="absolute  h-64 xl:h-80 w-64 xl:w-80 rounded-full top-1/2 left-1/2 -translate-x-1/2  z-10 -translate-y-1/2 bg-omnifood-tint_1"></div>
          <div className="absolute  h-48 xl:h-60 w-48 xl:w-60 rounded-full top-1/2 left-1/2 -translate-x-1/2  z-10 -translate-y-1/2 bg-omnifood-tint_2"></div>
        </div>

        <div className="relative flex justify-center ">
          <img
            src="./app/app-screen-2.png"
            className="w-1/2 sz900:w-1/3 z-30"
          />

          <div className="absolute h-64 xl:h-80 w-64 xl:w-80 rounded-full top-1/2 left-1/2 -translate-x-1/2  z-10 -translate-y-1/2 bg-omnifood-tint_1"></div>
          <div className="absolute h-48 xl:h-60 w-48 xl:w-60 rounded-full top-1/2 left-1/2 -translate-x-1/2  z-10 -translate-y-1/2 bg-omnifood-tint_2"></div>
        </div>

        <div className=" self-center">
          <span className=" text-[#DDDDDD] text-7xl xl:text-8xl font-bold block mb-4">
            02
          </span>
          <h3 className="text-tg-g_333 font-semibold text-2xl xl:text-3xl block mb-8">
            Approve your weekly meal plan
          </h3>
          <p className="block text-md xl:text-lg text-tg-g_555 leading-relaxed">
            Once per week, approve the meal plan generated for you by Omnifood
            AI. You can change ingredients, swap entire meals, or even add your
            own recipes.
          </p>
        </div>

        <div className=" self-center">
          <span className=" text-[#DDDDDD] text-7xl xl:text-8xl font-bold block mb-4">
            03
          </span>
          <h3 className="text-tg-g_333 font-semibold text-2xl xl:text-3xl block mb-8">
            Receive meals at convenient time
          </h3>
          <p className="block text-md xl:text-lg text-tg-g_555 leading-relaxed">
            Best chefs in town will cook your selected meal every day, and we
            will deliver it to your door whenever works best for you. You can
            change delivery schedule and address daily!
          </p>
        </div>

        <div className="relative flex justify-center">
          <img
            src="./app/app-screen-3.png"
            className=" w-1/2 sz900:w-1/3 z-30"
          />

          <div className="absolute h-64 xl:h-80 w-64 xl:w-80 rounded-full top-1/2 left-1/2 -translate-x-1/2  z-10 -translate-y-1/2 bg-omnifood-tint_1"></div>
          <div className="absolute h-48 xl:h-60 w-48 xl:w-60 rounded-full top-1/2 left-1/2 -translate-x-1/2  z-10 -translate-y-1/2 bg-omnifood-tint_2"></div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
