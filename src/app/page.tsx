import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import Exper from '../component/Exper';
import Projects from '../component/Projects';
import Stack from '../component/Stack';

export default function HomePage() {
  return (
    <div >
      {/* Navbar */}
      <Navbar />
      <Hero/>
      <Stack/>
      <Exper/>
      <Projects/>
    </div>
  );
}
