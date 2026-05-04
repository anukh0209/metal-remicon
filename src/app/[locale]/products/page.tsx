export default function ProductsPage() {
  const products = [
    { name: "Бетон", desc: "Өндөр чанартай бетон" },
    { name: "Төмөр бетон эдлэл", desc: "Барилгын үндсэн материал" },
    { name: "Барилгын материал", desc: "Төрөл бүрийн бүтээгдэхүүн" },
  ];

  return (
    <div style={{ padding: 40, maxWidth: 1000, margin: "0 auto" }}>
      <h1 style={{ fontSize: 32, fontWeight: "bold", marginBottom: 20 }}>
        Бүтээгдэхүүн
      </h1>

      <p style={{ marginBottom: 30 }}>
        Манай компанийн нийлүүлдэг бүтээгдэхүүнүүд:
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 20,
        }}
      >
        {products.map((p, i) => (
          <div
            key={i}
            style={{
              border: "1px solid #ddd",
              padding: 20,
              borderRadius: 10,
            }}
          >
            <h3 style={{ fontSize: 20, marginBottom: 10 }}>{p.name}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}