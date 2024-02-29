import React from "react";

type ButtonProps = {
  incrementar: React.Dispatch<React.SetStateAction<number>>;
};

const Button = ({ incrementar }: ButtonProps) => {
  return (
    <button
      onClick={() => {
        incrementar((number) => number + 1);
      }}
    >
      Incrementar
    </button>
  );
};

export default Button;
