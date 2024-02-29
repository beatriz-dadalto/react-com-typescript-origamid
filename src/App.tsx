import React from "react";
import Input from "./Input";
import { Venda } from "./Venda";

function App() {
  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");
  const [data, setData] = React.useState<null | Venda[]>(null);

  React.useEffect(() => {
    if (inicio !== "" && final !== "") {
      fetch(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`)
        .then((response) => response.json())
        .then((json) => setData(json as Venda[]))
        .catch((error) => console.log(error));
    }
  }, [inicio, final]);

  return (
    <div>
      <div>
        <Input
          id="inicio"
          label="Início"
          setState={setInicio}
          type="date"
          value={inicio}
        />
        <Input
          id="final"
          label="Final"
          setState={setFinal}
          type="date"
          value={final}
        />
      </div>
      <ul>
        {data !== null && <p>Total de vendas: {data.length}</p>}
        {data !== null &&
          data.map((venda) => (
            <li key={venda.id}>
              {venda.nome}: {venda.status}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
