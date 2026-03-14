import Reveal from "./Reveal";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {


  const goToAbout = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToServices = () => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#101a34]"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("/assests/images/hero.png")',
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(7,18,44,0.96) 0%, rgba(10,25,54,0.92) 32%, rgba(23,35,60,0.76) 68%, rgba(73,81,98,0.56) 100%)",
          }}
        />
      </div>

      <div className="container mx-auto md:mx-8 relative z-10 px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">

          <Reveal delay={140} y={18} className="mt-8">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-6xl">
              Empowering the Future with AI
              <span className="mt-2 block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                <TypeAnimation
                  sequence={[
                    "Technology & Innovation",
                    2000,
                    "Artificial Intelligence",
                    2000,
                    "Digital Transformation",
                    2000,
                    "Future Technologies",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={230} y={18} className="max-w-2xl">
            <p className="mb-10 text-xl leading-relaxed text-white">
              GaawIT (Generative AI & Advanced Web Information Technology) is a
              technology-driven company delivering advanced solutions in
              Artificial Intelligence, Data Annotation, Software Development,
              and Digital Innovation.
            </p>
          </Reveal>

          <Reveal
            delay={320}
            y={18}
            className="mb-10 flex flex-col space-y-3 text-white sm:flex-row sm:items-center sm:space-x-6 sm:space-y-0"
          >
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-teal-400"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <span className="font-medium text-slate-100">
                2+ Years Experience
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-teal-400"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <span className="font-medium text-slate-100">
                Proven Results
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-teal-400"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <span className="font-medium text-slate-100">
                Global Reach
              </span>
            </div>
          </Reveal>

          <Reveal
            delay={410}
            y={16}
            className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <button
              onClick={goToAbout}
              className="group inline-flex h-10 items-center justify-center gap-2 rounded-md bg-teal-600 px-8 py-6 text-lg font-medium text-white shadow transition-colors hover:bg-teal-700">
              Get Started
            </button>

            <button
              onClick={goToServices}
              className="inline-flex h-10 items-center justify-center rounded-md border-2 border-white/30 px-8 py-6 text-lg font-medium text-white shadow-sm backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              Our Services
            </button>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;