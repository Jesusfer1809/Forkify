import React from "react";
import HamburguerButton from "./HamburguerButton";
import { AnimatePresence, motion } from "framer-motion";

function DropMenu({ isOpened, setIsOpened }) {
  const animateFrom = { opacity: 1, height: 0 };
  const animateTo = { opacity: 1, height: "100%" };

  return (
    <AnimatePresence>
      {isOpened && (
        <motion.div
          initial={animateFrom}
          animate={animateTo}
          exit={animateFrom}
          key="DropMenu"
          transition={{ ease: "easeOut", duration: 0.3 }}
          className={` bg-omnifood-tint_3 fixed top-0 left-0 right-0 h-screen  lg:hidden z-50`}
        >
          <motion.div
            key="headDiv"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="flex space-x-4 justify-end py-7  px-6  lg:px-8 xl:px-12 items-center h-20 "
            onClick={() => setIsOpened(false)}
          >
            <span className="font-semibold text-sm sm:text-base">CLOSE</span>
            <HamburguerButton isOpened={isOpened} />
          </motion.div>

          <ul className=" list-none flex flex-col items-center text-4xl md:text-5xl  space-y-12 text-gray-700 font-semibold ">
            <motion.li
              key="li1"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className=" inline-block "
            >
              <motion.a
                href="#"
                className="   tracking-wide border-b-2 border-transparent hover:border-gray-700 transition-all cursor-pointer "
              >
                How it works
              </motion.a>
            </motion.li>

            <motion.li
              key="li2"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className=" inline-block  "
            >
              <motion.a
                href="#"
                className="   tracking-wide border-b-2 border-transparent hover:border-gray-700 transition-all cursor-pointer"
              >
                Meals
              </motion.a>
            </motion.li>

            <motion.li
              key="li3"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className=" inline-block "
            >
              <motion.a
                href="#"
                className="   tracking-wide border-b-2 border-transparent hover:border-gray-700 transition-all cursor-pointer"
              >
                Testimonials
              </motion.a>
            </motion.li>

            <motion.li
              key="li4"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className=" inline-block "
            >
              <motion.a
                href="#"
                className="   tracking-wide border-b-2 border-transparent hover:border-gray-700 transition-all cursor-pointer"
              >
                Pricing
              </motion.a>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DropMenu;
