import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Schedule from "@/components/schedule";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import Footer from "@/components/footer";

export default function FitZoneLandingPage() {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <Schedule />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
