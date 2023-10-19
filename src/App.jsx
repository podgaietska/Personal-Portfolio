import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useEffect, useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState("about"); 

  useEffect(() => {
    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
        });
    };

    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.3
    };

    const observer = new IntersectionObserver(callback, options);
    
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className="App">
      <Header activeSection={activeSection}/>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
