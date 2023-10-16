import {HiOutlineDocumentText} from 'react-icons/hi';
import {BiLogoGithub, BiLogoLinkedinSquare} from 'react-icons/bi';

function Contact(){
    return (
        <div className="contact-container">
            <h3>Contact Me</h3>
            <p>Send me an email at podgaietska.m@gmail.com</p>
            <div className="other-links">
                <BiLogoGithub className="icon"/>
                <BiLogoLinkedinSquare className="icon"/>
                <HiOutlineDocumentText className="icon"/>
            </div>
            <p className="rights">© 2023 Podgaietska. All rights reserved.</p>
        </div>
    )
}

export default Contact;