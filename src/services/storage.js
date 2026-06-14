export const getVentas = () => {
  return JSON.parse(localStorage.getItem("ventas") || "[]");
};

export const saveVentas = (ventas) => {
  localStorage.setItem("ventas", JSON.stringify(ventas));
};

export const getGastos = () => {
  return JSON.parse(localStorage.getItem("gastos") || "[]");
};

export const saveGastos = (gastos) => {
  localStorage.setItem("gastos", JSON.stringify(gastos));
};

export const getPedidos = () => {
  return JSON.parse(localStorage.getItem("pedidos") || "[]");
};

export const savePedidos = (pedidos) => {
  localStorage.setItem("pedidos", JSON.stringify(pedidos));
};

export const getInventario = () => {
  return JSON.parse(localStorage.getItem("inventario") || "[]");
};

export const saveInventario = (inventario) => {
  localStorage.setItem("inventario", JSON.stringify(inventario));
};