import React, { FC } from "react";
import Image from "next/image";
import { IPuzzleItemProps } from "@/components/puzzle/puzzle-item/puzzle.types";

const PuzzleItem: FC<IPuzzleItemProps> = ({ photo }) => {
  return (
    <div className={"w-[232px] h-[232px] shadow-2xl"}>
      <Image className={"w-[232px] h-[232px]"} src={photo} alt={"Photo"} />
    </div>
  );
};

export default PuzzleItem;
