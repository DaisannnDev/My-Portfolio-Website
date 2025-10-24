import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const sections = [
  {
    title: "Education",
    content: [
      {
        heading: "Seangthong Vitthaya School — Hat-Yai, Thailand",
        detail: "High School • GPA 3.34 • Graduated Mar 2023",
      },
      {
        heading: "Bangkok University — PathumThani, Thailand",
        detail: "Bachelor of Business Administration in Marketing Major • Sept 2027 (expected)",
      },
    ],
  },
  {
    title: "Skills",
    content: [
      {
        heading: "Languages",
        detail: "JavaScript, TypeScript, Python, HTML, CSS",
      },
      {
        heading: "Tools & Platforms",
        detail: "React, Vite, Framer Motion, Node.js, Express, MongoDB, PostgreSQL, Git",
      },
      {
        heading: "Focus Areas",
        detail: "Frontend engineering, backend APIs, cybersecurity fundamentals, UI motion design",
      },
    ],
  },
  {
    title: "Experience",
    content: [
      {
        heading: "RhythmDesk — Creative Developer & Product Designer",
        detail:
          "Designed and developed a productivity companion that syncs focus sessions, mood tracking, and music recommendations. Led UX research, built the React + Framer Motion interface, and implemented a secure Express/MongoDB backend.",
      },
      {
        heading: "Freelance & Self-Initiated Projects",
        detail:
          "Crafted portfolio sites, interactive landing pages, and REST APIs with attention to accessibility, security, and motion design.",
      },
    ],
  },
];

export default function Resume() {
  return (
    <section className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-6 py-20 text-center">
      <motion.header
        className="mx-auto max-w-3xl space-y-4"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-sm uppercase tracking-[0.6em] text-brand-accent">Curriculum Vitae</h1>
        <p className="text-base text-brand-muted">
          My professional experience, education, and skills in detail.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/resume.pdf"
            download
            className="rounded-full bg-gradient-to-r from-brand-accent via-purple-500 to-brand-blue px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-[0_12px_30px_-18px_rgba(244,63,94,0.55)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(56,189,248,0.4)]"
          >
            ⬇️ Download CV
          </a>
         
        </div>
      </motion.header>

      <motion.article
        className="mx-auto mt-10 w-full max-w-3xl rounded-xl bg-neutral-50 px-8 py-10 text-left text-gray-900 shadow-xl"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <div className="space-y-1 text-center">
          <h2 className="text-2xl font-bold tracking-wide">Jarkaphan Phruekchayanan</h2>
          <p className="text-sm text-gray-600">
            <a href="mailto:xellotte@gmail.com" className="hover:underline">
             xellotte@gmail.com
            </a>{" "}
            • <a href="tel:+66807848856">(+66) 80-784-8856</a> •{" "}
            <a href="https://github.com/DaisannnDev" target="_blank" rel="noreferrer" className="hover:underline">
              github.com/DaisannnDev
            </a>
          </p>
        </div>

        <div className="mt-8 space-y-8 divide-y divide-gray-300">
          {sections.map((section) => (
            <section key={section.title} className="pt-8 first:pt-0">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
                {section.title}
              </h2>
              <div className="space-y-4 text-sm leading-relaxed">
                {section.content.map((item, index) => (
                  <div key={`${section.title}-${index}`} className="space-y-1">
                    <p className="font-semibold text-gray-900">{item.heading}</p>
                    <p className="text-gray-700">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </motion.article>
    </section>
  );
}
