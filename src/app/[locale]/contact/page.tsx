export default function ContactPage() {
  return (
    <div style={{ padding: 40, maxWidth: 800, margin: "0 auto" }}>
      <h1 style={{ fontSize: 32, fontWeight: "bold", marginBottom: 20 }}>
        Холбоо барих
      </h1>

      <p style={{ marginBottom: 20 }}>
        Та бидэнтэй доорх мэдээллээр холбогдоорой.
      </p>

      <div style={{ lineHeight: "1.8" }}>
        <p><strong>Утас:</strong> 9911-0000</p>
        <p><strong>Имэйл:</strong> info@metalremicon.mn</p>
        <p><strong>Хаяг:</strong> Улаанбаатар хот</p>
      </div>

      <hr style={{ margin: "30px 0" }} />

      <h2 style={{ marginBottom: 10 }}>Мессеж илгээх</h2>

      <form style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <input placeholder="Таны нэр" style={{ padding: 10 }} />
        <input placeholder="Имэйл" style={{ padding: 10 }} />
        <textarea placeholder="Мессеж" rows={5} style={{ padding: 10 }} />
        <button
          style={{
            padding: 12,
            background: "#f26522",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Илгээх
        </button>
      </form>
    </div>
  );
}