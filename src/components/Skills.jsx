import { motion } from 'framer-motion';

function Skills(){
    const skills = ['Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'Java', 'HTML', 'CSS', 'Bootstrap', 'React.js', 'Django', 'Spring Boot', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'MySQL', 'DynamoDB', 'Terraform', 'AWS', 'REST', 'Git', 'Docker']

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index,
            }
        }),
    };

    return(
        <section className="skills-container section" id="skills">
            <div className="skills-container-text">
                <h1>My Skills</h1>
            </div>
            <div className="skills-list-container">
                <div className="skills">
                {skills.map((skill, index) => (
                    <motion.li 
                    className="skill"
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView = "animate"
                    viewport={{
                        once: true,
                    }}
                    custom={index}
                    >
                    {skill}
                    </motion.li>
                ))
                }
                </div>
            </div>
        </section>
    )
}

export default Skills;