import React, { useState } from "react";

const Button = ({ desc, size, icons, action }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const buttonImage = hovered ? icons?.hover : icons?.default;

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={action}
      className={`h-${size} w-${size}`}
    >
      <img
        src={buttonImage}
        alt={`Button: ${desc}`}
        className="h-full w-full cursor-pointer"
      />
    </button>
  );
};

export default Button;
