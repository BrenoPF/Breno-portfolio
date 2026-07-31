import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AISection from "@/components/sections/AISection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import Marquee from "@/components/Marquee";
import GrainOverlay from "@/components/GrainOverlay";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GrainOverlay />
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <Marquee
          items={[
            "React",
            "Node.js",
            "TypeScript",
            "Next.js",
            "PostgreSQL",
            "IA aplicada",
            "Clean Code",
            "Performance",
          ]}
        />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ExperienceSection />
        <AISection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
