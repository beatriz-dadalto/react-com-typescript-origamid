import React from "react";
import Input from "./Input";

function App() {
  const [data, setData] = React.useState("");

  return (
    <div>
      <p>Início da viagem: {data}</p>
      <Input id="email" label="Email" type="email" />
      <Input id="nome" label="Nome" />
      <Input
        value={data}
        onChange={(data) => setData(data.currentTarget.value)}
        id="inicio"
        label="Início da Viagem"
        type="date"
      />
      <Input id="horario" label="Horário" type="time" />
    </div>
  );
}

export default App;
