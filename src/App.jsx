import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import useMediaQuery from './hooks/useMediaQuery';
import { useEffect, useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState("about"); 
  const [threshold, setThreshold] = useState();
  const isWindow = useMediaQuery("(max-width: 440px)");
  const [aboutPosition, setAboutPosition] = useState();
  const [projectsPosition, setProjectsPosition] = useState();
  const [skillsPosition, setSkillsPosition] = useState();
  const [contactPosition, setContactPosition] = useState();

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
        threshold: threshold
    };

    const observer = new IntersectionObserver(callback, options);
    
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, [threshold]);

  useEffect(() => {
    if (isWindow) {
      setThreshold(0.2);
      setAboutPosition(-18);
      setProjectsPosition(50);
      setSkillsPosition(116);
      setContactPosition(180);

    } else {
      setThreshold(0.3);
      setAboutPosition(-17);
      setProjectsPosition(73);
      setSkillsPosition(160);
      setContactPosition(250);
    }
  }, [isWindow]);

  return (
    <div className="App">
      <Header activeSection={activeSection} aboutPosition={aboutPosition} projectsPosition={projectsPosition} skillsPosition={skillsPosition} contactPosition={contactPosition}/>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
