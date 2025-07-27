import { useTranslation } from 'react-i18next'
import './Skills.scss'
import { motion } from 'framer-motion'

const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 60 },
    { name: 'React', level: 70 },
    { name: 'Framer Motion', level: 50 },
    { name: 'TypeScript', level: 40 },
    { name: 'Git / GitHub', level: 55 },
]

const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.8,
            ease: 'easeOut',
        }
    })
}

const barAnimation = {
    hidden: { width: 0 },
    visible: (width) => ({
        width: `${width}%`,
        transition: {
            duration: 1.2,
            ease: 'easeInOut'
        }
    })
}

const Skills = () => {
    const { t } = useTranslation();


    return (
        <div className="skills-section" id="Skills">
            <motion.h2
                className="skills-title"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                {t('skills.my')} <span>{t('skills.superpowers')}</span>
            </motion.h2>

            <motion.div
                className="skills-list"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {skills.map((skill, i) => (
                    <motion.div
                        className="skill-box"
                        custom={i}
                        variants={fadeIn}
                        key={skill.name}
                    >
                        <div className="skill-header">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                        </div>
                        <div className="bar-background">
                            <motion.div
                                className="bar-fill"
                                custom={skill.level}
                                variants={barAnimation}
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Skills


