import React from "react";

function Contact() {
  return (
    <div className=" px-8 sz850:px-16 lg:px-20 xl:px-28 pt-16 pb-24 border-b-2 border-tg-g_555 border-opacity-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-3  bg-omnifood-tint_3 rounded-2xl overflow-hidden shadow-omnifood">
        <div className=" col-span-1 lg:col-span-2 px-8 py-12 sm:px-14 sm:py-14">
          <h2 className=" text-omnifood-shade_2 font-bold text-3xl md:text-4xl block mb-6  ">
            Get your first meal for free!
          </h2>

          <p className=" text-omnifood-shade_2 text-opacity-95 text-base md:text-lg leading-loose block mb-12">
            Healthy, tasty and hassle-free meals are waiting for you. Start
            eating well today. You can cancel or pause anytime. And the first
            meal is on us!
          </p>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label
                htmlFor="name"
                className=" text-sm md:text-base block mb-2 text-omnifood-shade_2 font-semibold"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Smith"
                className="w-4/5 sm:w-full text-omnifood-shade_2 px-3 py-2 rounded-lg text-base md:text-lg tracking-wide  focus:outline-8 focus:outline-omnifood-tint_2 focus:border-none "
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className=" text-sm md:text-base block mb-2 text-omnifood-shade_2 font-semibold"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="John Smith"
                className=" w-4/5 sm:w-full text-omnifood-shade_2  px-3 py-2 rounded-lg text-base md:text-lg tracking-wide  focus:outline-8 focus:outline-omnifood-tint_2 focus:border-none "
              />
            </div>

            <div>
              <label
                htmlFor="hear"
                className=" text-sm md:text-base block mb-2 text-omnifood-shade_2 font-semibold"
              >
                Where did you hear from us?
              </label>
              <select
                id="hear"
                className="w-4/5 sm:w-full text-omnifood-shade_2  px-3 py-2 rounded-lg text-base md:text-lg tracking-wide  focus:outline-8 focus:outline-omnifood-tint_2 focus:border-none "
              >
                <option value="please">Please choose one option</option>
                <option value="friends">Friends and family</option>
                <option value="youtube">Youtube video</option>
                <option value="podcast">Podcast</option>
                <option value="facebook">Facebook add</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className=" text-sm md:text-base block mb-2 text-omnifood-shade_2 font-semibold">
                &nbsp;
              </label>
              <button
                type="input"
                className="w-4/5 sm:w-full text-white font-semibold bg-omnifood-shade_2 px-3 py-2 rounded-lg text-base md:text-lg tracking-wide hover:bg-white hover:text-tg-g_333 transition-all"
                onClick={(e) => e.preventDefault()}
              >
                Sign up now
              </button>
            </div>
          </form>
        </div>

        <div
          className="w-full h-[40rem] md:h-[45rem] lg:h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(230, 126, 34,0.3),rgba(230, 126, 34,0.3)) ,url(./eating.jpg) ",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Contact;
