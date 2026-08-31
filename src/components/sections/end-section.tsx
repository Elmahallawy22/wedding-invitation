import Reveal from "../features/reveal";

export default function EndSection() {
  return (
    <section className="py-12 flex justify-center bg-bg-alt px-2">
      <Reveal className="w-full max-w-190">
        <div className="h-68 w-full bg-bg border border-border rounded-lg p-2">
          <div className="border border-border border-dashed rounded-lg p-2 w-full h-full flex flex-col items-center justify-evenly">
            <Reveal>
              <span className="text-gold text-3xl">✦</span>
            </Reveal>
            <Reveal>
              <p className="text-fg font-italic text-4xl text-center">Your presence is the most beautiful part of our story</p>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
