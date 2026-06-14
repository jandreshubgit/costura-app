import { useState } from "react";
import GastoForm from "../components/GastoForm";
import { getGastos, saveGastos } from "../services/storage";

function Gastos() {
  const [gastos, setGastos] = useState(getGastos());

  const agregarGasto = (gasto) => {
    const nuevosGastos = [...gastos, gasto];

    setGastos(nuevosGastos);
    saveGastos(nuevosGastos);

    alert("✅ Gasto registrado");
  };

  const eliminarGasto = (id) => {
    if (!confirm("¿Eliminar gasto?")) return;

    const nuevosGastos = gastos.filter(
      (gasto) => gasto.id !== id
    );

    setGastos(nuevosGastos);
    saveGastos(nuevosGastos);
  };

  return (
    <div className="page">
      <GastoForm onAgregar={agregarGasto} />

      <div className="panel">
        <h2>Historial de Gastos</h2>

        {gastos.length === 0 ? (
          <p>No hay gastos registrados.</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Concepto</th>
                <th>Monto</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {gastos.map((gasto) => (
                <tr key={gasto.id}>
                  <td>{gasto.fecha}</td>

                  <td>{gasto.concepto}</td>

                  <td>
                    {Number(gasto.monto).toFixed(2)} Bs
                  </td>

                  <td>
                    <button
                      className="btn-delete"
                      onClick={() =>
                        eliminarGasto(gasto.id)
                      }
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Gastos;