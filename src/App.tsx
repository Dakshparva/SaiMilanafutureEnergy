
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TeamMemberGrid from './components/OurTeam';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <About />
            <Projects />
            <TeamMemberGrid/>
            <Contact />    
          </>
        } />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;