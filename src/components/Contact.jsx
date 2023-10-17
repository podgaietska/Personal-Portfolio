import {HiOutlineDocumentText} from 'react-icons/hi';
import {BiLogoGithub, BiLogoLinkedinSquare} from 'react-icons/bi';

function Contact(){
    return (
        <section className="contact-container section" id="contact">
            <h3>Contact Me</h3>
            <p>Send me an email at podgaietska.m@gmail.com</p>
            <div className="other-links">
                <a href="https://github.com/podgaietska" target="_blank" rel="noopener noreferrer"><BiLogoGithub className="icon"/></a>
                <a href="https://www.linkedin.com/in/podgaietska/" target="_blank" rel="noopener noreferrer"><BiLogoLinkedinSquare className="icon"/></a>
                <a href="https://www.linkedin.com/in/podgaietska/" target="_blank" rel="noopener noreferrer"><HiOutlineDocumentText className="icon"/></a>
            </div>
            <p className="rights">© 2023 podgaietska. All rights reserved.</p>
        </section>
    )
}

export default Contact;