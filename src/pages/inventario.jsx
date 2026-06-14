import { useState } from "react";
import {
  getInventario,
  saveInventario,
} from "../services/storage";

function Inventario() {
  const [nombre, setNombre] =
    useState("");

  const [stock, setStock] =
    useState("");

  const [inventario, setInventario] =
    useState(getInventario());

  const agregarProducto = (e) => {
    e.preventDefault();

    if (!nombre.trim()) {
      alert("Ingrese nombre");
      return;
    }

    if (stock <= 0) {
      alert("Ingrese stock válido");
      return;
    }

    const nuevoProducto = {
      id: Date.now(),
      nombre,
      stock: Number(stock),
    };

    const nuevoInventario = [
      ...inventario,
      nuevoProducto,
    ];

    setInventario(nuevoInventario);
    saveInventario(nuevoInventario);

    setNombre("");
    setStock("");
  };

  const eliminarProducto = (id) => {
    if (!confirm("¿Eliminar producto?"))
      return;

    const nuevoInventario =
      inventario.filter(
        (item) => item.id !== id
      );

    setInventario(nuevoInventario);
    saveInventario(nuevoInventario);
  };

  return (
    <div className="page">
      <div className="panel">
        <h2>Agregar Material</h2>

        <form
          className="form-container"
          onSubmit={agregarProducto}
        >
          <input
            placeholder="Nombre del material"
            value={nombre}
            onChange={(e) =>
              setNombre(e.target.value)
            }
          />

          <input
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) =>
              setStock(e.target.value)
            }
          />

          <button
            className="btn-primary"
            type="submit"
          >
            Guardar
          </button>
        </form>
      </div>

      <div className="panel">
        <h2>Inventario</h2>

        {inventario.length === 0 ? (
          <p>No hay productos.</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Material</th>
                <th>Stock</th>
                <th>Estado</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {inventario.map((item) => (
                <tr key={item.id}>
                  <td>{item.nombre}</td>

                  <td>{item.stock}</td>

                  <td>
                    {item.stock <= 5
                      ? "⚠ Bajo"
                      : "✅ Disponible"}
                  </td>

                  <td>
                    <button
                      className="btn-delete"
                      onClick={() =>
                        eliminarProducto(
                          item.id
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

export default Inventario;