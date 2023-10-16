import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {HiOutlineDocumentText} from 'react-icons/hi';
import {BiLogoGithub, BiLogoLinkedinSquare} from 'react-icons/bi';


function About(){
    const [cardOneAnimation, setCardOneAnimation] = useState({ y: 0, x: 0 });
    const [cardTwoAnimation, setCardTwoAnimation] = useState({ y: 0, x: 0 });
    const [cardThreeAnimation, setCardThreeAnimation] = useState({ y: 0, x: 0 });
    const [cardFourAnimation, setCardFourAnimation] = useState({ y: 0 });
    const [containerAnimation, setContainerAnimation] = useState({ y: 0 });


    const [text] = useTypewriter({
        words: [
            "SWE Student",
            "Full-stack Developer",
            "Web Developer",
            "Software Engineer"
        ],
        loop: true,
        deleteSpeed: 50,
      });

      useEffect(() => {
        function handleScroll() {
            const htmlElement = document.documentElement;
            const totalHeight = htmlElement.scrollHeight - htmlElement.clientHeight;
            const amountScrolled = htmlElement.scrollTop;

            const scrollPercentage = (amountScrolled / totalHeight) * 100;

            const moveUpAmount = -amountScrolled * 0.1;
            const moveUpAmountTwo = -amountScrolled * 1.6;
            const moveUpAmpuntThree = -amountScrolled * 0.5;
            const moveUpAmountFour = -amountScrolled * 0.3;
            setCardOneAnimation({ y: moveUpAmount, x: -amountScrolled * 0.2});
            setCardTwoAnimation({ y: moveUpAmountTwo, x: amountScrolled * 0.5});
            setCardThreeAnimation({ y: moveUpAmpuntThree, x: amountScrolled * 0.2});
            setCardFourAnimation({ y: moveUpAmountFour});
            setContainerAnimation({ y: -amountScrolled * 0.8})
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <motion.div className="about-container" animate={containerAnimation} >
            <div className="left-container">
                <h1>Hi, I'm Mariia &#x1F44B;</h1>
                <p>
                    I am a{" "}
                    <span style={{ color: "#03C5FF" }}>{text}</span>
                    <Cursor />
                </p>
            </div>
            <div className="right-container">
                <motion.div className="card-container one" animate={cardOneAnimation} >
                    <p>I am a 3rd year Software Engineering Student at University of Calgary &#x1F469; &#x1F4BB; &#x1F917;</p>
                </motion.div>
                <motion.div className="card-container two" animate={cardTwoAnimation} >
                    <p>Scroll down to see what I kind of things I do &#x1F447;</p>
                </motion.div>
                <motion.div className="card-container four" animate={cardFourAnimation} >
                    <p>Useful resources</p>
                    <div className="about-icons">
                        <BiLogoLinkedinSquare className="icon"/>
                        <BiLogoGithub className="icon"/>
                        <HiOutlineDocumentText className="icon"/>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default About;