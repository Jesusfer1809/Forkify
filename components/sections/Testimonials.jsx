import React from "react";

import { motion } from "framer-motion";
import { animScrollProps } from "utils/anim";
import Image from "next/image";
import { testimonials } from "utils/data";
import SingleTestimonial from "components/pieces/SingleTestimonial";

function Testimonials() {
  const renderImages = () => {
    const arr = new Array(12).fill(1);

    return arr.map((_, i) => (
      <div className="relative ">
        <Image
          src={`/gallery/gallery-${i + 1}.jpg`}
          width={500}
          height={500}
          layout="responsive"
        />
      </div>
    ));
  };

  return (
    <div
      id="testimonials"
      className=" pl-4 sz500:pl-8 sm:pl-12 lg:pl-20 xl:pl-24 pr-4 sz500:pr-8 py-24 sz950:py-16 xl:py-28 bg-omnifood-tint_1"
    >
      <motion.div
        initial={animScrollProps.animInitial}
        transition={animScrollProps.animTransition}
        whileInView={animScrollProps.animWhileInView}
        viewport={animScrollProps.animViewport}
        className="grid grid-cols-1 sz950:grid-cols-2 gap-x-20"
      >
        <div className="self-center xl:self-start">
          <h2 className=" flex flex-col mb-20 ">
            <span className=" text-omnifood-shade_1 font-medium text-xs sz550:text-sm lg:text-md block mb-3">
              TESTIMONIALS
            </span>
            <span className=" text-tg-g_333 font-bold text-2xl sz550:text-4xl lg:text-[2.7rem] leading-tight block ">
              Once you try it, you can't go back
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12 mb-28 s-950:mb-0">
            {testimonials.map((testimonial) => (
              <SingleTestimonial testimonial={testimonial} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 sz550:grid-cols-4 sz850:grid-cols-5 sz950:grid-cols-2 xl:grid-cols-3 gap-4">
          {renderImages()}
        </div>
      </motion.div>
    </div>
  );
}

export default Testimonials;
