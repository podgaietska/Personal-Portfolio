import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {HiOutlineDocumentText} from 'react-icons/hi';
import {BiLogoGithub, BiLogoLinkedinSquare} from 'react-icons/bi';


function About(){
    const [cardOneAnimation, setCardOneAnimation] = useState({ y: 0, x: 0 });
    const [cardTwoAnimation, setCardTwoAnimation] = useState({ y: 0, x: 0 });
    const [cardFourAnimation, setCardFourAnimation] = useState({ y: 0 });


    const [text] = useTypewriter({
        words: [
            "SWE Student",
            "Full-stack Developer",
        ],
        loop: true,
        deleteSpeed: 50,
      });

      useEffect(() => {
        function handleScroll() {
            const htmlElement = document.documentElement;
            const amountScrolled = htmlElement.scrollTop;

            const moveUpAmount = -amountScrolled * 0.5;
            const moveUpAmountTwo = -amountScrolled * 0.3;
            const moveUpAmountFour = -amountScrolled * 0.2;
            setCardOneAnimation({ y: moveUpAmount, x: -amountScrolled * 0.2});
            setCardTwoAnimation({ y: moveUpAmountTwo, x: amountScrolled * 0.1});
            setCardFourAnimation({ y: moveUpAmountFour});
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <section className="about-container section" id="about">
            <div className="left-container">
                <h1>Hi, I'm Mariia &#x1F44B;</h1>
                <p>
                    I am a{" "}
                    <span style={{ color: "#00B2F9" }}>{text}</span>
                    <Cursor />
                </p>
            </div>
            <div className="right-container">
                <motion.div className="card-container one" animate={cardOneAnimation} >
                    <p>I am a 3rd year Software Engineering Student at University of Calgary <br/>&#x1F469; &#x1F4BB; &#x1F917;</p>
                </motion.div>
                <motion.div className="card-container two" animate={cardTwoAnimation} >
                    <p>Scroll down and check out my projects &#x1F447;</p>
                </motion.div>
                <motion.div className="card-container four" animate={cardFourAnimation} >
                    <p>Get to know me a bit better:</p>
                    <div className="about-icons">
                        <a href="https://github.com/podgaietska" target="_blank" rel="noopener noreferrer"><BiLogoGithub className="icon"/></a>
                        <a href="https://www.linkedin.com/in/podgaietska/" target="_blank" rel="noopener noreferrer"><BiLogoLinkedinSquare className="icon"/></a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About;