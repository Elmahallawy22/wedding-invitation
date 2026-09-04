import Reveal from "../features/reveal";

export default function Footer() {
  return (
    <footer className="py-12 flex flex-col justify-center items-center gap-5">
      <Reveal delay={0.3}>
        <h4 className="font-script text-6xl text-fg text-center">Youssef & Hana</h4>
      </Reveal>
      <Reveal>
        <p className="text-sm text-gold font-sans">2 September 2026</p>
      </Reveal>
      <Reveal>
        <p className="text-muted text-sm font-serif">
          Created by <span className="text-fg font-sans font-medium animate-pulse">Youssef Elmahallawy</span>
        </p>
      </Reveal>
    </footer>
  );
}
