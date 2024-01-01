import React, { useState } from "react";
import Button from "./Button";
import InvitePlayerModal from "./InvitePlayerModal";

import button_invite_default from "../images/button_invite_default.png";
import button_invite_hover from "../images/button_invite_hover.png";

const PlayerAddCard = ({ id }) => {
  const icons = { default: button_invite_default, hover: button_invite_hover };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <section className="bg-grey-hextech-black/60 w-full h-[5.938rem] grid place-content-center px-4 hover:bg-gradient-to-t hover:from-gold-5/50 border border-gold-4 hover:border-gold-1">
      <Button
        desc="Open modal for invite players"
        size={20}
        icons={icons}
        action={openModal}
      />
      {isModalOpen && <InvitePlayerModal id={id} />}
    </section>
  );
};

export default PlayerAddCard;
