import React from "react";
import QuestionMark from "../images/question-mark.png";

const CardPlayer = ({ players }) => {
  return (
    <div className="w-full flex flex-wrap ">
      {players.map((player, index) => (
        <section
          key={index}
          className="w-1/4 flex flex-col justify-center items-center"
        >
          <img src={QuestionMark} alt="Icon question mark" className="w-16 border-white" />
          <p className="p-4">{player.trim()}</p>
        </section>
      ))}
    </div>
  );
};

export default CardPlayer;
