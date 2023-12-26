import React from "react";
import ContainerPlayersCards from "./assets/components/ContainerPlayersCards";

const App = () => {
  return (
    <main className="bg-[url('../src/assets/images/ArenaEnd.webp')] bg-cover min-h-screen flex flex-col justify-center items-center select-none cursor-default">
      <p className="fixed top-0 w-screen bg-indigo-900 text-center text-gold-1 py-2">
        El proyecto está siendo desarrollando en mi tiempo libre. El proyecto
        surge debido a la desconfianza entre panas al jugar arenas con champs
        randoms. De momento no es full responsive.
      </p>
      <ContainerPlayersCards />
      <button className="bg-grey-3 border-2 border-blue-3 hover:border-gold-1 hover:shadow-btn m-4 px-4 py-2 cursor-pointer">
        <p className="text-gold-1 font-spiegel font-bold">RANDOM</p>
      </button>
    </main>
  );
};

export default App;
