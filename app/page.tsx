import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParallaxBackground from '@/components/ParallaxBackground';
import FloatingShapes from '@/components/FloatingShapes';

export default function Home() {
  return (
    <main style={{ position: 'relative' }}>
      <ParallaxBackground />
      <FloatingShapes />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
