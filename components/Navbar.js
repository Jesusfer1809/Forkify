import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import DeskLinks from "./DeskLinks";
import DropMenu from "./dropMenu";

import MobileLinks from "./MobileLinks";

function Navbar() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className=" flex  justify-between py-7  px-6  lg:px-8 xl:px-12 items-center bg-omnifood-tint_1">
      <img src="./omnifood-logo.png" className="  h-4 md:h-5  lg:h-6" />

      <DeskLinks />
      <MobileLinks isOpened={isOpened} openMenu={() => setIsOpened(true)} />

      <AnimatePresence>
        <DropMenu isOpened={isOpened} setIsOpened={setIsOpened} />
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
