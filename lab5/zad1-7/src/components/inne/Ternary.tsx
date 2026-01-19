const Ternary = () => {
  const a = true;
  const b = false;

  return (
    <div style={{ margin: "20px", padding: "10px", border: "1px solid gray" }}>
      <h3>Zadanie 4.1 - Ternary Operator</h3>

      {/* warunek ? prawda : fałsz */}
      <div>
        {a ? "Stwierdzenie a jest prawdziwe" : "Stwierdzenie a jest fałszywe"}
      </div>

      <div>
        {b ? "Stwierdzenie b jest prawdziwe" : "Stwierdzenie b jest fałszywe"}
      </div>
    </div>
  );
};

export default Ternary;
