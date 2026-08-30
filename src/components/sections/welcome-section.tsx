import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="mt-15 flex flex-col items-center gap-5 text-center">
      <p className="text-gold">With Love</p>
      <h2 className="font-italic text-7xl text-fg">Dear Family and Friends</h2>
      <div className="bg-gold w-16 h-0.5 rounded-full mt-3 mb-6"></div>
      <p className="text-muted font-serif italic max-w-120 text-lg px-1">On this beautiful day, we want to share with you the bright moments moments and sincere smiles of our love story. </p>
      <Image  src="/assets/end.webp" alt="end" width={200} height={8} />
    </section>
  );
}
