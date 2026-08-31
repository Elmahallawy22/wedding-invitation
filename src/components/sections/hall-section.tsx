import Image from "next/image";
import { MapPin } from "lucide-react";
import Link from "next/link";
import Reveal from "../features/reveal";

export default function HallSection() {
  return (
    <section className="flex justify-center py-12">
      <div className="container flex justify-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 px-4 flex-wrap w-full max-w-225">
          <div className="mt-15 flex flex-col items-center md:items-start gap-4 text-center">
            <Reveal>
              <p className="text-gold">Join Us At</p>
            </Reveal>
            <Reveal delay={0.4}>
              <h2 className="font-italic text-7xl text-fg">Mona Lisa</h2>
            </Reveal>
            <Reveal>
              <h3 className="font-serif text-4xl text-fg">Half Moon</h3>
            </Reveal>
            <Reveal>
              <p className="text-muted font-sans">Al Mansoura - Mit Khamis Entrance</p>
            </Reveal>
          </div>

          <div className="flex flex-col items-center gap-8 text-center">
            <Reveal>
              <div className="w-76 sm:w-96 p-2 bg-bg-alt border border-border rounded-lg">
                <div className="w-full h-full p-2 bg-bg-alt border border-border border-dashed rounded-lg">
                  <Image src="/assets/hall.jpg" alt="Half Moon" width={400} height={200} className="rounded-lg w-full h-full" />
                </div>
              </div>
            </Reveal>
            <Reveal>
              <Link
                href="https://goo.gl/maps/Sb1Cs55kqgkJRqeH7?g_st=aw"
                target="_blank"
                className="py-3 px-8 text-sm font-semibold border border-fg text-fg font-sans flex items-center gap-2 cursor-pointer hover:bg-fg hover:text-bg"
              >
                <MapPin width={14} height={14} /> Google Maps
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
