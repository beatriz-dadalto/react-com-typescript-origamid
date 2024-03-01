import React from "react";
import DateInput from "./DateInput";
import { useData } from "../Context/DataContext";

const DateRange = () => {
  const { inicio, setInicio, final, setFinal } = useData();

  return (
    <form className="box flex" onSubmit={(event) => event.preventDefault()}>
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
