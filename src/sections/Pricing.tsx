
import { useState } from "react";
import Reveal from "../components/Reveal";

const plans = [
  {
    name: "Starter",
    description: "For individuals and small teams getting started.",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      "Up to 3 team members",
      "5 active projects",
      "Basic AI automation",
      "Task management",
    ],
    button: "Start for free",
  },
  {
    name: "Growth",
    description: "For growing teams that want to move faster.",
    monthlyPrice: 18,
    annualPrice: 14,
    features: [
      "Unlimited team members",
      "Unlimited projects",
      "Advanced AI automation",
      "Productivity analytics",
      "Workflow builder",
    ],
    button: "Start free trial",
    popular: true,
  },
  {
    name: "Scale",
    description: "For organizations that need advanced control.",
    monthlyPrice: 42,
    annualPrice: 34,
    features: [
      "Everything in Growth",
      "Advanced analytics",
      "Custom workflows",
      "Priority support",
      "Enterprise controls",
    ],
    button: "Talk to sales",
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="pricing-section" id="pricing">
      <div className="section-container">
        <div className="pricing-heading">
          <span className="section-label">SIMPLE, TRANSPARENT PRICING</span>

          <h2>
            Start free.
            <br />
            <span>Scale when you're ready.</span>
          </h2>

          <p>
            Choose the plan that fits your team today. Upgrade whenever you
            need more power.
          </p>

          <div className="billing-toggle">
            <button
              className={!annual ? "active" : ""}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>

            <button
              className={annual ? "active" : ""}
              onClick={() => setAnnual(true)}
            >
              Annual
              <span>Save 20%</span>
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => {
            const price = annual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <Reveal key={plan.name} delay={index * 120}>
                <div
                  className={`pricing-card ${
                    plan.popular ? "popular" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="popular-badge">MOST POPULAR</div>
                  )}

                  <h3>{plan.name}</h3>

                  <p className="pricing-description">
                    {plan.description}
                  </p>

                  <div className="price">
                    <strong>${price}</strong>
                    <span>
                      {price === 0
                        ? "forever"
                        : annual
                        ? "per user / month, billed annually"
                        : "per user / month"}
                    </span>
                  </div>

                  <a href="#cta" className="pricing-button">
                    {plan.button}
                  </a>

                  <div className="pricing-divider" />

                  <span className="included">INCLUDES:</span>

                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <span>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

