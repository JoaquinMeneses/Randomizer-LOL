import React from "react";
import PlayerAddCard from "./PlayerAddCard";
import PlayerAddedCard from "./PlayerAddedCard";

import useStore from "../store/store";

const ContainerPlayersCards = () => {
  const { players } = useStore();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-1/2">
      {players.map((player) =>
        player.name === null ? (
          <PlayerAddCard key={player.id} id={player.id} />
        ) : (
          <PlayerAddedCard key={player.id} id={player.id} name={player.name} />
        )
      )}
    </div>
  );
};

export default ContainerPlayersCards;
