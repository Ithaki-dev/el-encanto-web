import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="font-sans antialiased text-gray-800 bg-slate-50 relative selection:bg-encanto-yellow selection:text-encanto-dark">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Benefits />
        <Testimonials />
        <Booking />
        <CTA />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
