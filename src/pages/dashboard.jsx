import Card from "../components/Card";
import {
  getVentas,
  getGastos,
  getPedidos,
  getInventario,
} from "../services/storage";

function Dashboard() {
  const ventas = getVentas();
  const gastos = getGastos();
  const pedidos = getPedidos();
  const inventario = getInventario();

  const totalVentas = ventas.reduce(
    (acc, item) => acc + item.total,
    0
  );

  const totalGastos = gastos.reduce(
    (acc, item) => acc + item.monto,
    0
  );

  const ganancia = totalVentas - totalGastos;

  const pedidosPendientes = pedidos.filter(
    (p) => p.estado !== "Entregado"
  ).length;

  const stockBajo = inventario.filter(
    (i) => Number(i.stock) <= 5
  ).length;

  return (
    <div className="page">
      <h1>📊 Dashboard</h1>

      <div className="cards-grid">
        <Card
          titulo="Ventas Totales"
          valor={`${totalVentas.toFixed(2)} Bs`}
          color="#16a34a"
        />

        <Card
          titulo="Gastos Totales"
          valor={`${totalGastos.toFixed(2)} Bs`}
          color="#dc2626"
        />

        <Card
          titulo="Ganancia"
          valor={`${ganancia.toFixed(2)} Bs`}
          color="#2563eb"
        />

        <Card
          titulo="Pedidos Pendientes"
          valor={pedidosPendientes}
          color="#f59e0b"
        />

        <Card
          titulo="Productos Inventario"
          valor={inventario.length}
          color="#7c3aed"
        />

        <Card
          titulo="Stock Bajo"
          valor={stockBajo}
          color="#ef4444"
        />
      </div>

      <div className="panel">
        <h2>Resumen General</h2>

        <p>
          Total ventas registradas:
          <strong> {ventas.length}</strong>
        </p>

        <p>
          Total gastos registrados:
          <strong> {gastos.length}</strong>
        </p>

        <p>
          Total pedidos:
          <strong> {pedidos.length}</strong>
        </p>

        <p>
          Productos en inventario:
          <strong> {inventario.length}</strong>
        </p>
      </div>
    </div>
  );
}

export default Dashboard;