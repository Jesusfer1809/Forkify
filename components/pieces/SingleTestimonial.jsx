import Image from "next/image";
import React from "react";

function SingleTestimonial({ testimonial }) {
  return (
    <div>
      <div className="w-16 h-16 rounded-full overflow-hidden relative mb-4">
        <Image src={testimonial.customerImage} layout="fill" />
      </div>

      <p className=" text-tg-g_555 text-sm sz550:text-base lg:text-lg inline-block mb-4 leading-relaxed">
        {testimonial.mainText}
      </p>

      <span className=" text-tg-g_6f6f6f">
        &mdash; {testimonial.customerName}
      </span>
    </div>
  );
}

export default SingleTestimonial;
