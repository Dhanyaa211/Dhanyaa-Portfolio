import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import AdminDashboard from './components/AdminDashboard';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    // Check if admin path is in URL
    const isAdminPath = window.location.pathname === '/admin' || window.location.hash === '#admin';
    setShowAdmin(isAdminPath);

    // Handle browser navigation
    const handlePopState = () => {
      const isAdminPath = window.location.pathname === '/admin' || window.location.hash === '#admin';
      setShowAdmin(isAdminPath);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (showAdmin) return; // Don't run scroll handler in admin mode

    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAdmin]);

  // Admin access via secret key combination
  useEffect(() => {
    let keySequence: string[] = [];
    const secretSequence = ['r', 'a', 'j', 'a']; // Type "raja" to access

    const handleKeyPress = (e: KeyboardEvent) => {
      if (showAdmin) return; // Already in admin mode

      keySequence.push(e.key.toLowerCase());
      if (keySequence.length > secretSequence.length) {
        keySequence = keySequence.slice(-secretSequence.length);
      }

      if (keySequence.join('') === secretSequence.join('')) {
        setShowAdmin(true);
        window.history.pushState(null, '', '#admin');
        keySequence = [];
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [showAdmin]);

  if (showAdmin) {
    return <AdminDashboard />;
  }

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
