import Reveal from "./Reveal";
import { contactCards } from "../data/siteContent";

function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-block rounded-full bg-teal-100 px-4 py-1 text-xs font-semibold text-teal-700">
            CONTACT
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Let’s start a conversation
          </h2>

          <p className="mt-3 text-slate-600">
            Ready to hire, train candidates, or build your next digital initiative?
          </p>
        </Reveal>

        {/* GRID */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* GOOGLE MAP */}
          <Reveal className="overflow-hidden rounded-xl border border-slate-200 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.9703492210538!2d73.81079827702487!3d18.485002225423866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfde63ac2c77%3A0x775a98b1997608a6!2sPentagon%20Tower%2C%20Karvenagar%2C%20Pune%2C%20Maharashtra%20411052!5e0!3m2!1sen!2sin!4v1773487779431!5m2!1sen!2sin"
              className="h-full min-h-[420px] w-full"
              style={{ border: 0 }}
              loading="lazy"
            />
          </Reveal>

          {/* FORM */}
          <Reveal delay={100}>
            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-lg">

              <form
                className="space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Name
                    </label>

                    <input
                      type="text"
                      placeholder="Your name"
                      className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="name@company.com"
                      className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Company
                    </label>

                    <input
                      type="text"
                      placeholder="Company or institute"
                      className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Service Interest
                    </label>

                    <input
                      type="text"
                      placeholder="Hiring, AI services, training..."
                      className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Message
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Tell us what you need..."
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-teal-600 py-3 font-semibold text-white hover:bg-teal-700"
                >
                  Send Message
                </button>

              </form>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;