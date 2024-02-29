import React from "react";

type ButtonProps = {
  tamanho?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

function Button(props: ButtonProps) {
  return (
    <button 
      style={{ fontSize: props.tamanho }}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
