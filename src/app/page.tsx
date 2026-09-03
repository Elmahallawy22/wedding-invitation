import InvitationShell from "@/components/features/invitation-shell";
import HeroSection from "@/components/sections/hero-section";
import WelcomeSection from "@/components/sections/welcome-section";
import CountdwonSection from "@/components/sections/countdwon-section";
import PhoteSection from "@/components/sections/phote-section";
import ProgramSection from "@/components/sections/program-section";
import HallSection from "@/components/sections/hall-section";
import GuidelinesSection from "@/components/sections/guidelines-section";
import ConnectSection from "@/components/sections/connect-section";
import EndSection from "@/components/sections/end-section";
import Footer from "@/components/sections/footer";
import FloatingHearts from "@/components/features/floating-heart";

export default function HomePage() {
  return (
    <InvitationShell>
      <main className="min-h-screen">
        <HeroSection />
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

        <FloatingHearts />
      </main>
    </InvitationShell>
  );
}
