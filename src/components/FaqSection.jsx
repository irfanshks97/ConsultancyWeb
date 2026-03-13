import { useState } from "react";

import Reveal from "./Reveal";
import { faqs } from "../data/siteContent";

function FaqSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="faq" className="bg-slate-50 py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <Reveal y={20} className="lg:sticky lg:top-32">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-teal-100 px-4 py-2">
              <span className="text-sm font-semibold text-teal-700">FAQ</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Frequently asked questions
            </h2>
            <p className="mb-8 mt-6 text-xl leading-relaxed text-slate-600">
              These answers are adapted for your consultancy, hiring, training, and delivery
              model so the site feels more complete like the reference you shared.
            </p>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-slate-900">Still have questions?</h3>
              <p className="mb-6 text-slate-600">
                Reach out and we can discuss services, hiring support, candidate placement, or
                training requirements.
              </p>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-lg bg-teal-600 px-6 py-3 font-medium text-white transition-colors hover:bg-teal-700"
              >
                Contact Us
              </a>
            </div>
          </Reveal>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <Reveal
                  key={faq.question}
                  delay={index * 75}
                  y={18}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors hover:border-teal-500"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between px-6 py-6 text-left text-lg font-semibold text-slate-900 transition-colors hover:text-teal-600"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className={`text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}>
                      v
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm leading-relaxed text-slate-600">
                      {faq.answer}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
