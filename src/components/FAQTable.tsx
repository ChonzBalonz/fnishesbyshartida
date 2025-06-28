import React, { useState } from "react";
import "./FAQTable.css";

const FAQS = [
  {
    question: "What services do you offer?",
    answer:
      "We offer wood staining, painting, antique restoration, varnishing, sealing, damage repair, and custom finishes for all types of furniture.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects are completed within 1-2 weeks, depending on the complexity and current workload.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes, we offer free estimates. Contact us with details and photos for a quick quote.",
  },
  {
    question: "Can you match existing finishes?",
    answer:
      "Absolutely! We specialize in color and finish matching to ensure your new or restored piece fits perfectly with your decor.",
  },
  {
    question: "Is pickup and delivery available?",
    answer:
      "Yes, we offer convenient pickup and delivery services for your furniture.",
  },
];

const FAQTable: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-table-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <table className="faq-table">
        <tbody>
          {FAQS.map((faq, idx) => (
            <React.Fragment key={idx}>
              <tr
                className={`faq-question-row${
                  openIndex === idx ? " open" : ""
                }`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <td className="faq-question">
                  {faq.question}
                  <span
                    className={`faq-arrow${openIndex === idx ? " open" : ""}`}
                  >
                    ▼
                  </span>
                </td>
              </tr>
              <tr>
                <td className={`faq-answer${openIndex === idx ? " open" : ""}`}>
                  <div>{faq.answer}</div>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FAQTable;
