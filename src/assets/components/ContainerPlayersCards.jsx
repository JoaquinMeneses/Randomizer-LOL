import React, { useState } from "react";
import PlayerAddCard from "./PlayerAddCard";
import PlayerAddedCard from "./PlayerAddedCard";

const ContainerPlayersCards = () => {
  const [players, setPlayers] = useState(
    [
      { id: 0, name: null },
      { id: 1, name: null },
      { id: 2, name: null },
      { id: 3, name: null },
      { id: 4, name: null },
      { id: 5, name: null },
      { id: 6, name: null },
      { id: 7, name: null },
      { id: 8, name: null },
    ].slice(0, 8)
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-1/2">
      {players.map((player) =>
        player.name === null ? (
          <PlayerAddCard
            key={player.id}
            id={player.id}
            setPlayers={setPlayers}
          />
        ) : (
          <PlayerAddedCard
            key={player.id}
            id={player.id}
            name={player.name}
            setPlayers={setPlayers}
          />
        )
      )}
    </div>
  );
};

export default ContainerPlayersCards;
