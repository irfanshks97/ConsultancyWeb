import Reveal from "./Reveal";
import { contactCards } from "../data/siteContent";

function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50 py-20 flex justify-center">
      <div className="container px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-teal-100 px-4 py-2">
            <span className="text-sm font-semibold text-teal-700">CONTACT US</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Let&apos;s start a conversation
          </h2>
          <p className="mt-6 text-xl text-slate-600">
            Ready to hire, train candidates, or build your next digital initiative? Use the form
            or contact details below.
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            {contactCards.map((card, index) => (
              <Reveal
                key={card.title}
                delay={index * 75}
                y={18}
                className="rounded-xl border border-slate-200 bg-white shadow transition-shadow hover:shadow-lg"
              >
                <div className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 text-xl text-white">
                    {card.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">{card.title}</h3>
                  <p className="mb-3 text-sm text-slate-600">{card.description}</p>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.external ? "_blank" : undefined}
                      rel={card.external ? "noreferrer" : undefined}
                      className="font-medium text-teal-600 hover:text-teal-700"
                    >
                      {card.label}
                    </a>
                  ) : (
                    <p className="font-medium text-slate-700">{card.label}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} x={16} y={20} className="lg:col-span-2">
            <div className="rounded-xl border border-slate-200 bg-white shadow-lg">
              <div className="p-8">
                <form className="space-y-6" onSubmit={(event) => event.preventDefault()}>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="h-11 w-full rounded-md border border-slate-300 px-3 text-sm shadow-sm transition-colors focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="name@company.com"
                        className="h-11 w-full rounded-md border border-slate-300 px-3 text-sm shadow-sm transition-colors focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-700">
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Company or institute"
                        className="h-11 w-full rounded-md border border-slate-300 px-3 text-sm shadow-sm transition-colors focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="mb-2 block text-sm font-medium text-slate-700">
                        Service interest
                      </label>
                      <input
                        id="service"
                        type="text"
                        placeholder="Hiring, AI services, training, software..."
                        className="h-11 w-full rounded-md border border-slate-300 px-3 text-sm shadow-sm transition-colors focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows="6"
                      placeholder="Tell us what you need and we will help shape the right path."
                      className="w-full rounded-md border border-slate-300 px-3 py-3 text-sm shadow-sm transition-colors focus:border-teal-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-teal-600 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
