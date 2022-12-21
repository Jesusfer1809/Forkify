import React from "react";
import { motion } from "framer-motion";
import { animScrollProps } from "utils/anim";
import Image from "next/image";

function Features() {
  const featureLogos = [
    "/logos/techcrunch.png",
    "/logos/business-insider.png",
    "/logos/the-new-york-times.png",
    "/logos/forbes.png",
    "/logos/usa-today.png",
  ];

  return (
    <motion.div
      initial={animScrollProps.animInitial}
      transition={animScrollProps.animTransition}
      whileInView={animScrollProps.animWhileInView}
      viewport={animScrollProps.animViewport}
      className=" px-8 sz550:px-16 md:px-20 lg:px-28 pt-16 pb-8 xl:pb-16 bg-white"
    >
      <h2 className="block text-sm font-medium text-center text-tg-g_6f6f6f mb-6">
        AS FEATURED IN
      </h2>
      <div className=" flex justify-around flex-wrap gap-6 md:gap-8 ">
        {featureLogos.map((url) => (
          <img
            src={url}
            className=" h-6 md:h-8 invert-[.45] sepia-[.14] saturate-[.12] hue-rotate-[314deg] brightness-[.92] contrast-[.83]"
          />
        ))}
      </div>
    </motion.div>
  );
}

//invert(45%) sepia(14%) saturate(12%) hue-rotate(314deg) brightness(92%) contrast(83%)

export default Features;
