import { motion } from 'framer-motion';

function Header({activeSection}){

    function getIndicatorPosition(activeSection) {
        switch (activeSection) {
            case "about":
                return -18;
            case "projects":
            // Return appropriate x position
                return 73;
            case "skills":
            // Return appropriate x position
                return 160;
            case "contact":
            // Return appropriate x position
                return 250;
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