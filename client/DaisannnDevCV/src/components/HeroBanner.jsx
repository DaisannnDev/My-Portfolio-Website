import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

export default function HeroBanner({ heading, subtitle, tagline }) {
  return (
    <motion.section
      className="relative overflow-hidden rounded-3xl bg-transparent px-8 py-16"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute -right-16 -top-32 h-72 w-72 rounded-full bg-gradient-to-br from-brand-accent/30 to-brand-blue/20 blur-[110px]" />
      <div className="absolute left-10 bottom-0 h-40 w-40 rounded-full bg-brand-blue/15 blur-[100px]" />

      <motion.p variants={item} className="text-sm uppercase tracking-[0.4em] text-brand-accent">
        Where focus meets rhythm
      </motion.p>
      <motion.h1
        variants={item}
        className="mt-4 text-balance text-4xl font-semibold leading-tight text-white md:text-6xl"
      >
        {heading}
      </motion.h1>
      {subtitle && (
        <motion.p variants={item} className="mt-4 max-w-2xl text-lg text-brand-muted">
          {subtitle}
        </motion.p>
      )}
      {tagline && (
        <motion.span
          variants={item}
          className="mt-6 inline-flex items-center text-sm uppercase tracking-[0.35em] text-brand-muted/80"
        >
          {tagline}
        </motion.span>
      )}
    </motion.section>
  );
}
