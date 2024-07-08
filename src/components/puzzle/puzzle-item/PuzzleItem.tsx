import React, { FC } from "react";
import Image from "next/image";
import { IPuzzleItemProps } from "@/components/puzzle/puzzle-item/puzzle.types";

const PuzzleItem: FC<IPuzzleItemProps> = ({ photo }) => {
  return (
    <div className={"md:w-[300px] smob:w-full  shadow-2xl"}>
      <Image
        className={"md:w-[300px] smob:w-full  md:h-[300px] smob:h-[400px]"}
        src={photo}
        alt={"Photo"}
      />
    </div>
  );
};

export default PuzzleItem;
