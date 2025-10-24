export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/70 py-10 text-center text-xs uppercase tracking-[0.3em] text-brand-muted">
      © {new Date().getFullYear()} Daisannn.dev — Crafted with React, Tailwind & Framer Motion
    </footer>
  );
}
