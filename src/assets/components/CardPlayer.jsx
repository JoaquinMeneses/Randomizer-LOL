import React from "react";
import QuestionMark from "../images/question-mark.png";

const CardPlayer = ({ players, randomChamps, verifyChampAsset }) => {
  return (
    <div className="w-full flex flex-wrap ">
      {players.map((player, index) => (
        <section
          key={index}
          className="w-1/4 flex flex-col justify-center items-center"
        >
          <img
            src={verifyChampAsset ? randomChamps[index]?.image : QuestionMark}
            alt="Icon question mark"
            className="w-16 rounded-full"
          />
          <p className="p-4">{player.trim()}</p>
        </section>
      ))}
    </div>
  );
};

export default CardPlayer;
