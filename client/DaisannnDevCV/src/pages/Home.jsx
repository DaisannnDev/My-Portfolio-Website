import { motion } from "framer-motion";

const logoTransition = {
  opacity: { duration: 1, ease: "easeOut" },
  y: { duration: 1, ease: "easeOut" },
  backgroundPosition: { duration: 5, repeat: Infinity, ease: "linear" },
  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
};

export default function Home() {
  return (
    <section className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center gap-8 px-6 text-center">
      <motion.h1
        className="bg-clip-text text-5xl uppercase tracking-[0.28em] text-transparent md:text-7xl"
        style={{
          backgroundImage: "linear-gradient(90deg, #ef4444, #a855f7, #38bdf8)",
          backgroundSize: "200% 200%",
          fontFamily: "'Zen Dots', sans-serif",
          textShadow: "0 0 12px rgba(255,0,128,0.4)",
        }}
        initial={{ opacity: 0, y: -20, backgroundPosition: "0% 50%" }}
        animate={{
          opacity: 1,
          y: 0,
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          scale: [1, 1.05, 1],
        }}
        transition={logoTransition}
      >
        DAISANNNDEV
      </motion.h1>

      <motion.p
        className="max-w-2xl text-sm text-brand-muted md:text-base"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        Creative developer blending frontend finesse, backend resilience, and cybersecurity awareness to build rhythmic,
        immersive digital experiences.
      </motion.p>

      <motion.div
        className="flex flex-col gap-4 sm:flex-row"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <a
          href="/rhythmdesk"
          className="rounded-full bg-gradient-to-r from-brand-accent via-purple-500 to-brand-blue px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_18px_40px_-20px_rgba(59,130,246,0.55)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(244,63,94,0.45)]"
        >
          Explore Projects
        </a>
        <a
          href="/Resume"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-muted transition hover:-translate-y-1 hover:text-white hover:border-white/40"
        >
          View Resume
        </a>
      </motion.div>
    </section>
  );
}
