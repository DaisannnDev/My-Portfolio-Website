import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    id: "programming",
    label: "Programming",
    blurb: "Languages I use to craft experiences and solve problems.",
    items: [
      { name: "Python", detail: "Automation, scripting, data wrangling" },
      { name: "HTML / CSS", detail: "Semantic layouts, responsive UI" },
      { name: "JavaScript", detail: "React, interactivity, tooling" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Databases",
    blurb: "Platforms and storage engines I reach for in builds.",
    items: [
      { name: "PostgreSQL", detail: "Structured data, relational modelling" },
      { name: "MySQL", detail: "Relational data modelling & queries" },
      { name: "MongoDB", detail: "Document schemas, Mongoose ODM" },
    ],
  },
  {
    id: "other",
    label: "Others",
    blurb: "Core strengths that support collaboration and delivery.",
    items: [
      { name: "Problem Solving", detail: "Analytical thinking, debugging" },
      { name: "English Proficiency", detail: "Communication & documentation" },
      { name: "Communication", detail: "Teamwork, alignment, clarity" },
      { name: "Fast Learning", detail: "Adapting to new tech efficiently" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  const [active, setActive] = useState("programming");
  const activeCategory = categories.find((category) => category.id === active) ?? categories[0];

  return (
    <motion.section
      className="section-shell"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-brand-accent">Capabilities</p>
          <h2 className="mt-2 text-4xl font-semibold glow-text">Skills Snapshot</h2>
          <p className="mt-3 max-w-2xl text-sm text-brand-muted">
          </p>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          {categories.map((category) => {
            const isActive = category.id === activeCategory.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActive(category.id)}
                className={`flex-1 rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.4em] transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-brand-accent/40 via-purple-500/30 to-brand-blue/30 text-white shadow-[0_12px_35px_-20px_rgba(59,130,246,0.6)]"
                    : "bg-[#111111]/70 text-brand-muted hover:text-white hover:bg-[#151515]"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <p className="text-sm text-brand-muted">{activeCategory.blurb}</p>

        <div className="grid gap-5 md:grid-cols-2">
          {activeCategory.items.map((item) => (
            <article
              key={item.name}
              className="flex transform flex-col gap-3 rounded-xl bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] p-6 shadow-[0_0_20px_rgba(244,63,94,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)]"
            >
              <span className="text-xs uppercase tracking-[0.35em] text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-400 to-blue-400">
                {activeCategory.label}
              </span>
              <h3 className="text-2xl font-semibold text-white">{item.name}</h3>
              <p className="text-sm text-brand-muted">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
