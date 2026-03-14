import Reveal from "./Reveal";
import { whyChooseUs } from "../data/siteContent";

const icons = {
  layers: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 3 7l9 5 9-5-9-5Z" />
      <path d="M3 12l9 5 9-5" />
      <path d="M3 17l9 5 9-5" />
    </svg>
  ),
  shield: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 20 6v6c0 5-3.5 9.4-8 10-4.5-.6-8-5-8-10V6l8-4Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  rocket: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
    </svg>
  ),
  users: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  shuffle: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 3h5v5" />
      <path d="M4 20l16-16" />
      <path d="M20 16v5h-5" />
      <path d="M15 15l5 5" />
      <path d="M4 4l5 5" />
    </svg>
  ),
  chat: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
      <path d="M8 10h8" />
      <path d="M8 14h6" />
    </svg>
  ),
};

function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      className="bg-slate-50 py-20 flex justify-center"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-teal-100 px-4 py-2">
            <span className="text-sm font-semibold text-teal-700">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            A partner built for delivery, quality, and career outcomes
          </h2>
          <p className="mt-6 text-xl text-slate-600">
            We combine AI services, engineering execution, data operations, and job consultancy so your
            engagement stays aligned from planning to results.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((reason, index) => (
            <Reveal
              key={reason.title}
              as="article"
              delay={index * 80}
              y={20}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white">
                {icons[reason.icon]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-teal-600">
                {reason.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{reason.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
