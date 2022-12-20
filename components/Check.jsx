import React from "react";
import { HiOutlineCheck } from "react-icons/hi";

function Check({ meal }) {
  return (
    <div className="flex items-center mb-6">
      <HiOutlineCheck className="h-7 w-7 text-omnifood-primary mr-4" />

      <span className="text-lg  text-tg-g_555">{meal}</span>
    </div>
  );
}

export default Check;
