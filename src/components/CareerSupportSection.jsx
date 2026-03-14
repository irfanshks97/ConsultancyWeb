import Reveal from "./Reveal";
import { careerDevelopmentSupport, deploymentRoles } from "../data/siteContent";

function CareerSupportSection() {
  return (
    <section id="career" className="bg-slate-50 py-20 flex justify-center">
      <div className="container px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-teal-100 px-4 py-2">
            <span className="text-sm font-semibold text-teal-700">JOB DEPLOYMENT & CAREER SUPPORT</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Support that helps candidates move from training to industry roles
          </h2>
          <p className="mt-6 text-xl text-slate-600">
            GaawIT helps trained candidates prepare for interviews and get connected with companies looking for
            AI, data operations, and software delivery talent.
          </p>
        </Reveal>


        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {careerDevelopmentSupport.map((group, index) => (
            <Reveal
              key={group.title}
              as="article"
              delay={140 + index * 75}
              y={16}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg"
            >
              <h4 className="text-lg font-bold text-slate-900">{group.title}</h4>
              <div className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-teal-600" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerSupportSection;

