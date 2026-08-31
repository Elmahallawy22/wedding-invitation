import Reveal from "../features/reveal";

export default function ProgramSection() {
  return (
    <section className="flex justify-center py-12 bg-bg-alt px-3">
      <div className="container flex flex-col items-center gap-5">
        <Reveal>
          <p className="text-gold">Evening Schedule</p>
        </Reveal>
        <Reveal delay={0.4}>
          <h2 className="font-italic text-7xl text-fg mb-6">The Celebration</h2>
        </Reveal>
        <div className="w-full sm:max-w-110 bg-bg border-t-4 border-fg p-1 h-96">
          <div className="border border-border w-full h-full flex flex-col items-center justify-center">
            <Reveal>
              <span className="text-gold text-xl tracking-[0.3em]">◇</span>
            </Reveal>
            <Reveal>
              <p className="text-fg text-[128px] font-serif">
                08<span className="text-gold">:</span>00
              </p>
            </Reveal>
            <Reveal>
              <span className="text-gold text-xl pb-4 font-sans">pm</span>
            </Reveal>
            <Reveal>
              <span className="text-muted text-xl font-serif italic">Doors Open</span>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
