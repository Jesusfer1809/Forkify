import React from "react";

import {
  InfiniteOutline,
  NutritionOutline,
  LeafOutline,
  PauseOutline,
} from "react-ionicons";

function Descriptions() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-14">
      <div>
        <div className=" bg-omnifood-tint_1 w-16 h-16 flex justify-center items-center rounded-full mb-8">
          <InfiniteOutline color={"#e67e22"} height="2rem" width="2rem" />
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
          <NutritionOutline color={"#e67e22"} height="2rem" width="2rem" />
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
          <LeafOutline color={"#e67e22"} height="2rem" width="2rem" />
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
          <PauseOutline color={"#e67e22"} height="2rem" width="2rem" />
        </div>

        <h4 className="font-bold text-xl sm:text-2xl block mb-2 text-tg-g_333">
          Pause anytime
        </h4>

        <p className=" text-base sm:text-lg text-tg-g_555 leading-relaxed sm:leading-loose">
          Going on vacation? Just pause your subscription, and we refund unused
          days.
        </p>
      </div>
    </div>
  );
}

export default Descriptions;
