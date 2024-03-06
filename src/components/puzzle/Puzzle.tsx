import React from "react";
import PuzzleItem from "@/components/puzzle/puzzle-item/PuzzleItem";
import PuzzleTextItem from "@/components/puzzle/puzzle-item/PuzzleTextItem";
import puzzle1 from "@/assets/images/puzzle1.jpg";
import puzzle2 from "@/assets/images/puzzle2.jpg";
import puzzle3 from "@/assets/images/puzzle3.jpeg";
import puzzle4 from "@/assets/images/puzzle4.jpg";

const Puzzle = () => {
  return (
    <div className={"mt-24"}>
      <div className={"flex justify-between"}>
        <PuzzleItem photo={puzzle1} />
        <PuzzleTextItem text={"ВЫГОДНО КУПИТЬ"} />
        <PuzzleItem photo={puzzle2} />
        <PuzzleTextItem text={"БЫСТРО СДАТЬ"} />
      </div>
      <div className={"flex justify-between mt-4"}>
        <PuzzleTextItem text={"ВЫГОДНО ПРОДАТЬ"} />
        <PuzzleItem photo={puzzle3} />
        <PuzzleTextItem text={"БЫСТРАЯ ИПОТЕКА"} />
        <PuzzleItem photo={puzzle4} />
      </div>
    </div>
  );
};

export default Puzzle;
