import React from "react";
import Check from "./Check";
import Descriptions from "./Descriptions";

import { animScrollProps } from "../utils/anim";
import { motion } from "framer-motion";

function Pricing() {
  return (
    <div
      id="pricing"
      className=" px-4 sm:px-8  lg:px-20 xl:px-28 py-28 bg-white flex flex-col"
    >
      <motion.h2
        initial={animScrollProps.animInitial}
        transition={animScrollProps.animTransition}
        whileInView={animScrollProps.animWhileInView}
        viewport={animScrollProps.animViewport}
        className=" flex flex-col mb-20 "
      >
        <span className=" text-omnifood-shade_1 font-medium text-xs sm:text-sm xl:text-md block mb-3">
          PRICING
        </span>
        <span className=" text-tg-g_333 font-bold text-2xl sm:text-3xl xl:text-[2.7rem] leading-tight block ">
          Eating well without breaking the bank
        </span>
      </motion.h2>

      <motion.div
        initial={animScrollProps.animInitial}
        transition={animScrollProps.animTransition}
        whileInView={animScrollProps.animWhileInView}
        viewport={animScrollProps.animViewport}
        className="grid grid-cols-1 sz850:grid-cols-2  gap-x-20 gap-y-20 w-full sz550:w-4/5 sm:w-3/5 sz850:w-full lg:w-4/5 self-center"
      >
        <div className=" border-2 border-omnifood-tint_2 rounded-md p-12">
          <div className="flex flex-col justify-center mb-10">
            <span className="text-omnifood-shade_1 font-medium text-lg block mb-6 text-center">
              STARTER
            </span>

            <span className="text-tg-g_333 font-medium text-3xl text-center mb-4">
              $ <span className="text-6xl ml-2">399</span>
            </span>

            <span className="text-center text-tg-g_6f6f6f">
              per month. That's just $13 per meal!
            </span>
          </div>

          <div className="mb-20">
            <Check meal="1 meal per day" />
            <Check meal="Order from 11am to 9pm" />
            <Check meal="Delivery is free" />

            <div className="flex items-center mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-omnifood-primary mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="text-white font-semibold bg-omnifood-primary px-5 py-3 rounded-lg text-lg tracking-wide hover:bg-omnifood-shade_1 transition-all">
              Start eating well
            </button>
          </div>
        </div>

        <div className=" border-2 border-omnifood-tint_1 bg-omnifood-tint_1 rounded-md p-12">
          <div className="flex flex-col justify-center mb-10">
            <span className="text-omnifood-shade_1 font-medium text-lg block mb-6 text-center">
              COMPLETE
            </span>

            <span className="text-tg-g_333 font-medium text-3xl text-center mb-4">
              $ <span className="text-6xl ml-2">649</span>
            </span>

            <span className="text-center text-tg-g_6f6f6f">
              per month. That's just $11 per meal!
            </span>
          </div>

          <div className="mb-20">
            <Check
              meal={(() => {
                return (
                  <>
                    <span>
                      <span className="font-medium">2</span> meals per day
                    </span>
                  </>
                );
              })()}
            />
            <Check
              meal={(() => {
                return (
                  <>
                    <span>
                      Order <span className="font-medium">24/7</span>
                    </span>
                  </>
                );
              })()}
            />
            <Check meal="Delivery is free" />

            <Check meal="Get access to latest recipes" />
          </div>

          <div className="flex justify-center">
            <button className="text-white font-semibold bg-omnifood-primary px-5 py-3 rounded-lg text-lg tracking-wide hover:bg-omnifood-shade_1 transition-all">
              Start eating well
            </button>
          </div>
        </div>
      </motion.div>

      <div className="mt-16 text-center text-tg-g_555 mb-24 text-xs sz550:text-sm ">
        Prices include all applicable taxes. You can cancel at any time. Both
        plans include the following:
      </div>

      <Descriptions />
    </div>
  );
}

export default Pricing;
