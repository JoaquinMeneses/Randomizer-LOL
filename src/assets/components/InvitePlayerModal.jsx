import React, { useState, useRef } from "react";
import Button from "./Button";

import button_search_default from "../images/button_search_default.png";
import button_search_hover from "../images/button_search_hover.png";

const Test = ({ id }) => {
  const [names, setNames] = useState([]);
  const inputName = useRef();

  const icons = { default: button_search_default, hover: button_search_hover };

  const invitePlayer = (event) => {
    event.preventDefault();
    const playerName = inputName.current.value.trim();

    if (playerName !== "") {
      setNames([...names, playerName]);
      inputName.current.value = "";
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/75">
      <div className="bg-grey-hextech-black w-1/4 h-3/4 border border-gold-4 p-4">
        <form onSubmit={invitePlayer} className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Escribe un nombre para invitar"
            className="w-full flex-1 h-7 text-xs text-gold-1 pl-2 bg-black border border-gold-4 focus:border-gold-1 focus:outline-none placeholder:font-spiegel placeholder:text-grey-1 placeholder:pl-1"
            ref={inputName}
          />
          <Button
            desc="Add players"
            size={8}
            icons={icons}
            action={invitePlayer}
            type="submit"
          />
        </form>
        {names.map((name, index) => (
          <section key={index} className="flex">
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/profileicon/${id}.png`}
              alt={`Perfil of player ${name}`}
              className="w-8 h-8 rounded-full border-gold-4 border-2"
            />
            <p className="text-gold-1">{name}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Test;
