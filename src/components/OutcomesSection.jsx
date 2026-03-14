import { useState } from "react";

import Reveal from "./Reveal";
import { outcomes, stats } from "../data/siteContent";

function OutcomesSection() {
  const [activeOutcome, setActiveOutcome] = useState(0);

  const nextOutcome = () => {
    setActiveOutcome((current) => (current + 1) % outcomes.length);
  };

  const previousOutcome = () => {
    setActiveOutcome((current) => (current - 1 + outcomes.length) % outcomes.length);
  };

  return (
    <section className="bg-slate-50 py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-teal-100 px-4 py-2">
            <span className="text-sm font-semibold text-teal-700">ENGAGEMENT OUTCOMES</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            What this business model helps employers and candidates achieve
          </h2>
          <p className="mt-6 text-xl text-slate-600">
            This section takes the place of a generic testimonial carousel and keeps the same
            polished presentation style from your reference site.
          </p>
        </Reveal>

        <Reveal delay={90} y={20} className="relative mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
            <div className="p-12 md:p-16">
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 text-3xl font-bold text-white">
                "
              </div>

              <div className="mb-8 text-center">
                <p className="text-2xl font-light italic leading-relaxed text-slate-700 md:text-3xl">
                  {outcomes[activeOutcome].text}
                </p>
              </div>

              <div className="text-center">
                <p className="text-xl font-bold text-slate-900">{outcomes[activeOutcome].title}</p>
                <p className="mt-2 text-teal-600">GaawIT engagement focus</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-4">
            <button
              type="button"
              onClick={previousOutcome}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-200 bg-white shadow-md transition-all duration-300 hover:border-teal-600 hover:bg-teal-600 hover:text-white"
            >
              {"<"}
            </button>
            <div className="flex space-x-2">
              {outcomes.map((item, index) => (
                <button
                  type="button"
                  key={item.title}
                  onClick={() => setActiveOutcome(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    activeOutcome === index ? "w-8 bg-teal-600" : "w-3 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={nextOutcome}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-200 bg-white shadow-md transition-all duration-300 hover:border-teal-600 hover:bg-teal-600 hover:text-white"
            >
              {">"}
            </button>
          </div>
        </Reveal>

        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={160 + index * 75} y={16} className="text-center">
              <div className="mb-2 text-4xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-slate-600">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OutcomesSection;
