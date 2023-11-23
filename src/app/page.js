import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col bg-[#191919] ">
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
      </div>
    </section>
  );
}
