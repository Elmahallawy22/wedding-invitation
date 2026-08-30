import Image from "next/image";

export default function PhoteSection() {
  return (
    <section className="flex justify-center mb-3">
      <Image src="/assets/calender.png" alt="Calendar-timer"  width={600} height={400}  className="px-2"/>
    </section>
  )
}
