import React from "react";

function Features() {
  return (
    <div className=" px-28 py-16 bg-white">
      <h2 className="block text-sm font-medium text-center text-tg-g_6f6f6f mb-6">
        AS FEATURED IN
      </h2>
      <div className=" flex justify-around flex-wrap ">
        <img
          src="./logos/techcrunch.png"
          className=" h-8 invert-[.45] sepia-[.14] saturate-[.12] hue-rotate-[314deg] brightness-[.92] contrast-[.83]"
        />
        <img
          src="./logos/business-insider.png"
          className=" h-8 invert-[.45] sepia-[.14] saturate-[.12] hue-rotate-[314deg] brightness-[.92] contrast-[.83]"
        />
        <img
          src="./logos/the-new-york-times.png"
          className=" h-8 invert-[.45] sepia-[.14] saturate-[.12] hue-rotate-[314deg] brightness-[.92] contrast-[.83]"
        />
        <img
          src="./logos/forbes.png"
          className=" h-8 invert-[.45] sepia-[.14] saturate-[.12] hue-rotate-[314deg] brightness-[.92] contrast-[.83]"
        />
        <img
          src="./logos/usa-today.png"
          className=" h-8 invert-[.45] sepia-[.14] saturate-[.12] hue-rotate-[314deg] brightness-[.92] contrast-[.83]"
        />
      </div>
    </div>
  );
}

//invert(45%) sepia(14%) saturate(12%) hue-rotate(314deg) brightness(92%) contrast(83%)

export default Features;
