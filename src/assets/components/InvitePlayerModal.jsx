import React, { useRef } from "react";
import Button from "./Button";

import button_search_default from "../images/button_search_default.png";
import button_search_hover from "../images/button_search_hover.png";

import useStore from "../store/store";

const InvitePlayerModal = ({ id, closeModal }) => {
  const { players, setPlayers } = useStore();

  const icons = { default: button_search_default, hover: button_search_hover };

  const inputInvitePlayer = useRef();

  const invitePlayer = () => {
    const inputValue = inputInvitePlayer.current.value;
    const updatedPlayers = players.map((player) =>
      player.id === id ? { ...player, name: inputValue } : player
    );
    setPlayers(updatedPlayers);
    inputInvitePlayer.current.value = '';
  };
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/75">
      <div className="bg-grey-hextech-black w-1/4 h-3/4 border border-gold-4 p-4">
        <form className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Escribe un nombre para invitar"
            className="w-full flex-1 h-7 text-xs text-gold-1 pl-2 bg-black border border-gold-4 focus:border-gold-1 focus:outline-none placeholder:font-spiegel placeholder:text-grey-1 placeholder:pl-1"
            ref={inputInvitePlayer}
          />
          <Button
            desc="Add players"
            size={8}
            icons={icons}
            action={invitePlayer}
          />
        </form>
      </div>
    </div>
  );
};

export default InvitePlayerModal;
