import React from "react";

function Testimonials() {
  return (
    <div className=" pl-24 pr-8 py-32 bg-omnifood-tint_1">
      <div className="grid grid-cols-2 gap-x-20">
        <div>
          <h2 className=" flex flex-col mb-20 ">
            <span className=" text-omnifood-shade_1 font-medium text-MD block mb-3">
              TESTIMONIALS
            </span>
            <span className=" text-tg-g_333 font-bold text-[2.7rem] leading-tight block ">
              Once you try it, you can't go back
            </span>
          </h2>

          <div className="grid grid-cols-2 gap-x-16 gap-y-12">
            <div>
              <img
                src="./customers/dave.jpg"
                className=" w-16 rounded-full mb-4"
              />
              <p className=" text-tg-g_555 text-lg inline-block mb-4 leading-relaxed">
                Inexpensive, healthy and great-tasting meals, without even
                having to order manually! It feels truly magical.
              </p>

              <span className=" text-tg-g_6f6f6f">&mdash; Dave Bryson</span>
            </div>

            <div>
              <img
                src="./customers/ben.jpg"
                className=" w-16 rounded-full mb-4"
              />
              <p className=" text-tg-g_555 text-lg inline-block mb-4 leading-relaxed">
                The AI algorithm is crazy good, it chooses the right meals for
                me every time. It's amazing not to worry about food anymore!
              </p>

              <span className=" text-tg-g_6f6f6f">&mdash; Ben Hadley</span>
            </div>

            <div>
              <img
                src="./customers/steve.jpg"
                className=" w-16 rounded-full mb-4"
              />
              <p className=" text-tg-g_555 text-lg inline-block mb-4 leading-relaxed">
                Omnifood is a life saver! I just started a company, so there's
                no time for cooking. I couldn't live without my daily meals now!
              </p>

              <span className=" text-tg-g_6f6f6f">&mdash; Steve Miller</span>
            </div>

            <div>
              <img
                src="./customers/hannah.jpg"
                className=" w-16 rounded-full mb-4"
              />
              <p className=" text-tg-g_555 text-lg inline-block mb-4 leading-relaxed">
                I got Omnifood for the whole family, and it frees up so much
                time! Plus, everything is organic and vegan and without plastic.
              </p>

              <span className=" text-tg-g_6f6f6f">&mdash; Hannah Smith</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <img src="./gallery/gallery-1.jpg" />
          <img src="./gallery/gallery-2.jpg" />
          <img src="./gallery/gallery-3.jpg" />
          <img src="./gallery/gallery-4.jpg" />
          <img src="./gallery/gallery-5.jpg" />
          <img src="./gallery/gallery-6.jpg" />
          <img src="./gallery/gallery-7.jpg" />
          <img src="./gallery/gallery-8.jpg" />
          <img src="./gallery/gallery-9.jpg" />
          <img src="./gallery/gallery-10.jpg" />
          <img src="./gallery/gallery-11.jpg" />
          <img src="./gallery/gallery-12.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
