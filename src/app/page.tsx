import IntroScreen from "@/components/features/intro-screen";
import HeroSection from "@/components/sections/hero-section";
import PlayerSound from "@/components/features/player-sound";
import WelcomeSection from "@/components/sections/welcome-section";
import CountdwonSection from "@/components/sections/countdwon-section";
import PhoteSection from "@/components/sections/phote-section";
import ProgramSection from "@/components/sections/program-section";
import HallSection from "@/components/sections/hall-section";
import GuidelinesSection from "@/components/sections/guidelines-section";
import ConnectSection from "@/components/sections/connect-section";
import EndSection from "@/components/sections/end-section";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <IntroScreen duration={1500}>
      <main className="min-h-screen bg-">
        <HeroSection />
        <PlayerSound />
        <div className="flex justify-center">
          <div className="container">
            <WelcomeSection />
            <CountdwonSection />
            <PhoteSection />
          </div>
        </div>
        <ProgramSection />
        <HallSection />
        <GuidelinesSection />
        <ConnectSection />
        <EndSection />
        <Footer />
      </main>
    </IntroScreen>
  );
}
