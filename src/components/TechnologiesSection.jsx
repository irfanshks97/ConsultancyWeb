import Reveal from "./Reveal";
import { technologies } from "../data/siteContent";

const icons = {
  cpu: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M8 12h8" />
    </svg>
  ),
  sparkles: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l1.2 3.6L17 7l-3.8 1.4L12 12l-1.2-3.6L7 7l3.8-1.4L12 2Z" />
      <path d="M19 11l.8 2.4L22 14l-2.2.6L19 17l-.8-2.4L16 14l2.2-.6L19 11Z" />
    </svg>
  ),
  activity: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h4l2-6 4 12 2-6h6" />
    </svg>
  ),
  eye: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  code: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 18 22 12 16 6" />
      <path d="M8 6 2 12l6 6" />
    </svg>
  ),
  layers: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 3 7l9 5 9-5-9-5Z" />
      <path d="M3 12l9 5 9-5" />
    </svg>
  ),
  terminal: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 17V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
      <path d="m8 9 3 3-3 3" />
      <path d="M12 15h4" />
    </svg>
  ),
  cloud: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 17.5a4.5 4.5 0 0 0-1-8.9 6 6 0 0 0-11.7 1.7A4 4 0 0 0 6 18h12a2 2 0 0 0 2-2Z" />
    </svg>
  ),
};

const iconForTech = (tech) => {
  if (tech.includes("Cloud")) return icons.cloud;
  if (tech.includes("Computer Vision")) return icons.eye;
  if (tech.includes("Generative")) return icons.sparkles;
  if (tech.includes("Machine Learning")) return icons.activity;
  if (tech.includes("React")) return icons.layers;
  if (tech.includes("Python")) return icons.terminal;
  if (tech.includes("Java")) return icons.code;
  if (tech.includes("Artificial Intelligence")) return icons.cpu;
  return icons.sparkles;
};

function TechnologiesSection() {
  return (
    <section id="technologies" className="bg-[#ecfdf5] py-20 flex justify-center">
      <div className="container px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-teal-100 px-4 py-2">
            <span className="text-sm font-semibold text-teal-700">TECHNOLOGIES</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">Technologies we work with</h2>
          <p className="mt-6 text-xl text-slate-600">
            We match the right stack to your project needs—then train and support talent to deliver with confidence.
          </p>
        </Reveal>

        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <Reveal
              key={tech}
              delay={index * 45}
              y={12}
              className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-teal-500"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-white">
                {iconForTech(tech)}
              </span>
              <span>{tech}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnologiesSection;

