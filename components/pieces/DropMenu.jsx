import React from "react";
import HamburguerButton from "./HamburguerButton";
import { AnimatePresence, motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

function DropMenu({ isOpened, setIsOpened }) {
  const animateFrom = { opacity: 1, height: 0 };
  const animateTo = { opacity: 1, height: "100%" };

  const closeMenu = () => {
    setIsOpened(false);
  };

  return (
    <AnimatePresence>
      {isOpened && (
        <motion.div
          initial={animateFrom}
          animate={animateTo}
          exit={{
            opacity: 1,
            height: 0,
            transition: { delay: 0.15, ease: "easeOut", duration: 0.5 },
          }}
          key="DropMenu"
          transition={{ ease: "easeOut", duration: 0.5 }}
          className={` bg-omnifood-tint_3 fixed top-0 left-0 right-0 h-screen  lg:hidden z-50`}
          onClick={closeMenu}
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
              transition={{ delay: 0.3, duration: 0.3 }}
              exit={{
                opacity: 0,
                x: -100,
                transition: { duration: 0.15, delay: 0.15, ease: "easeOut" },
              }}
              className=" inline-block "
            >
              <ScrollLink
                to="work"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={closeMenu}
              >
                How it works
              </ScrollLink>
            </motion.li>

            <motion.li
              key="li2"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              exit={{
                opacity: 0,
                x: -100,
                transition: { duration: 0.15, delay: 0.1, ease: "easeOut" },
              }}
              className=" inline-block  "
            >
              <ScrollLink
                to="meals"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={closeMenu}
              >
                Meals
              </ScrollLink>
            </motion.li>

            <motion.li
              key="li3"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              exit={{
                opacity: 0,
                x: -100,
                transition: { duration: 0.15, delay: 0.05, ease: "easeOut" },
              }}
              className=" inline-block "
            >
              <ScrollLink
                to="testimonials"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={closeMenu}
              >
                Testimonials
              </ScrollLink>
            </motion.li>

            <motion.li
              key="li4"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              exit={{
                opacity: 0,
                x: -100,
                transition: { duration: 0.15, delay: 0, ease: "easeOut" },
              }}
              className=" inline-block "
            >
              <ScrollLink
                to="pricing"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={closeMenu}
              >
                Pricing
              </ScrollLink>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DropMenu;
