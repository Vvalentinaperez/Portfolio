import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import DesingSection from "@/components/DesingSection";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col bg-[#191919] ">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <DesingSection />
      </div>
      <Footer />
    </section>
  );
}
