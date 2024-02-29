import React from "react";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
  id: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

function Input({ label, id, setState, ...props }: InputProps) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>{label}</label>
      <input
        id={id}
        name={id}
        onChange={(event) => {
          setState(event.currentTarget.value);
        }}
        type="text"
        {...props}
      />
    </div>
  );
}

export default Input;
