import React, { useState } from "react";
import button_search_default from "../images/button_search_default.png";
import button_search_hover from "../images/button_search_hover.png";

const InvitePlayerModal = ({ closeModal }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const buttonImage = hovered ? button_search_hover : button_search_default;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/75">
      <div className="bg-grey-hextech-black w-1/4 h-3/4 border border-gold-4 p-4">
        <div>
          <input type="text" />
          <button
            className="rounded-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={()=>{console.log("Clicked")}}
          >
            <img src={buttonImage} alt="Button: Add a player" />
          </button>
        </div>
        <button
          className="bg-blue-7/50 text-blue-2 px-4 py-2 rounded hover:bg-gradient-to-t hover:from-gold-5/50"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default InvitePlayerModal;
