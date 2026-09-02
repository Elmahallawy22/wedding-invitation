import Reveal from "../features/reveal";

export default function GuidelinesSection() {
  return (
    <section className="flex justify-center py-12 bg-bg-alt px-3">
      <div className="container flex flex-col items-center gap-5">
        <Reveal>
          <p className="text-gold">Good to Know</p>
        </Reveal>
        <Reveal delay={0.4}>
          <h2 className="font-italic text-7xl text-fg">Event Guidelines</h2>
        </Reveal>
        <Reveal>
          <p className="text-muted font-serif italic mb-8">A few details to help you enjoy the evening</p>
        </Reveal>

        <div className="flex gap-8 w-full justify-center flex-wrap md:flex-nowrap">
          <div className="w-full sm:max-w-100 bg-bg border-t-4 border-fg px-10 h-76 flex flex-col items-center justify-center gap-4 rounded-lg">
            <Reveal>
              <p className="text-gold font-semibold font-sans">Formal Attire</p>
            </Reveal>
            <Reveal>
              <h3 className="text-text text-3xl font-bold font-serif">Dress Code</h3>
            </Reveal>
            <Reveal delay={0.5}>
            <div className="h-0.5 w-10 bg-gold" />
            </Reveal>
            <Reveal>
              <p className="text-text font-serif text-center">
                A formal evening calls for elegant gowns and tailored suits in warm, sunset tones.
              </p>
            </Reveal>
            <div className="h-8"></div>
          </div>
          <div className="w-full sm:max-w-100 bg-bg border-t-4 border-fg px-10 h-76 flex flex-col items-center justify-center gap-4 rounded-lg">
            <Reveal>
              <p className="text-gold font-semibold font-sans">Logistics</p>
            </Reveal>
            <Reveal>
              <h3 className="text-text text-3xl font-bold font-serif">Arrival</h3>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="h-0.5 w-10 bg-gold" />
            </Reveal>
            <Reveal>
              <p className="text-text font-serif text-center">
                Doors open at 8:00 PM. The celebration takes place at New Garden, Kempinsko, Talkha.
              </p>
            </Reveal>
            <Reveal>
              <div className="border border-border px-3 py-2 font-sans text-xs rounded-md text-fg font-semibold">Be Seated by 7:45 PM</div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
