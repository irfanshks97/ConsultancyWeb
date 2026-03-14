import Reveal from "./Reveal";
import { trainingPrograms, trainingWorkflow } from "../data/siteContent";

function TrainingProgramsSection() {
  return (
    <section id="training" className="bg-white py-20 flex justify-center">
      <div className="container px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-teal-100 px-4 py-2">
            <span className="text-sm font-semibold text-teal-700">TRAINING PROGRAMS</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Training designed for real work, not just theory
          </h2>
          <p className="mt-6 text-xl text-slate-600">
            Our programs focus on hands-on practice, project readiness, and the skills that companies expect
            when they hire for AI, data operations, and software delivery roles.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {trainingPrograms.map((program, index) => (
            <Reveal
              key={program.title}
              as="article"
              delay={index * 85}
              y={20}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-xl"
            >
              <div className="h-44 overflow-hidden bg-slate-100">
                <img
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">{program.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{program.description}</p>

                <div className="mt-6 space-y-3">
                  {program.modules.map((module) => (
                    <div key={module} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-teal-600" />
                      <span className="text-sm text-slate-700">{module}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <Reveal className="mx-auto mb-10 max-w-3xl text-center">
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">How the program works</h3>
            <p className="mt-4 text-slate-600">
              A simple structure that keeps candidates consistent, confident, and deployment-ready.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trainingWorkflow.map((step, index) => (
              <Reveal
                key={step.title}
                as="article"
                delay={120 + index * 70}
                y={16}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 font-bold text-white">
                  {index + 1}
                </div>
                <h4 className="text-lg font-bold text-slate-900">{step.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrainingProgramsSection;

