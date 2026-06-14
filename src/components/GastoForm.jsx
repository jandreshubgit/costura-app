import { useState } from "react";

function GastoForm({ onAgregar }) {
  const [concepto, setConcepto] = useState("");
  const [monto, setMonto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!concepto.trim()) {
      alert("Ingrese un concepto");
      return;
    }

    if (monto <= 0) {
      alert("Ingrese un monto válido");
      return;
    }

    const nuevoGasto = {
      id: Date.now(),
      concepto,
      monto: Number(monto),
      fecha: new Date().toLocaleDateString(),
    };

    onAgregar(nuevoGasto);

    setConcepto("");
    setMonto("");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h3>Registrar Gasto</h3>

      <input
        type="text"
        placeholder="Concepto (Tela, Hilo, Cierres...)"
        value={concepto}
        onChange={(e) => setConcepto(e.target.value)}
      />

      <input
        type="number"
        min="1"
        placeholder="Monto"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
      />

      <button type="submit" className="btn-danger">
        Guardar Gasto
      </button>
    </form>
  );
}

export default GastoForm;