import React, { FC } from "react";
import { IPuzzleTextItemProps } from "@/components/puzzle/puzzle-item/puzzle.types";

const PuzzleTextItem: FC<IPuzzleTextItemProps> = ({ text }) => {
  return (
    <div className={"w-[232px] h-[232px] bg-[#3A3330] hover:bg-red-600"}>
      <h1 className={"font-medium text-[22px] text-white text-center"}>
        {text}
      </h1>
    </div>
  );
};

export default PuzzleTextItem;
