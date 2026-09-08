const testimonials = [
  {
    quote:
      "NOVA completely changed how our team works. We automated the repetitive tasks that used to consume hours every week.",
    name: "Maya Chen",
    role: "Head of Product, Lumen",
    initials: "MC",
  },
  {
    quote:
      "The best part is how simple everything feels. Our projects, conversations and insights are finally in one place.",
    name: "Daniel Brooks",
    role: "Founder, Orbit",
    initials: "DB",
  },
  {
    quote:
      "NOVA gives us the clarity we need to move quickly without losing track of priorities. It feels like having an extra teammate.",
    name: "Sofia Martinez",
    role: "Operations Lead, Vertex",
    initials: "SM",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="section-container">
        <div className="testimonials-heading">
          <span className="section-label">LOVED BY MODERN TEAMS</span>
          <h2>
            Don't just take
            <br />
            <span>our word for it.</span>
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.name}>
              <div className="quote-mark">“</div>

              <p className="testimonial-quote">{testimonial.quote}</p>

              <div className="testimonial-person">
                <div className="testimonial-avatar">{testimonial.initials}</div>

                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>

              <div className="stars">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}