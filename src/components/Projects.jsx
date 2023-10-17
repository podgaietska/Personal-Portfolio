import { BsGithub, BsPlayFill } from 'react-icons/bs';
import { useScroll, useTransform, motion } from "framer-motion";


function Projects(){
    const smartMealImgs = [{type: 'dark-mode-image', img:'/smartmeal1.webp'}, {type: 'light-mode-image', img:'/smartmeal2.webp'}]
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

    const imageTiltVariants = {
        initial: {
            scale: 1,
            rotate: 5,
            x: 0,
            y: 0,
        },
        animate: {
            scale: 1.05,
            rotate: 15,
            x: 80,
            y: -5,
            transition: {
                type: "spring",
                duration: 0.7,

            }
        }
    };

    return (
        <section className="section projects-container" id="projects">
            <div className="projects-container-text">
                <h1>My Projects</h1>
                <p>Check out some of the projects I did or am currently working on.</p>
            </div>
            <div className="projects-grid">
                <div className="row first">
                    <div className="small-project">
                        <div className="link-icons">
                            <div className="icon">
                                <a href="https://github.com/podgaietska/LibCode" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                            </div>
                        </div>
                        <div className="project-info libcode">
                            <h1>LibCode - a library of Data Structures and Algorithms</h1>
                            <p>Python, Pytest</p>
                        </div>
                        <motion.div 
                        className="data-structures-img"
                        initial={{
                            scale: 1.05,
                            rotate: -10,
                            x: -20,
                            y: -5,
                        }}
                        // whileInView="animate"
                        >
                            <img src="/linked-list3.png" alt="data-structures" />
                        </motion.div>
                    </div>
                    <div className="large-project">
                        <div className="link-icons">
                            <div className="icon">
                                <a href="https://github.com/podgaietska/Ecommerce-Fullstack-App" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                            </div>
                            <div className="icon">
                                <a href="https://illustrious-pony-215af5.netlify.app/" target="_blank" rel="noopener noreferrer"><BsPlayFill /></a>
                            </div>
                        </div>
                        <div className="project-info">
                            <h1>Vektor - a full-stack Ecommerce Website</h1>
                            <p>MongoDB, Express.js, React.js, Node.js</p>
                        </div>
                        <div className="sliding-images">
                                <motion.div className="row" style={{ x : useTransform(scrollYProgress, [0, 1], [-180, 80]) }}>
                                    <div className="image">
                                        <img src="/vektor1.webp" alt="vektor1" />
                                    </div>
                                    <div className="image">
                                        <img src="/vektor2.webp" alt="vektor2" />
                                    </div>
                                    <div className="image">
                                        <img src="/vektor3.webp" alt="vektor3" />
                                    </div>
                                </motion.div>
                                <motion.div className="row" style={{ x : useTransform(scrollYProgress, [0, 1], [30, -80]) }}>
                                    <div className="image">
                                        <img src="/vektor4.webp" alt="vektor4" />
                                    </div>
                                    <div className="image">
                                        <img src="/vektor5.webp" alt="vektor5" />
                                    </div>
                                    <div className="image">
                                        <img src="/vektor6.webp" alt="vektor6" />
                                    </div>
                                </motion.div>
                        </div>
                    </div>
                </div>
                <div className="row second">
                    <div className="large-project">
                        <div className="link-icons">
                            <div className="icon">
                                <a href="https://github.com/podgaietska/SmartMeal-Fullstack-App" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                            </div>
                            <div className="icon">
                                <a href="https://taupe-dieffenbachia-d5d916.netlify.app/" target="_blank" rel="noopener noreferrer"><BsPlayFill /></a>
                            </div>
                        </div>
                        <div className="project-info">
                            <h1>SmartMeal - OpenAI integrated recipe generator</h1>
                            <p>React.js, AWS Lambda, DynamoDB, Terraform</p>
                        </div>
                        <div className="smartmeal-images">
                            {smartMealImgs.map((image, index) => {
                                return(
                                <motion.div 
                                className={image.type}
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true,
                                }}
                                custom={index}
                                >
                                    <img src={image.img} alt="smartmeal2" />
                                </motion.div>
                                )
                            })
                            }
                        </div>
                    </div>
                    <div className="small-project">
                        <div className="link-icons seu">
                            <div className="icon">
                                <a href="https://github.com/studentenergyuofc/seucalgary-website" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                            </div>
                        </div>   
                        <div className="project-info seu">
                            <h1>SEU Official Website</h1>
                            <p>React.js, Typescript</p>
                        </div>
                        <motion.div 
                        className="seu-website-image"
                        variants={imageTiltVariants}
                        initial="initial"
                        whileInView="animate"
                        >
                            <img src="/seu-website.webp" alt="seu-website" />
                        </motion.div>
                    </div>
                </div>
                <div className="row third">
                    <div className="small-project">
                        <div className="link-icons">
                            <div className="icon">
                                <a href="https://github.com/podgaietska/GradeTracker-Fullstack-App" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                            </div>
                        </div>
                        <div className="project-info gradetracker">
                            <h1>GradeTracker - a full-stack app for tracking uni progress</h1>
                            <p>Django, PostgreSQL</p>
                        </div>
                        <div className="gradetracker-image">
                            <img src="/gradetracker.webp" alt="gradetracker" />
                        </div>
                    </div>
                    <div className="large-project">
                        <div className="project-info">
                            <div className="link-icons">
                                <div className="icon">
                                    <a href="https://github.com/podgaietska/Automated-Schedule-Generator" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                                </div>
                            </div>
                            <h1>Automated Weekly Schedule Generator</h1>
                            <p>Java, GUI, Junit, MySQL</p>
                            <div className="moving-text-container">
                                <motion.h2 style={{ x : useTransform(scrollYProgress, [0, 1], [-220, 80]) }}>9:00 - 10:00 - Event 1 | 10:15 - 12:00 - Event 2 | 12:00 - 12:30 - Event 3 | 12:45 - 2:00 - Event 4</motion.h2>
                                <motion.h1 style={{ x : useTransform(scrollYProgress, [0, 1], [40, -200]) }}>9:00 - 10:00 - Event 1 | 10:15 - 12:00 - Event 2 | 12:00 - 12:30 - Event 3 | 12:45 - 2:00 - Event 4</motion.h1>
                                <motion.h2 style={{ x : useTransform(scrollYProgress, [0, 1], [-100, 0]) }}>9:00 - 10:00 - Event 1 | 10:15 - 12:00 - Event 2 | 12:00 - 12:30 - Event 3 | 12:45 - 2:00 - Event 4</motion.h2>
                                <motion.h3 style={{ x : useTransform(scrollYProgress, [0, 1], [40, -80]) }}>9:00 - 10:00 - Event 1 | 10:15 - 12:00 - Event 2 | 12:00 - 12:30 - Event 3 | 12:45 - 2:00 - Event 4 | 3:00 - 4:15 - Event 5 | 4:30 - 5:30 - Event 6 | 6:00 - 7: 30</motion.h3>
                                <motion.h1 style={{ x : useTransform(scrollYProgress, [0, 1], [-220, -100]) }}>9:00 - 10:00 - Event 1 | 10:15 - 12:00 - Event 2 | 12:00 - 12:30 - Event 3 | 12:45 - 2:00 - Event 4 | 3:00 - 4:15 - Event 5 | 4:30 - 5:30 - Event 6 | 6:00 - 7:30 - Event 7| 7:45 - 8:00 - Event 8 </motion.h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;