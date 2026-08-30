import Image from "next/image";
import { MapPin } from "lucide-react";
import Link from "next/link";

export default function HallSection() {
  return (
    <section className="flex justify-center py-12">
      <div className="container flex justify-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 px-4 flex-wrap w-full max-w-225">
          <div className="mt-15 flex flex-col items-center md:items-start gap-4 text-center">
            <p className="text-gold">Join Us At</p>
            <h2 className="font-italic text-7xl text-fg">Mona Lisa</h2>
            <h3 className="font-serif text-4xl text-fg">Half Moon</h3>
            <p className="text-muted font-sans">Al Mansoura - Mit Khamis Entrance</p>
          </div>

          <div className="flex flex-col items-center gap-8 text-center">
            <div className="w-76 sm:w-96 p-2 bg-bg-alt border border-border rounded-lg">
              <div className="w-full h-full p-2 bg-bg-alt border border-border border-dashed rounded-lg">
                <Image src="/assets/hall.jpg" alt="Half Moon" width={400} height={200} className="rounded-lg w-full h-full" />
              </div>
            </div>

            <Link
              href="https://goo.gl/maps/Sb1Cs55kqgkJRqeH7?g_st=aw"
              target="_blank"
              className="py-3 px-8 text-sm font-semibold border border-fg text-fg font-sans flex items-center gap-2 cursor-pointer hover:bg-fg hover:text-bg"
            >
              <MapPin width={14} height={14} /> Google Maps
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
