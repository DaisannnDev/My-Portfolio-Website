import { motion } from "framer-motion";

const timeline = [
  { year: "2024", text: "Strengthened React, CSS, JavaScript fundamentals" },
  { year: "2025", text: "Building RhythmDesk and deepening backend systems" },
  { year: "Next", text: "Pursuing full-stack and cyber security excellence" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <section className="container space-y-8 py-24">
      <div>
        <p className="text-sm uppercase tracking-[0.4em] text-brand-accent">Timeline</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">Experience</h2>
      </div>
      <div className="relative pl-8">
        <span className="absolute left-3 top-0 h-full w-[2px] bg-gradient-to-b from-brand-blue/60 via-white/20 to-brand-accent/60" />
        <ul className="list-none space-y-8 pl-2">
          {timeline.map((entry, index) => (
            <motion.li
              key={entry.year}
              className="relative font-mono text-gray-100 leading-relaxed"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeInOut" }}
            >
              <span className="absolute left-[3px] mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-brand-accent to-brand-blue shadow-[0_0_20px_rgba(59,130,246,0.4)]" />
              <p className="pl-6 text-xs uppercase tracking-[0.3em] text-brand-accent">{entry.year}</p>
              <p className="mt-1 pl-6 text-base text-brand-foreground">{entry.text}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
