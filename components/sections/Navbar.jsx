import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import DeskLinks from "components/pieces/DeskLinks";
import DropMenu from "components/pieces/DropMenu";
import MobileLinks from "components/pieces/MobileLinks";

function Navbar() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    //uwu
    <div className=" flex fixed top-0 left-0 right-0 justify-between  py-4 md:py-6  px-6  lg:px-8 xl:px-12 items-center bg-omnifood-tint_1 z-50">
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
