import FallingPetals from "@/components/FallingPetals";
import HeroSection from "@/components/HeroSection";
import QualitiesSection from "@/components/QualitiesSection";
import LoveLetterSection from "@/components/LoveLetterSection";
import TimelineSection from "@/components/TimelineSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <FallingPetals />
      <HeroSection />
      <QualitiesSection />
      <LoveLetterSection />
      <TimelineSection />
      <FooterSection />
    </div>
  );
};

export default Index;
