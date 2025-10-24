import { motion } from "framer-motion";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    const formData = Object.fromEntries(new FormData(event.currentTarget).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "ส่งข้อความไม่สำเร็จ");
      }

      event.currentTarget.reset();
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

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

          <motion.form
            className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
          >
            <label className="block">
              <span className="text-xs uppercase tracking-[0.4em] text-brand-muted">Name</span>
              <input type="text" name="name" required className="form-input" placeholder=" " />
            </label>

            <label className="block">
              <span className="text-xs uppercase tracking-[0.4em] text-brand-muted">Email</span>
              <input type="email" name="email" required className="form-input" placeholder="you@example.dev" />
            </label>

            <label className="block">
              <span className="text-xs uppercase tracking-[0.4em] text-brand-muted">Message</span>
              <textarea
                name="message"
                rows="4"
                required
                className="form-input resize-none"
                placeholder="share your idea or project"
              />
            </label>

            <button type="submit" className="btn-primary w-full justify-center">
              {status === "sending" ? "Sending..." : status === "sent" ? "Sent!" : "Send Message"}
            </button>
            {status === "error" && (
              <p className="text-center text-xs text-brand-accent/80">error! please try again</p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
