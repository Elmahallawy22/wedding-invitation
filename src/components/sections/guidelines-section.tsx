export default function GuidelinesSection() {
  return (
    <section className="flex justify-center py-12 bg-bg-alt px-3">
      <div className="container flex flex-col items-center gap-5">
        <p className="text-gold">Good to Know</p>
        <h2 className="font-italic text-7xl text-fg">Event Guidelines</h2>
        <p className="text-muted font-serif italic mb-8">A few details to help you enjoy the evening</p>

        <div className="flex gap-8 w-full justify-center flex-wrap md:flex-nowrap">
          <div className="w-full sm:max-w-100 bg-bg border-t-4 border-fg px-10 h-76 flex flex-col items-center justify-center gap-4 rounded-lg">
            <p className="text-gold font-semibold font-sans">Formal Attire</p>
            <h3 className="text-text text-3xl font-bold font-serif">Dress Code</h3>
            <div className="h-0.5 w-10 bg-gold" />
            <p className="text-text font-serif text-center">
              A formal evening calls for elegant gowns and tailored suits in warm, sunset tones.
            </p>
            <div className="h-8"></div>
          </div>
          <div className="w-full sm:max-w-100 bg-bg border-t-4 border-fg px-10 h-76 flex flex-col items-center justify-center gap-4 rounded-lg">
            <p className="text-gold font-semibold font-sans">Logistics</p>
            <h3 className="text-text text-3xl font-bold font-serif">Arrival</h3>
            <div className="h-0.5 w-10 bg-gold" />
            <p className="text-text font-serif text-center">
              Doors open at 8:00 PM. The celebration takes place at Mona Lisa, Half Moon, Mansoura.
            </p>
            <div className="border border-border px-3 py-2 font-sans text-xs rounded-md text-fg font-semibold">Be Seated by 7:45 PM</div>
          </div>
        </div>
      </div>
    </section>
  );
}
