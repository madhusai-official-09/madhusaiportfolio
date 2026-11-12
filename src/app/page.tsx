import AnimationLayout from "@/components/layouts/AnimationLayout";
import PortfolioLoader from "@/components/PortfolioLoader";
import CertificatesSection from "@/sections/CertificatesSection";
import ContactSection from "@/sections/ContactSection";
import EducationSection from "@/sections/EducationSection";
import Footer from "@/sections/Footer";
import HeroSection from "@/sections/HeroSection";
import ProjectSection from "@/sections/ProjectSection";
import SkillsSection from "@/sections/SkillsSection";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <AnimationLayout>
      <PortfolioLoader />
      <HeroSection />
      <EducationSection />
      <SkillsSection />
      <CertificatesSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </AnimationLayout>
  );
}
