import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyPSI from "@/components/WhyPSI";
import Process from "@/components/Process";
import About from "@/components/About";
import LatestInsights from "@/components/LatestInsights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WhyPSI />
      <Process />
      <About />
      <LatestInsights />
      <Contact />
      <Footer />
    </main>
  );
}
