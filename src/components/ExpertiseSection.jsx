import Reveal from "./Reveal";
import { expertiseAreas } from "../data/siteContent";

function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-slate-50 py-20 flex justify-center">
      <div className="container px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-teal-100 px-4 py-2">
            <span className="text-sm font-semibold text-teal-700">OUR EXPERTISE</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Specialist teams across AI, engineering, data operations, and career enablement
          </h2>
          <p className="mt-6 text-xl text-slate-600">
            Instead of using fake team members, this version presents the capabilities behind the
            company in a more credible way.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {expertiseAreas.map((area, index) => (
            <Reveal
              key={area.title}
              as="article"
              delay={index * 85}
              y={20}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden bg-slate-100">
                <img
                  src={area.image}
                  alt={area.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-teal-600">
                  {area.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-teal-600">{area.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{area.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExpertiseSection;
