import { useState } from "react";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/dashboard";
import Ventas from "./pages/ventas";
import Gastos from "./pages/gastos";
import Pedidos from "./pages/pedidos";
import Inventario from "./pages/inventario";

import "./styles/app.css";

function App() {
  const [pagina, setPagina] = useState("Dashboard");

  const renderPagina = () => {
    switch (pagina) {
      case "ventas":
        return <Ventas />;

      case "gastos":
        return <Gastos />;

      case "pedidos":
        return <Pedidos />;

      case "inventario":
        return <Inventario />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <Navbar
        pagina={pagina}
        setPagina={setPagina}
      />

      <main className="content">
        {renderPagina()}
      </main>
    </div>
  );
}

export default App;