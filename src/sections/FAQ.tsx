import { useState } from "react";

const questions = [
  {
    question: "What is NOVA?",
    answer:
      "NOVA is an AI-powered productivity platform that brings project management, collaboration, automation and insights into one workspace.",
  },
  {
    question: "Can I try NOVA for free?",
    answer:
      "Yes. NOVA's Starter plan is free, and Growth includes a free trial so you can explore the full experience before upgrading.",
  },
  {
    question: "How does NOVA AI work?",
    answer:
      "NOVA analyzes your workflows and activity to automate repetitive tasks, surface priorities and provide useful recommendations.",
  },
  {
    question: "Can NOVA integrate with my existing tools?",
    answer:
      "Yes. NOVA is designed to connect with the tools your team already uses, helping you bring your workflow into one intelligent workspace.",
  },
  {
    question: "Is NOVA suitable for large teams?",
    answer:
      "Absolutely. NOVA is designed to scale from individuals and startups to large organizations with advanced controls and analytics.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-heading">
          <span className="section-label">FREQUENTLY ASKED QUESTIONS</span>
          <h2>
            Questions?
            <br />
            <span>We've got answers.</span>
          </h2>
          <p>
            Everything you need to know about NOVA and how it can help your
            team work smarter.
          </p>
        </div>

        <div className="faq-list">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div className={`faq-item ${isOpen ? "open" : ""}`} key={item.question}>
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                </button>

                {isOpen && <p className="faq-answer">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}