import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section className="container relative z-10 py-24">
      <motion.div
        className="mx-auto max-w-4xl space-y-10 rounded-3xl bg-white/[0.03] p-10 shadow-[0_24px_90px_-60px_rgba(59,130,246,0.4)] backdrop-blur"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-[0.45em] text-brand-accent">About</p>
          <h1 className="text-3xl font-semibold text-white">Meet Daisannn</h1>
          <p className="text-base text-brand-muted">
            I’m Daisannn — a creative technologist, front-end developer, and product thinker from Thailand who blends code, design, and rhythm into meaningful digital experiences. 
            I’m currently studying at Bangkok University International, majoring in Marketing, where I explore how storytelling, branding, and digital experience shape human connection.

            
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            className="space-y-4"
            variants={sectionVariants}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
          >
            <h2 className="text-lg font-semibold text-white">Journey</h2>
            <p className="text-sm leading-relaxed text-brand-muted">
             My journey started with a mix between art, music, marketing, and technology.
             At Bangkok University International, I study Marketing, but I’ve always been drawn to the creative side of things storytelling, brand emotion, and how design can make people feel something real.

            Somewhere along the way, I found coding 
            I started teaching myself HTML, CSS, React, and Node.js, just to turn my ideas into something I could actually touch. 

            Now, I’m blending what I’ve learned from marketing insight and creative tech to build things that connect with people — products that don’t just look nice, but feel alive, warm, and human.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={sectionVariants}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
          >
            <h2 className="text-lg font-semibold text-white">Values</h2>
            <p className="text-sm leading-relaxed text-brand-muted">
             I believe in clarity, empathy, and rhythm  not just in my work, but in life.
            To me, every project starts with understanding people: what makes them smile, what inspires them, and what they need in that moment.
            Music and rhythm are a big part of how I think.
            When I build or design, I think in beats, flow, and harmony. It helps me keep things balanced logic and emotion, code and color, story and sound.

            In the end, I just want to create digital experiences that make life feel a little more meaningful whether that’s through a brand, a song, or a small moment on a screen. 
            </p>
          </motion.div>
        </div>

  
      </motion.div>
    </section>
  );
}
