import { NavBar } from "@/components/NavBar";
import { HeroV2 } from "@/components/HeroV2";
import { WhoMission } from "@/components/WhoMission";
import { Courses } from "@/components/Courses";
import { CommunityHub } from "@/components/CommunityHub";
import { FeedbackV2 } from "@/components/FeedbackV2";
import { ProServices } from "@/components/ProServices";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { FooterV2 } from "@/components/FooterV2";

export default function Home() {
  return (
    <main className="relative">
      <NavBar />
      <HeroV2 />
      <WhoMission />
      <Courses />
      <CommunityHub />
      <FeedbackV2 />
      <ProServices />
      <FAQ />
      <Contact />
      <FooterV2 />
    </main>
  );
}
