import React from "react";
import Button from "./Button";

import button_kick_default from "../images/button_kick_default.png";
import button_kick_hover from "../images/button_kick_hover.png";
import icon_question_mark from "../images/icon_question_mark.webp";

import useStore from "../store/store";

const PlayerAddedCard = ({ id, name }) => {
  const icons = { default: button_kick_default, hover: button_kick_hover };

  const { players, setPlayers } = useStore();

  const kickPlayer = () => {
    const updatedPlayers = players.map((player) =>
      player.id === id ? { ...player, name: null } : player
    );
    setPlayers(updatedPlayers);
  };

  return (
    <section className="bg-grey-hextech-black/60 w-full h-[5.938rem] flex items-center justify-between px-4 hover:bg-gradient-to-t hover:from-gold-5/50 border border-gold-4 hover:border-gold-1">
      <div className="flex items-center">
        <img
          src={icon_question_mark}
          alt="Question mark"
          className="bg-grey-3 w-16 h-16 rounded-full border-gold-4 border-4 p-2"
        />
        <p className="font-spiegel text-gold-4 font-bold px-4">{name}</p>
      </div>
      <Button
        desc="Kick a player"
        size={10}
        icons={icons}
        action={kickPlayer}
      />
    </section>
  );
};

export default PlayerAddedCard;
