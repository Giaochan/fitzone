import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Schedule from "@/components/schedule";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import Footer from "@/components/footer";

export default function FitZoneLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
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
