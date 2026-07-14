import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import About from '../component/About';
import Exper from '../component/Exper';
import Projects from '../component/Projects';
import Stack from '../component/Stack';
import Footer from '../component/Footer';
import Marquee from '../component/Marquee';

export default function HomePage() {
  return (
    <>
      {/* Skip-to-content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-1/2 focus:-translate-x-1/2 focus:z-[9999] focus:bg-[#0f172a] focus:text-blue-400 focus:border focus:border-blue-500 focus:px-4 focus:py-2 focus:rounded-full focus:font-mono focus:text-sm"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        {/* Infinite tech marquee between Hero and About */}
        <Marquee />
        <About />
        <Stack />
        <Exper />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
