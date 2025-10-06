import React from "react";

function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
}) {
  //Variant Styles
  const baseStyles =
    "px-6 py-3 rounded-sm font-semibold transition-all duration-300 focus:outline-none ";

  const variants = {
    primary:
      "bg-transparent border-2 text-white border-primary-200 hover:bg-primary-200 hover:border-transparent   hover:text-secondary-100",
    primaryAccent:
      "bg-primary-200 border-2 text-secondary-100 border-primary-200   hover:border-secondary-100   hover:text-secondary-100",
    secondary:
      "bg-transparent border border-white hover:bg-white hover:text-black",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-xl",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
