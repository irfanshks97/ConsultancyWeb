import Reveal from "./Reveal";
import { aboutPoints, stats } from "../data/siteContent";

function AboutSection() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal y={20} className="">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-teal-100 px-4 py-2">
              <span className="text-sm font-semibold text-teal-700">ABOUT US</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              A consultancy model that connects technology services with real employment support
            </h2>
            <p className="mb-6 mt-6 text-lg leading-relaxed text-slate-600">
              GAAW IT combines Generative AI, data annotation, computer vision, software
              development, Android app delivery, digital marketing, training, and job
              consultancy into one more complete business offering.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              The goal is not just to build systems. It is also to create a stronger pathway for
              businesses that need talent and candidates who need training, preparation, and
              career opportunities.
            </p>

            <div className="space-y-4">
              {aboutPoints.map((point, index) => (
                <Reveal key={point} delay={120 + index * 70} y={14} className="flex items-start space-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100">
                    <div className="h-2 w-2 rounded-full bg-teal-600" />
                  </div>
                  <span className="text-lg text-slate-700">{point}</span>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={140} x={18} y={20} className="">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Consultancy collaboration"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-0 right-8 rounded-xl border border-slate-100 bg-white p-8 shadow-xl sm:-left-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <Reveal key={stat.label} delay={220 + index * 70} y={12} className="text-center">
                      <div className="mb-2 text-3xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
