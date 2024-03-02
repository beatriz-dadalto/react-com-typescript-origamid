import React from "react";
import { useData } from "../Context/DataContext";

const buttonStyle: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
};

function nomeDoMes(numeroMes: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + numeroMes);
  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
}

function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = String(date.getFullYear());
  return `${yyyy}-${mm}-${dd}`;
}

const MesBtn = ({ numeroMes }: { numeroMes: number }) => {
  const { setInicio, setFinal } = useData();

  function setMes(numeroMes: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + numeroMes);
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setInicio(formatDate(firstDay));
    setFinal(formatDate(lastDay));
  }

  return (
    <button style={buttonStyle} onClick={() => setMes(numeroMes)}>
      {nomeDoMes(numeroMes)}
    </button>
  );
};

export default MesBtn;
