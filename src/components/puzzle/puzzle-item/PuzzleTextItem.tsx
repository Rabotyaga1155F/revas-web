import React, { FC } from "react";
import { IPuzzleTextItemProps } from "@/components/puzzle/puzzle-item/puzzle.types";

const PuzzleTextItem: FC<IPuzzleTextItemProps> = ({ text }) => {
  return (
    <div
      className={
        "h-[232px] md:w-[232px] smob:w-full bg-[#3A3330] hover:bg-red-600 smob:flex smob:flex-col smob:justify-center md:block"
      }
    >
      <h1 className={"font-medium text-[22px] text-white text-center"}>
        {text}
      </h1>
    </div>
  );
};

export default PuzzleTextItem;
