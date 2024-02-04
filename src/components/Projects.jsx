import { BsGithub, BsPlayFill } from 'react-icons/bs';
import { useScroll, useTransform, motion } from "framer-motion";
import ImgComponent from './ImgComponent';

function Projects(){
    const smartMealImgs = [{type: 'dark-mode-image', img:'/smartmeal1.jpg', blurhash: 'L071fwxu%M-;S#xuxuoz-;bHt7ba'}, {type: 'light-mode-image', img:'/smartmeals3.jpg', blurhash:'L0SigQ8_00D%~qj[D%D%8_%MIU%L'}]
    const airlineImgs = [{type: 'first-pic', img:'/airline2.jpg', blurhash: 'L3R3Wh00?b?b004nofxu00~W9GD%'}, {type: 'second-pic', img:'/airline1.jpg', blurhash:'L0RC_G004T~q00M{NJa}00kC?bIU'}]
    const { scrollYProgress } = useScroll();

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100
        },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2 * index,
                duration: 0.3,
            },
        }),
    };

    return (
        <section className="section projects-container" id="projects">
            <div className="projects-container-text">
                <h1>My Projects</h1>
                <p>A compilation of some projects that I created, was a part of developing or am currently working on.</p>
            </div>
            <div className="projects-grid">
                <div className="row first">
                    <div className="small-project libcode">
                        <div className="link-icons">
                            <div className="icon">
                                <a href="https://github.com/podgaietska/LibCode" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                            </div>
                        </div>
                        <div className="project-info">
                            <h1>LibCode</h1>
                            <p className="project-description">A comprehensive library encompassing a wide range of essential data structures, designed to serve as a reusable and versatile package.</p>
                            <p className="techstack">Python, Pytest</p>
                        </div>
                        <motion.div 
                        className="data-structures-img"
                        initial={{
                            scale: 1.05,
                            rotate: -10,
                            x: -20,
                            y: -5,
                        }}
                        >
                            <img src="/linked-list3.jpg" alt="data-structures" />
                        </motion.div>
                    </div>
                    <div className="large-project vektor">
                        <div className="link-icons">
                            <div className="icon">
                                <a href="https://github.com/podgaietska/Ecommerce-Fullstack-App" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                            </div>
                            {/* <div className="icon">
                                <a href="https://illustrious-pony-215af5.netlify.app/" target="_blank" rel="noopener noreferrer"><BsPlayFill /></a>
                            </div> */}
                        </div>
                        <div className="project-info">
                            <h1>E-commerce Website</h1>
                            <p className="project-description">A full-stack e-commerce website for a clothing retail business, built with MERN stack to provide a seamless shopping experience. </p>
                            <p className="techstack">MongoDB, Express.js, React.js, Node.js</p>
                        </div>
                        <div className="sliding-images">
                                <motion.div className="row" style={{ x : useTransform(scrollYProgress, [0, 1], [-120, 100]) }}>
                                    <div className="image">
                                        <ImgComponent src={'/vektor1.jpg'} blurhash={'LmPj46_NniR*IonO%MjbDi%MoLRj'}/>
                                    </div>
                                    <div className="image">
                                        <ImgComponent src={'/vektor2.jpg'} blurhash={'LWQ0XG~qRjIU_3D$ofxux]WBkCWV'}/>
                                    </div>
                                    <div className="image">
                                        <ImgComponent src={'/vektor3.jpg'} blurhash={'LNRC#w-nyEyE-;j[ofR*_ME3R4n4'}/>
                                    </div>
                                </motion.div>
                                <motion.div className="row" style={{ x : useTransform(scrollYProgress, [0, 1], [10, -120]) }}>
                                    <div className="image">
                                        <ImgComponent src={'/vektor4.jpg'} blurhash={'LKS60+8wR5%#yDtlbHV@.m%~kWR5'}/>
                                    </div>
                                    <div className="image">
                                        <ImgComponent src={'/vektor5.jpg'} blurhash={'LRR3QO?c~q00%2a}RjoL_4IUD%-;'}/>
                                    </div>
                                    <div className="image">
                                        <ImgComponent src={'/vektor6.jpg'} blurhash={'LcPst{WB?Hof%MWBayoL_NofIUWB'}/>
                                    </div>
                                </motion.div>
                        </div>
                    </div>
                </div>
                <div className="row second">
                    <div className="large-project smartmeal">
                        <div className="link-icons">
                            <div className="icon">
                                <a href="https://github.com/podgaietska/SmartMeal-Fullstack-App" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                            </div>
                            {/* <div className="icon">
                                <a href="https://taupe-dieffenbachia-d5d916.netlify.app/" target="_blank" rel="noopener noreferrer"><BsPlayFill /></a>
                            </div> */}
                        </div>
                        <div className="project-info smartmeal">
                            <h1>SmartMeal</h1>
                            <p className="project-description">A full-stack web application that provides users with a quick way to generate recipes from the ingredients in their fridges through harnessing the power of OpenAI.</p>
                            <p className="techstack">React.js, AWS Lambda, DynamoDB, Terraform</p>
                        </div>
                        <div className="smartmeal-images">
                            {smartMealImgs.map((image, index) => {
                                return(
                                <motion.div 
                                className={image.type}
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                custom={index}
                                >
                                    <ImgComponent src={image.img} blurhash={image.blurhash}/>
                                </motion.div>
                                )
                            })
                            }
                        </div>
                    </div>
                    <div className="small-project seu">
                        <div className="link-icons">
                            <div className="icon">
                                <a href="https://github.com/studentenergyuofc/seucalgary-website" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                            </div>
                            <div className="icon">
                                <a href="https://studentenergyuofc.org/" target="_blank" rel="noopener noreferrer"><BsPlayFill /></a>
                            </div>
                        </div>   
                        <div className="project-info">
                            <h1>SEUC Website</h1>
                            <p className="project-description">The official website for Student Energy at UofC.</p>
                            <p className="techstack">React.js, Typescript</p>
                        </div>
                        <div className="seu-website-image">
                            <ImgComponent src={'/seu-website.jpg'} blurhash={'LRFP?M~V%LM{004:IUxu-;%Mt6WB'}/>
                        </div>
                    </div>
                </div>
                <div className="row third">
                    <div className="small-project gradetracker">
                        <div className="link-icons">
                            <div className="icon">
                                <a href="https://github.com/podgaietska/GradeTracker-Fullstack-App" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                            </div>
                        </div>
                        <div className="project-info">
                            <h1>GradeTracker</h1>
                            <p className="project-description">A full-stack web portal which provides university student with an efficient way to store, organize and manage their course information, grades, assignments and deadlines.</p>
                            <p className="techstack">Django, PostgreSQL, HTML, CSS, JavaScript</p>
                        </div>
                        <div className="gradetracker-image">
                            <img src="/gradetracker.jpg" alt="gradetracker" />
                        </div>
                    </div>
                    <div className="large-project java">
                            <div className="link-icons">
                                <div className="icon">
                                    <a href="https://github.com/podgaietska/Automated-Schedule-Generator" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                                </div>
                            </div>
                        <div className="project-info">
                            <h1>Automated Weekly Schedule Generator</h1>
                            <p className="project-description">A Java based application designed to automate the process of weekly schedule creation by analyzing task deadlines and allocating them them to specific time slots throughout the week.</p>
                            <p className="techstack">Java, GUI, Junit, MySQL</p>
                            <div className="moving-text-container">
                                <motion.h2 style={{ x : useTransform(scrollYProgress, [0, 1], [-220, 80]) }}>9:00 - 10:00 - Event 1 | 10:15 - 12:00 - Event 2 | 12:00 - 12:30 - Event 3 | 12:45 - 2:00 - Event 4</motion.h2>
                                <motion.h1 style={{ x : useTransform(scrollYProgress, [0, 1], [40, -200]) }}>9:00 - 10:00 - Event 1 | 10:15 - 12:00 - Event 2 | 12:00 - 12:30 - Event 3 | 12:45 - 2:00 - Event 4</motion.h1>
                                <motion.h2 style={{ x : useTransform(scrollYProgress, [0, 1], [-100, 0]) }}>9:00 - 10:00 - Event 1 | 10:15 - 12:00 - Event 2 | 12:00 - 12:30 - Event 3 | 12:45 - 2:00 - Event 4</motion.h2>
                                <motion.h3 style={{ x : useTransform(scrollYProgress, [0, 1], [40, -80]) }}>9:00 - 10:00 - Event 1 | 10:15 - 12:00 - Event 2 | 12:00 - 12:30 - Event 3 | 12:45 - 2:00 - Event 4 | 3:00 - 4:15 - Event 5 | 4:30 - 5:30 - Event 6 | 6:00 - 7: 30</motion.h3>
                                <motion.h1 style={{ x : useTransform(scrollYProgress, [0, 1], [-220, -100]) }}>9:00 - 10:00 - Event 1 | 10:15 - 12:00 - Event 2 | 12:00 - 12:30 - Event 3 | 12:45 - 2:00</motion.h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row fourth">
                    <div className="large-project airline">
                        <div className="link-icons">
                            <div className="icon">
                                <a href="https://github.com/podgaietska/AirlineSystem-Backend" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                            </div>
                        </div>
                        <div className="project-info java airline">
                            <h1>Airline Ticket Reservation System</h1>
                            <p className="project-description">A full-stack ticket reservation system for an airline company, executed in a format of a website. This system encompasses both front-end and back-end capabilities, offering a complete solution for flight reservation needs.</p>
                            <p className="techstack">React.js, Spring Boot, MySQL</p>
                        </div>
                        <div className="airline-images">
                            {airlineImgs.map((image, index) => {
                                return(
                                <motion.div 
                                className={image.type}
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                custom={index}
                                >
                                <ImgComponent src={image.img} blurhash={image.blurhash}/>
                                </motion.div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;