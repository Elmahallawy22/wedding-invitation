import Image from "next/image";
import Reveal from "../features/reveal";

export default function PhoteSection() {
  return (
    <section className="flex justify-center mb-3">
      <Reveal delay={0.3}>
        <Image src="/assets/calender.png" alt="Calendar-timer" width={600} height={400} className="px-2" />
      </Reveal>
    </section>
  );
}
