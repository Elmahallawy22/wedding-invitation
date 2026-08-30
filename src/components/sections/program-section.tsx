export default function ProgramSection() {
  return (
    <section className="flex justify-center py-12 bg-bg-alt px-3">
      <div className="container flex flex-col items-center gap-5">
        <p className="text-gold">Evening Schedule</p>
        <h2 className="font-italic text-7xl text-fg mb-6">The Celebration</h2>
        <div className="w-full sm:max-w-110 bg-bg border-t-4 border-fg p-1 h-96">
          <div className="border border-border w-full h-full flex flex-col items-center justify-center">
            <span className="text-gold text-xl tracking-[0.3em]">◇</span>
            <p className="text-fg text-[128px] font-serif">
              08<span className="text-gold">:</span>00
            </p>
            <span className="text-gold text-xl pb-4 font-sans">pm</span>
            <span className="text-muted text-xl font-serif italic">Doors Open</span>
          </div>
        </div>
      </div>
    </section>
  );
}
