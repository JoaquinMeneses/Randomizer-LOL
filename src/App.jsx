import React, { useState } from "react";
import CardPlayer from "./assets/components/CardPlayer";

const App = () => {
  const [players, setPlayers] = useState([]);

  const handlePlayerChange = (e) => {
    const inputPlayers = e.target.value
      .split("\n")
      .map((player) => player.trim());
    // Limitar a 8 jugadores
    const limitedPlayers = inputPlayers.slice(0, 8);
    setPlayers(limitedPlayers);
  };

  return (
    <div className="bg-black_hextech min-h-screen text-text font-spiegel">
      <header>
        <h1 className="text-center p-4 text-3xl text-title font-beaufort font-bold tracking-widest">
          RANDOMIZER
        </h1>
      </header>
      <main className="flex w-screen">
        <div className="w-1/2 h-full flex flex-col items-center gap-2">
          <p>Ingrese los jugadores:</p>
          <div className="w-1/2 bg-border p-0.5">
            <textarea
              className="p-2 text-subtext flex h-full w-full items-center justify-center bg-secondary resize-none outline-none focus:outline-title"
              value={players.join("\n")}
              onChange={handlePlayerChange}
              placeholder="Escribe aquí..."
              rows="8"
            />
          </div>
          <button
            className="bg-[#1E2328] m-2 px-4 py-2 cursor-pointer border-border border-2"
            onClick={() => console.log("clicked")}
          >
            <p className="text-subtext font-spiegel font-bold cursor-pointer">
              RANDOM
            </p>
          </button>
        </div>
        <CardPlayer players={players} />
      </main>
    </div>
  );
};

export default App;
