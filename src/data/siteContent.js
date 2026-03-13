export const companyInfo = {
  name: "GAAW IT",
  tagline: "AI and Job Consultancy",
  email: "info@gaawit.com",
  website: "https://www.gaawit.com",
  websiteLabel: "www.gaawit.com",
  location: "India",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export const heroHighlights = [
  "AI and data operations",
  "Software and mobile delivery",
  "Candidate hiring and career support",
];

export const services = [
  {
    title: "Generative AI Services",
    description:
      "Prompt and response generation, LLM evaluation, RAG support, chatbot delivery, and AI model improvement workflows.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    tag: "AI",
  },
  {
    title: "Data Annotation and Computer Vision",
    description:
      "Image, video, text, NLP, and 3D data services for machine learning pipelines, model accuracy, and real-world AI projects.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    tag: "DATA",
  },
  {
    title: "Software Development",
    description:
      "Web applications, enterprise systems, API integration, cloud-enabled platforms, and scalable engineering support.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    tag: "BUILD",
  },
  {
    title: "Android App Development",
    description:
      "Mobile-first product experiences with Android development, backend connectivity, testing, and maintenance.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    tag: "MOBILE",
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, social media campaigns, lead generation, brand promotion, and growth support for business visibility.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tag: "GROWTH",
  },
  {
    title: "Job Consultancy and Career Support",
    description:
      "Resume building, LinkedIn optimization, interview preparation, candidate screening, and deployment support.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    tag: "HIRING",
  },
];

export const aboutPoints = [
  "AI, data, software, and hiring support aligned under one consultancy model.",
  "Practical training pathways for tech and non-tech candidates entering digital roles.",
  "Project-ready support across annotation, engineering, mobile, and business growth services.",
  "A stronger employment mission focused on creating opportunity through technology and skill development.",
];

export const stats = [
  { value: "08+", label: "core service pillars" },
  { value: "07", label: "industry-focused solution areas" },
  { value: "03", label: "training and readiness tracks" },
  { value: "02", label: "clear pathways for employers and candidates" },
];

export const expertiseAreas = [
  {
    title: "AI Delivery Unit",
    subtitle: "Applied AI and LLM workflows",
    description:
      "Focused on Generative AI services, evaluation pipelines, prompt operations, reasoning workflows, and chatbot enablement.",
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Data Operations Team",
    subtitle: "Annotation and model-readiness support",
    description:
      "Handles text, image, video, NLP, audio, and computer vision labeling with quality-oriented execution.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Engineering Studio",
    subtitle: "Web, APIs, and application builds",
    description:
      "Supports web development, mobile applications, backend integration, software engineering, and maintenance.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Career Enablement Desk",
    subtitle: "Hiring and deployment guidance",
    description:
      "Works on training readiness, resume support, interview preparation, candidate matching, and job consultancy.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  },
];

export const outcomes = [
  {
    title: "Employer value",
    text: "Shorten the distance between role planning and project-ready talent with better screening clarity and aligned hiring support.",
  },
  {
    title: "Candidate value",
    text: "Turn training into momentum through profile building, mock interviews, project storytelling, and deployment-oriented preparation.",
  },
  {
    title: "Delivery value",
    text: "Combine AI services, engineering execution, data operations, and digital growth into a single coordinated consulting experience.",
  },
];

export const faqs = [
  {
    question: "What kind of roles or projects can GAAW IT support?",
    answer:
      "We support AI services, data annotation, computer vision operations, software development, web development, Android development, digital marketing, and job consultancy requirements.",
  },
  {
    question: "Do you work with both companies and job seekers?",
    answer:
      "Yes. GAAW IT is positioned to help employers hire or deploy relevant talent while also helping candidates become more interview-ready and placement-ready.",
  },
  {
    question: "What training areas do you currently cover?",
    answer:
      "Our current focus includes Generative AI fundamentals, AI data services, Java, Spring Boot, web development, API development, Android app development, UI and UX foundations, and career readiness support.",
  },
  {
    question: "Can you support ongoing delivery after the initial engagement?",
    answer:
      "Yes. We can continue with implementation support, maintenance, digital delivery, annotation operations, and workforce enablement depending on the engagement model.",
  },
  {
    question: "How should a client start working with GAAW IT?",
    answer:
      "The best first step is a short discovery conversation around hiring needs, service requirements, or candidate support goals so the right engagement path can be defined.",
  },
];

export const contactCards = [
  {
    title: "Email Us",
    description: "We typically respond within 24 hours",
    icon: "@",
    href: `mailto:${companyInfo.email}`,
    label: companyInfo.email,
  },
  {
    title: "Website",
    description: "Learn more about the business online",
    icon: "W",
    href: companyInfo.website,
    label: companyInfo.websiteLabel,
    external: true,
  },
  {
    title: "Location",
    description: "Primary business location",
    icon: "I",
    label: companyInfo.location,
  },
];

export const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Generative AI", href: "#services" },
    { name: "Software Development", href: "#services" },
    { name: "Job Consultancy", href: "#services" },
  ],
  resources: [
    { name: "FAQ", href: "#faq" },
    { name: "Training Tracks", href: "#about" },
    { name: "Hiring Journey", href: "#expertise" },
  ],
};

export const policyLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Cookie Policy", href: "#" },
];
