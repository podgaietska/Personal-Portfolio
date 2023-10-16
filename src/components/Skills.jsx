import { motion } from 'framer-motion';

function Skills(){
    const skills = ['Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'Java', 'HTML', 'CSS', 'Bootstrap', 'React.js', 'Django', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'MySQL', 'DynamoDB', 'Terraform', 'AWS', 'AWS Lambda', 'REST', 'Git', 'Docker']

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
        <div className="skills-container">
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
        </div>
    )
}

export default Skills;