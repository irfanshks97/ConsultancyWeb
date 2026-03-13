import Reveal from "./Reveal";
import { services } from "../data/siteContent";

function ServicesSection() {
  return (
    <section id="services" className="bg-slate-50 py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-teal-100 px-4 py-2">
            <span className="text-sm font-semibold text-teal-700">OUR SERVICES</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Consultancy solutions built for hiring, delivery, and growth
          </h2>
          <p className="mt-6 text-xl text-slate-600">
            This structure follows the reference layout you shared, but the content is adapted
            to GAAW IT and your job consultancy plus technology services model.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              as="article"
              delay={index * 80}
              y={20}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow transition-all duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 px-3 py-2 text-xs font-bold tracking-[0.18em] text-white">
                  {service.tag}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 transition-colors group-hover:text-teal-600">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
