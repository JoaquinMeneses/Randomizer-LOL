import React from "react";
import Button from "./Button";

import button_search_default from "../images/button_search_default.png";
import button_search_hover from "../images/button_search_hover.png";

const InvitePlayerModal = ({ closeModal }) => {
  const icons = { default: button_search_default, hover: button_search_hover };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/75">
      <div className="bg-grey-hextech-black w-1/4 h-3/4 border border-gold-4 p-4">
        <form className="flex items-center gap-2">
          <input type="text" className="w-full flex-1 h-7 border border-gold-4" />
          <Button
            desc="Add players"
            size={8}
            icons={icons}
            action={closeModal}
          />
        </form>
      </div>
    </div>
  );
};

export default InvitePlayerModal;
