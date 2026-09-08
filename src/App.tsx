import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import TrustedBy from "./sections/TrustedBy";
import Features from "./sections/Features";
import Product from "./sections/Product";
import HowItWorks from "./sections/HowItWorks";
import Stats from "./sections/Stats";
import Solutions from "./sections/Solutions";
import Testimonials from "./sections/Testimonials";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <Product />
        <HowItWorks />
        <Stats />
        <Solutions />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}

export default App;