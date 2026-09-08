export default function TrustedBy() {
  const companies = ["ORBIT", "LUMEN", "VERTEX", "PULSE", "NEXUS"];

  return (
    <section className="trusted">
      <p>TRUSTED BY TEAMS AT</p>

      <div className="company-list">
        {companies.map((company) => (
          <span key={company}>{company}</span>
        ))}
      </div>
    </section>
  );
}