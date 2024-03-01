import React from "react";
import DateInput from "./DateInput";

const DateRange = () => {
  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <DateInput
        label="Início"
        id="inicio"
        value={inicio}
        onChange={(item) => setInicio(item.target.value)}
      />
      <DateInput
        label="Final"
        id="final"
        value={final}
        onChange={(item) => setFinal(item.target.value)}
      />
    </form>
  );
};

export default DateRange;
