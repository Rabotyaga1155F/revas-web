import React, { FC } from "react";
import { IPuzzleTextItemProps } from "@/components/puzzle/puzzle-item/puzzle.types";
import { robotoExtraBold, robotoLight } from "@/assets/fonts";

const PuzzleTextItem: FC<IPuzzleTextItemProps> = ({ text }) => {
  return (
    <div
      className={
        "h-[300px] md:w-[300px] smob:w-full bg-orange hover:bg-orange-white smob:flex smob:flex-col smob:justify-center md:block"
      }
    >
      <h1
        style={robotoExtraBold.style}
        className={"font-medium text-[40px] text-white text-center"}
      >
        {text.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h1>
    </div>
  );
};

export default PuzzleTextItem;
