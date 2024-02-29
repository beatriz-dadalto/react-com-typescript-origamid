import React from "react";

type CheckboxProps = React.ComponentProps<"input"> & {
  label: string;
};

const Checkbox = ({ label, ...props }: CheckboxProps) => {
  const [isChecked, setIsChecked] = React.useState(false);

  /*
    se eu fizer por funcao anonima ela já tipa. como essa funcao eh apenas para mudar o evento, eh melhor fazer por funcao anonima la na propriedade da tag input
  */
  // const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  //   setIsChecked(event.currentTarget.checked);
  // };

  return (
    <label
      htmlFor={label}
      style={{
        padding: "1rem",
        border: isChecked ? "2px solid #8D2" : "2px solid #F70",
      }}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(event) => {
          setIsChecked(event.currentTarget.checked);
        }}
        {...props}
      />
      {label}
    </label>
  );
};

export default Checkbox;
