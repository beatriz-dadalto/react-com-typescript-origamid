import React from "react";
import useFetch from "./useFetch";

type Produto = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
  internacional: boolean;
};

function App() {
  const [id, setId] = React.useState("p001");
  const produtos = useFetch<Produto[]>("https://data.origamid.dev/produtos/");
  const produto = useFetch<Produto>(
    `https://data.origamid.dev/produtos/${id}`,
    { cache: "force-cache" },
  );

  return (
    <section className="flex">
      <div>
        {produtos.data &&
          produtos.data.map((produto) => (
            <button
              onClick={() => setId(produto.id)}
              key={produto.id}
              style={{ fontSize: "0.875rem" }}
            >
              {produto.nome}
            </button>
          ))}
      </div>
      <div>
        {produto.loading && (
          <div>
            <p>Carregando...</p>
          </div>
        )}
        {produto.data && (
          <ul>
            <li>
              <span style={{ fontWeight: "bold" }}>ID:</span> {produto.data.id}
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Nome:</span>{" "}
              {produto.data.nome}
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Preço:</span>{" "}
              {produto.data.preco}
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Quantidade:</span>{" "}
              {produto.data.quantidade}
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Descrição:</span>{" "}
              {produto.data.descricao}
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Internacional:</span>{" "}
              {produto.data.internacional ? "Sim" : "Não"}
            </li>
          </ul>
        )}
      </div>
    </section>
  );
}

export default App;
