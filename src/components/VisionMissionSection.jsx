import Reveal from "./Reveal";
import {
  FaBrain,
  FaDatabase,
  FaCode,
  FaLaptopCode,
  FaUsers,
  FaMapMarkedAlt,
  FaChalkboardTeacher,
  FaLightbulb,
  FaRocket,
  FaHandshake,
} from "react-icons/fa";

const missionFields = [
  { name: "Artificial Intelligence", icon: <FaBrain className="text-teal-600" /> },
  { name: "Data Annotation", icon: <FaDatabase className="text-teal-600" /> },
  { name: "Software Development", icon: <FaCode className="text-teal-600" /> },
  { name: "Digital Technologies", icon: <FaLaptopCode className="text-teal-600" /> },
];

const impactStats = [
  { value: "5,300+", label: "Rural youth trained", icon: <FaUsers className="text-teal-600 text-2xl mb-2" /> },
  { value: "48", label: "Partner districts", icon: <FaMapMarkedAlt className="text-teal-600 text-2xl mb-2" /> },
  { value: "120+", label: "Industry mentors", icon: <FaChalkboardTeacher className="text-teal-600 text-2xl mb-2" /> },
];

const pillarHighlights = [
  {
    title: "AI-powered labs",
    icon: <FaLightbulb className="text-teal-600 text-xl mb-2" />,
    detail: "Mobile labs bring hands-on AI projects to village learning centers.",
  },
  {
    title: "Ethical employment",
    icon: <FaHandshake className="text-teal-600 text-xl mb-2" />,
    detail: "Placement partners co-design meaningful roles with fair wages.",
  },
  {
    title: "Innovation sprints",
    icon: <FaRocket className="text-teal-600 text-xl mb-2" />,
    detail: "Quarterly challenges connect rural teams with startup mentors.",
  },
];

function VisionMissionSection() {
  return (
    <section id="mission" className="bg-[#f3fff7] py-20 text-black">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[1.2fr_1fr]">

          <Reveal className="space-y-6">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-teal-100 px-4 py-2">
              <span className="text-sm font-semibold text-teal-700">
                OUR MISSION & VISION
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
              Building a premium bridge from rural talent to the global digital economy
            </h2>

            <p className="text-lg text-black">
              We blend technology education, curated career coaching, and employer connections so rural youth can
              confidently solve complex challenges, create innovation, and share in sustainable growth.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {impactStats.map((stat) => (
                <Reveal
                  key={stat.label}
                  delay={stat.label.length * 3}
                  y={16}
                  className="rounded-2xl border bg-white shadow p-5 text-center"
                >
                  {stat.icon}
                  <div className="text-3xl font-semibold text-black">{stat.value}</div>
                  <div className="text-sm text-black">{stat.label}</div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-8">

            {/* Vision */}
            <Reveal
              as="article"
              className="rounded-3xl border bg-white shadow p-8 text-black shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-black flex items-center gap-2">
                <FaLightbulb className="text-teal-600" /> Our Vision
              </h3>

              <p className="mt-4 text-black">
                To create sustainable employment opportunities for the young generation in rural India by leveraging
                technology, innovation, and skill development, enabling them to participate in the global digital economy.
              </p>

              <p className="mt-6 text-sm uppercase tracking-widest text-black">
                Sustainability / Global Access / Innovation
              </p>
            </Reveal>

            {/* Mission */}
            <Reveal
              as="article"
              className="rounded-3xl border border-gray-50 bg-white shadow p-8 text-black shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-black flex items-center gap-2">
                <FaRocket className="text-teal-600" /> Our Mission
              </h3>

              <p className="mt-4 text-black">
                To empower rural youth by providing technology education, AI skill development, career guidance, and
                employment opportunities in fields such as:
              </p>

              <ul className="mt-4 space-y-3 text-sm text-black">
                {missionFields.map((field) => (
                  <li key={field.name} className="flex items-center gap-3">
                    {field.icon}
                    {field.name}
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-sm text-black">
                while promoting innovation, inclusive growth, and sustainable development.
              </p>
            </Reveal>

          </div>
        </div>

        {/* Pillars */}
        <Reveal delay={80} className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillarHighlights.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-3xl border border-gray-50 bg-white p-6 text-black shadow-lg"
            >
              {pillar.icon}
              <h4 className="text-lg font-semibold text-black">{pillar.title}</h4>
              <p className="mt-3 text-sm text-black">{pillar.detail}</p>
            </article>
          ))}
        </Reveal>

      </div>
    </section>
  );
}

export default VisionMissionSection;