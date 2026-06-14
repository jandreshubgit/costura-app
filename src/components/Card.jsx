function Card({
  titulo,
  valor,
  color = "#2563eb",
}) {
  return (
    <div
      className="card"
      style={{
        borderLeft: `6px solid ${color}`,
      }}
    >
      <h3>{titulo}</h3>

      <p className="card-value">
        {valor}
      </p>
    </div>
  );
}

export default Card;