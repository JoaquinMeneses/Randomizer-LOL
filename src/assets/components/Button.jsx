import React, { useState } from "react";

const Button = ({ desc, size, icons, action }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const getSizeClass = (size) => {
    switch (size) {
      case 8:
        return "h-8 w-8";
      case 10:
        return "h-10 w-10";
      case 16:
        return "h-16 w-16";
      case 20:
        return "h-20 w-20";
      default:
        return "h-4 w-4";
    }
  };

  const buttonSize = getSizeClass(size);
  const buttonImage = hovered ? icons?.hover : icons?.default;

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={action}
      className={buttonSize}
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
