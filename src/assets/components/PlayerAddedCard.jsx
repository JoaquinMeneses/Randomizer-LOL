import React from "react";
import Button from "./Button";
import icon_question_mark from "../images/icon_question_mark.webp";
import icon_kick from "../images/icon_kick.webp";

const PlayerAddedCard = ({ id, name, setPlayers }) => {
  const deletePlayer = () => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === id ? { ...player, name: null } : player
      )
    );
  };

  return (
    <section className="bg-blue-7/50 w-[20rem] h-[5.938rem] flex items-center justify-between px-4 hover:bg-gradient-to-t hover:from-gold-5/50 border border-gold-4 hover:border-gold-1">
      <div className="flex items-center">
        <img
          src={icon_question_mark}
          alt="Question mark"
          className="bg-grey-3 w-16 h-16 rounded-full border-gold-4 border-4 p-2"
        />
        <p className="font-spiegel text-gold-4 font-bold px-4">{name}</p>
      </div>
      <Button
        desc="Delete a player"
        size={8}
        icon={icon_kick}
        action={deletePlayer}
      />
    </section>
  );
};

export default PlayerAddedCard;
