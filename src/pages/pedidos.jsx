import { useState } from "react";
import {
  getPedidos,
  savePedidos,
} from "../services/storage";

function Pedidos() {
  const [cliente, setCliente] = useState("");
  const [modelo, setModelo] = useState("");
  const [estado, setEstado] =
    useState("Pendiente");

  const [pedidos, setPedidos] =
    useState(getPedidos());

  const agregarPedido = (e) => {
    e.preventDefault();

    if (!cliente.trim()) {
      alert("Ingrese cliente");
      return;
    }

    if (!modelo.trim()) {
      alert("Ingrese modelo");
      return;
    }

    const nuevoPedido = {
      id: Date.now(),
      cliente,
      modelo,
      estado,
      fecha: new Date().toLocaleDateString(),
    };

    const nuevosPedidos = [
      ...pedidos,
      nuevoPedido,
    ];

    setPedidos(nuevosPedidos);
    savePedidos(nuevosPedidos);

    setCliente("");
    setModelo("");
    setEstado("Pendiente");
  };

  const cambiarEstado = (id, nuevoEstado) => {
    const nuevosPedidos = pedidos.map(
      (pedido) =>
        pedido.id === id
          ? {
              ...pedido,
              estado: nuevoEstado,
            }
          : pedido
    );

    setPedidos(nuevosPedidos);
    savePedidos(nuevosPedidos);
  };

  const eliminarPedido = (id) => {
    if (!confirm("¿Eliminar pedido?"))
      return;

    const nuevosPedidos = pedidos.filter(
      (pedido) => pedido.id !== id
    );

    setPedidos(nuevosPedidos);
    savePedidos(nuevosPedidos);
  };

  return (
    <div className="page">
      <div className="panel">
        <h2>Registrar Pedido</h2>

        <form
          className="form-container"
          onSubmit={agregarPedido}
        >
          <input
            placeholder="Cliente"
            value={cliente}
            onChange={(e) =>
              setCliente(e.target.value)
            }
          />

          <input
            placeholder="Modelo"
            value={modelo}
            onChange={(e) =>
              setModelo(e.target.value)
            }
          />

          <select
            value={estado}
            onChange={(e) =>
              setEstado(e.target.value)
            }
          >
            <option>Pendiente</option>
            <option>En Proceso</option>
            <option>Terminado</option>
            <option>Entregado</option>
          </select>

          <button
            className="btn-primary"
            type="submit"
          >
            Guardar Pedido
          </button>
        </form>
      </div>

      <div className="panel">
        <h2>Pedidos</h2>

        {pedidos.length === 0 ? (
          <p>No hay pedidos.</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>Modelo</th>
                <th>Estado</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {pedidos.map((pedido) => (
                <tr key={pedido.id}>
                  <td>{pedido.fecha}</td>

                  <td>{pedido.cliente}</td>

                  <td>{pedido.modelo}</td>

                  <td>
                    <select
                      value={pedido.estado}
                      onChange={(e) =>
                        cambiarEstado(
                          pedido.id,
                          e.target.value
                        )
                      }
                    >
                      <option>
                        Pendiente
                      </option>
                      <option>
                        En Proceso
                      </option>
                      <option>
                        Terminado
                      </option>
                      <option>
                        Entregado
                      </option>
                    </select>
                  </td>

                  <td>
                    <button
                      className="btn-delete"
                      onClick={() =>
                        eliminarPedido(
                          pedido.id
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

export default Pedidos;