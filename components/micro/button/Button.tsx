import React from "react";

type Props = {
  children: string | React.ReactNode;
  disabled?: boolean;
  className?: string;
};

const Button = ({ children, className, disabled }: Props) => {
  return (
    <button
      className={`${className} bg-primary text-white h-11 text-sm rounded-md w-32 font-medium`}
    >
      {children}
    </button>
  );
};

export default Button;
