import { motion } from "framer-motion";
import HeroBanner from "../components/HeroBanner";

const project = {
  name: "RhythmDesk",
  stack: ["React", "Framer Motion", "Node.js", "MongoDB"],
  description:
    "A productivity app that connects mood, focus sessions, and music — blending technology and emotion to help you work smarter, not harder.",
};

const pulse = {
  animate: {
    scale: [1, 1.08, 1],
    color: ["#f43f5e", "#38bdf8", "#f43f5e"],
    transition: { duration: 1.6, ease: "easeInOut", repeat: Infinity },
  },
};

export default function RhythmDesk() {
  return (
    <section className="container relative z-10 space-y-16 py-24">
      <motion.div
        className="pointer-events-none absolute right-12 top-24 h-80 w-80 rounded-full bg-gradient-to-br from-brand-accent/30 to-brand-blue/20 blur-[140px]"
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <HeroBanner
        heading="RhythmDesk"
        subtitle="The workspace that listens to your rhythm — blending focus, mood, and music into one flow."
        tagline="Where focus meets rhythm."
      />

      <motion.div
        className="space-y-6 rounded-3xl bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/20 to-transparent p-10 shadow-[inset_0_0_18px_rgba(56,189,248,0.18)] backdrop-blur-sm"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <p className="text-sm uppercase tracking-[0.4em] text-brand-accent">Product Overview</p>
        <p className="text-base leading-relaxed text-brand-muted">
          🎧 <strong>RhythmDesk</strong> keeps you in sync. It’s crafted for creators who blend structure with flow — a
          companion that tunes into your{" "}
          <motion.span {...pulse} className="font-semibold">
            focus
          </motion.span>
          ,{" "}
          <motion.span {...pulse} transition={{ ...pulse.animate.transition, delay: 0.4 }} className="font-semibold">
            mood
          </motion.span>
          , and{" "}
          <motion.span {...pulse} transition={{ ...pulse.animate.transition, delay: 0.8 }} className="font-semibold">
            music
          </motion.span>
          .
        </p>
        <p className="text-base leading-relaxed text-brand-muted">
          Track sessions, adjust playlists on the fly, and visualise how your emotional tempo drives productivity.
          RhythmDesk pairs intelligent mood logging with soundtrack curation so every deep work block has its own score.
        </p>
        <motion.blockquote
          className="rounded-2xl bg-gradient-to-r from-brand-accent/10 to-brand-blue/10 p-6 text-sm text-brand-muted"
          initial={{ opacity: 0.8 }}
        >
          “Where focus meets rhythm.” — the desk that harmonises your workflow.
        </motion.blockquote>
      </motion.div>

      <motion.article
        className="relative overflow-hidden rounded-[28px] bg-gradient-to-b from-[#0a0a0a]/85 via-[#0a0a0a]/30 to-transparent p-[1px] shadow-[inset_0_0_18px_rgba(244,63,94,0.12)] transition-transform duration-300 hover:-translate-y-2"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <div className="rounded-[26px] bg-[#0d0d0d]/90 p-10 backdrop-blur-sm">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-brand-accent">
            {project.stack.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <h3 className="mt-6 text-3xl font-semibold text-white">{project.name}</h3>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-brand-muted">{project.description}</p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white/[0.02] p-6 shadow-[0_12px_40px_-30px_rgba(59,130,246,0.6)]">
              <h4 className="text-sm uppercase tracking-[0.3em] text-brand-blue">Focus Engine</h4>
              <p className="mt-2 text-sm text-brand-muted">
                Adaptive sessions that align with your energy. Pair rituals, timers, and playlists to stay in a steady
                groove.
              </p>
            </div>
            <div className="rounded-2xl bg-white/[0.02] p-6 shadow-[0_12px_40px_-30px_rgba(244,63,94,0.6)]">
              <h4 className="text-sm uppercase tracking-[0.3em] text-brand-accent">Mood Intelligence</h4>
              <p className="mt-2 text-sm text-brand-muted">
                Log every session with mood annotations and review how your soundtrack influences deep work over time.
              </p>
            </div>
          </div>
        </div>
      </motion.article>
    </section>
  );
}
