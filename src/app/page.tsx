import AnimationLayout from "@/components/layouts/AnimationLayout";
import AboutSection from "@/sections/AboutSection";
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
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </AnimationLayout>
  );
}
