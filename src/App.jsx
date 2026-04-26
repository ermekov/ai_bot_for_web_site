import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProblemSection from './components/ProblemSection.jsx';
import SolutionSection from './components/SolutionSection.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Features from './components/Features.jsx';
import UseCases from './components/UseCases.jsx';
import Integrations from './components/Integrations.jsx';
import Pricing from './components/Pricing.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import FloatingCTA from './components/FloatingCTA.jsx';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-midnight text-white">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="premium-glow left-[-160px] top-[-160px] h-[380px] w-[380px] rounded-full bg-cyanGlow/25" />
      <div className="premium-glow right-[-180px] top-[28rem] h-[420px] w-[420px] rounded-full bg-violetGlow/20" />
      <div className="premium-glow bottom-[18rem] left-[10%] h-[360px] w-[360px] rounded-full bg-mintGlow/[0.15]" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <Features />
        <UseCases />
        <Integrations />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
