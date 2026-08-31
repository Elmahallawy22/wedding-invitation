import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen ">
      <video src="/videos/hero-web.mp4" autoPlay muted loop playsInline className="hidden lg:block w-full h-full object-cover" />
      <video src="/videos/hero-mob.mp4" autoPlay muted loop playsInline className="lg:hidden w-full h-full object-cover" />

      <div className="flex flex-col items-center justify-center gap-2 text-bg absolute botton-12 lg:bottom-9 left-1/2 -translate-x-1/2">
        <span className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-80">Scroll</span>
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </div>
    </section>
  );
}
