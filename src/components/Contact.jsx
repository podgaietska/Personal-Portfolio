import {BiLogoGithub, BiLogoLinkedinSquare} from 'react-icons/bi';

function Contact(){
    return (
        <section className="contact-container section" id="contact">
            <h1>Contact Me</h1>
            <p className="email">Send me an <a href="mailto:podgaietska.m@gmail.com" style={{ color: "#00B2F9", cursor: "pointer"}}>email!</a></p>
            <p>Or find me on:</p>
            <div className="other-links">
                <a href="https://github.com/podgaietska" target="_blank" rel="noopener noreferrer"><BiLogoGithub className="icon"/></a>
                <a href="https://www.linkedin.com/in/podgaietska/" target="_blank" rel="noopener noreferrer"><BiLogoLinkedinSquare className="icon"/></a>
            </div>
            <p className="rights">© 2023 podgaietska. All rights reserved.</p>
        </section>
    )
}

export default Contact;