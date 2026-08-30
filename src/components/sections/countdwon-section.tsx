import Image from "next/image";
import Timer from "../features/timer";

export default function CountdwonSection() {
  return (
    <section className="mt-8 mb-6 flex flex-col items-center gap-5 text-center">
      <p className="text-gold">The Big Day</p>
      <h2 className="font-italic text-7xl text-fg">Count Down</h2>
      <div className="text-muted font-semibold">Until I Say &ldquo;Yes&rdquo;</div>
      <Timer targetDate="2026-11-10T18:59:59" />
      <Image src="/assets/end.webp" alt="end" width={200} height={8} />
    </section>
  );
}
