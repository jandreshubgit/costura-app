import { useState } from "react";

function VentaForm({ onAgregar }) {
  const [cliente, setCliente] = useState("");
  const [modelo, setModelo] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [precio, setPrecio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cliente.trim()) {
      alert("Ingrese el nombre del cliente");
      return;
    }

    if (!modelo.trim()) {
      alert("Ingrese el modelo");
      return;
    }

    if (cantidad <= 0) {
      alert("La cantidad debe ser mayor a 0");
      return;
    }

    if (precio <= 0) {
      alert("El precio debe ser mayor a 0");
      return;
    }

    const nuevaVenta = {
      id: Date.now(),
      cliente,
      modelo,
      cantidad: Number(cantidad),
      precio: Number(precio),
      total: Number(cantidad) * Number(precio),
      fecha: new Date().toLocaleDateString(),
    };

    onAgregar(nuevaVenta);

    setCliente("");
    setModelo("");
    setCantidad(1);
    setPrecio("");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h3>Registrar Venta</h3>

      <input
        type="text"
        placeholder="Cliente"
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
      />

      <input
        type="text"
        placeholder="Modelo o prenda"
        value={modelo}
        onChange={(e) => setModelo(e.target.value)}
      />

      <input
        type="number"
        min="1"
        placeholder="Cantidad"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
      />

      <input
        type="number"
        min="1"
        placeholder="Precio Unitario"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />

      <div className="total-preview">
        Total:{" "}
        <strong>
          {(Number(cantidad) * Number(precio || 0)).toFixed(2)} Bs
        </strong>
      </div>

      <button type="submit" className="btn-primary">
        Guardar Venta
      </button>
    </form>
  );
}

export default VentaForm;