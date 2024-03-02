import GraficoVendas from "../Components/GraficoVendas";
import { useData } from "../Context/DataContext";

const Resumo = () => {
  const { data } = useData();

  if (data === null) return null;

  return (
    <section>
      <div className="resumo flex mb">
        <div className="box">
          <h2>Vendas</h2>
          <span>
            {data
              .filter((item) => item.status !== "falha")
              .reduce((counter, item) => counter + item.preco, 0)
              .toLocaleString("pr-BR", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        <div className="box">
          <h2>Recebido</h2>
          <span>
            {data
              .filter((item) => item.status === "pago")
              .reduce((counter, item) => counter + item.preco, 0)
              .toLocaleString("pr-BR", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        <div className="box">
          <h2>Processando</h2>
          <span>
            {data
              .filter((item) => item.status === "processando")
              .reduce((counter, item) => counter + item.preco, 0)
              .toLocaleString("pr-BR", { style: "currency", currency: "BRL" })}
          </span>
        </div>
      </div>
      <div className="box mb">
        <GraficoVendas data={data}/>
      </div>
    </section>
  );
};

export default Resumo;
