
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonals from './components/Testimonals';

function App() {
  return (
    <>
        <Hero />
      <section id="services"><Services /></section>
      <section id="about"><About/></section>
      <section id="gallery"><Gallery/></section>
      <section id="testimonials"><Testimonals/></section>
      <section id="contact"><Contact/></section>
      <section id="faq"><FAQ/></section>
      <Footer/>
    </>
  );
}

export default App;
