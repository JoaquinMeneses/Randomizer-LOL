import React from "react";

const Button = ({ desc, size, icon, action }) => {
  return (
    <button
      className={`bg-grey-3 w-${size} h-${size} grid place-content-center rounded-full border-gold-4 border-2 hover:border-gold-1 hover:bg-gradient-to-t hover:from-gold-7 cursor-pointer`}
      onClick={() => action()}
    >
      <img src={icon} alt={`Icon of button ${desc}`} className="w-8 h-8" />
    </button>
  );
};

export default Button;
