function Navbar({ pagina, setPagina }) {
  const menus = [
    { key: "dashboard", label: "📊 Dashboard" },
    { key: "ventas", label: "💰 Ventas" },
    { key: "gastos", label: "💸 Gastos" },
    { key: "pedidos", label: "📋 Pedidos" },
    { key: "inventario", label: "📦 Inventario" },
  ];

  return (
    <nav className="navbar">
      <h2 className="logo">✂️ Mi Taller</h2>

      <div className="menu">
        {menus.map((item) => (
          <button
            key={item.key}
            className={
              pagina === item.key
                ? "nav-btn active"
                : "nav-btn"
            }
            onClick={() => setPagina(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;