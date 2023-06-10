import React from "react";

const Button = ({
  onClick,
  className = "",
  children,
  full = false,
  type = "button",
  bgColor = "primary",
  ...props
}) => {
  let bgClassName = "";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
      break;
    default:
      break;
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        full ? "w-full" : ""
      }  px-6 py-3 mt-auto capitalize rounded-lg ${bgClassName} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
