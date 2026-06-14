import { useState } from "react";
import VentaForm from "../components/VentaForm";
import { getVentas, saveVentas } from "../services/storage";

function Ventas() {
  const [ventas, setVentas] = useState(getVentas());

  const agregarVenta = (venta) => {
    const nuevasVentas = [...ventas, venta];

    setVentas(nuevasVentas);
    saveVentas(nuevasVentas);

    alert("✅ Venta registrada");
  };

  const eliminarVenta = (id) => {
    const confirmar = confirm(
      "¿Eliminar esta venta?"
    );

    if (!confirmar) return;

    const nuevasVentas = ventas.filter(
      (venta) => venta.id !== id
    );

    setVentas(nuevasVentas);
    saveVentas(nuevasVentas);
  };

  return (
    <div className="page">
      <VentaForm onAgregar={agregarVenta} />

      <div className="panel">
        <h2>Historial de Ventas</h2>

        {ventas.length === 0 ? (
          <p>No hay ventas registradas.</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>Modelo</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {ventas.map((venta) => (
                <tr key={venta.id}>
                  <td>{venta.fecha}</td>

                  <td>{venta.cliente}</td>

                  <td>{venta.modelo}</td>

                  <td>{venta.cantidad}</td>

                  <td>
                    {Number(
                      venta.precio
                    ).toFixed(2)}{" "}
                    Bs
                  </td>

                  <td>
                    {Number(
                      venta.total
                    ).toFixed(2)}{" "}
                    Bs
                  </td>

                  <td>
                    <button
                      className="btn-delete"
                      onClick={() =>
                        eliminarVenta(
                          venta.id
                        )
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

export default Ventas;