import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import About from '../component/About';
import Exper from '../component/Exper';
import Projects from '../component/Projects';
import Stack from '../component/Stack';
import Footer from '../component/Footer';

export default function HomePage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Exper />
      <Projects />
      <Footer />
    </div>
  );
}
