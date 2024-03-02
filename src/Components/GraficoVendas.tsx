import { IVenda } from "../Context/DataContext";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const dadaosGrafico = [
  {
    data: "2023-05-03",
    pago: 3000,
    processando: 30000,
    falha: 2000,
  },
  {
    data: "2023-05-04",
    pago: 5000,
    processando: 80000,
    falha: 4000,
  },
  {
    data: "2023-05-05",
    pago: 5000,
    processando: 80000,
    falha: 4000,
  },
];

const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  return (
    <ResponsiveContainer width={"99%"} height={400}>
      <LineChart data={dadaosGrafico}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#FBCB21"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#000000"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraficoVendas;
