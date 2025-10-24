import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const contactDetails = [
    { label: "Email", value: "xellotte@gmail.com", href: "mailto:xellotte@gmail.com" },
    { label: "Phone", value: "+66 80-784-8856", href: "tel:+66807848856" },
    { label: "Location", value: "Bangkok, Thailand" },
    {
      label: "GitHub",
      value: "github.com/DaisannnDev",
      href: "https://github.com/DaisannnDev",
    },
    {
      label: "Instagram",
      value: "@daisannnnnn",
      href: "https://instagram.com/daisannnnnn",
    },
  ];

  return (
    <section className="container relative z-10 py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <motion.div
          className="space-y-4 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-[0.4em] text-brand-accent">Contact</p>
          <h2 className="text-3xl font-semibold text-white">Let’s collaborate</h2>
          <p className="text-sm text-brand-muted">
            Drop a message or reach out directly. I typically respond within a day.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-12 md:grid-cols-2 md:items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.15, ease: "easeInOut" }}
        >
          <div className="space-y-5 text-left">
            {contactDetails.map((item) => (
              <div key={item.label} className="space-y-1">
                <p className="text-xs uppercase tracking-[0.4em] text-brand-accent">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="text-sm text-brand-muted transition hover:text-white"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-brand-muted">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          
        </motion.div>
      </div>
    </section>
  );
}
