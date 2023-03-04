import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
