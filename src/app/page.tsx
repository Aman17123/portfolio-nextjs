import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import Exper from '../component/Exper';
import Projects from '../component/Projects';
import Stack from '../component/Stack';
import Footer from '../component/Footer';
import Terminal from '../component/Terminal';

export default function HomePage() {
  return (
    <div >
      {/* Navbar */}
      <Navbar />
      <Hero/>
      <Stack/>
      
    </div>
  );
}
