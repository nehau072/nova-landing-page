
import { useEffect, useRef, useState } from "react";
import Reveal from "../components/Reveal";

const stats = [
  {
    value: 10000,
    suffix: "K+",
    label: "Teams growing with NOVA",
  },
  {
    value: 2.4,
    suffix: "M+",
    label: "Tasks automated",
    decimal: true,
  },
  {
    value: 38,
    suffix: "%",
    label: "Average productivity boost",
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Platform uptime",
    decimal: true,
  },
];

function AnimatedNumber({
  value,
  suffix,
  decimal = false,
}: {
  value: number;
  suffix: string;
  decimal?: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    let animationFrame: number;
    let startTime: number | null = null;

    const duration = 1600;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(value * easedProgress);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animationFrame = requestAnimationFrame(animate);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {decimal ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <Reveal>
          <div className="stats-heading">
            <span className="section-label">NOVA BY THE NUMBERS</span>
            <h2>
              Built for teams
              <br />
              <span>that move fast.</span>
            </h2>
          </div>
        </Reveal>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 120}>
              <div className="stat-card">
                <strong>
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    decimal={stat.decimal}
                  />
                </strong>
                <p>{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

