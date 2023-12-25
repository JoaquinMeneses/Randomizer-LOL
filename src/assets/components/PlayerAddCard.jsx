import React from "react";
import Button from "./Button";
import icon_add from "../images/icon_add.webp";

const PlayerAddCard = ({ id, setPlayers }) => {
  const addPlayer = () => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === id ? { ...player, name: "Pedro" } : player
      )
    );
  };

  return (
    <section className="bg-blue-7/50 w-[20rem] h-[5.938rem] grid place-content-center px-4 hover:bg-gradient-to-t hover:from-gold-5/50 border border-gold-4 hover:border-gold-1">
      <Button
        desc="Add a player"
        size={14}
        icon={icon_add}
        action={addPlayer}
      />
    </section>
  );
};

export default PlayerAddCard;
