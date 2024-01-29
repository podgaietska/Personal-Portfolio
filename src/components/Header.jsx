import { motion } from 'framer-motion';

function Header({activeSection, aboutPosition, projectsPosition, skillsPosition, contactPosition}){

    function getIndicatorPosition(activeSection) {
        switch (activeSection) {
            case "about":
                return aboutPosition;
            case "projects":
                return projectsPosition;
            case "skills":
                return skillsPosition;
            case "contact":
                return contactPosition;
            default:
                return 0;
        }
      }
    return (
        <div className="app-header">
            <div className="nav-container">
                <li><a className={activeSection === "about" ? "active" : ""} href="#about">About</a></li>
                <li><a className={activeSection === "projects" ? "active" : ""} href="#projects">Projects</a></li>
                <li><a className={activeSection === "skills" ? "active" : ""} href="#skills">Skills</a></li>
                <li><a className={activeSection === "contact" ? "active" : ""} href="#contact">Contact</a></li>
                <motion.div className="section-indicator" initial={false} animate={{ x: getIndicatorPosition(activeSection)}} transition={{ duration: 0.1 }}></motion.div>
            </div>
        </div>
    )
}

export default Header;