import { motion } from 'framer-motion'
import '../About Me/AboutMe.scss'
import { useTranslation } from 'react-i18next'

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.25,
            duration: 0.8,
            ease: 'easeOut'
        }
    })
}

const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            ease: 'easeOut'
        }
    }
}

const About = () => {
    const { t } = useTranslation();

    return (
        <section className="about" id="about">
            <div className="aboutContent">
                <motion.div
                    className="aboutText"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2 custom={0} variants={textVariants}>
                        {t('about.title')}
                    </motion.h2>

                    <motion.p custom={1} variants={textVariants}>
                        {t('about.intro')}
                    </motion.p>

                    <motion.p custom={2} variants={textVariants}>
                        {t('about.stack')}
                    </motion.p>

                    <motion.p custom={3} variants={textVariants}>
                        {t('about.focus')}
                    </motion.p>
                </motion.div>

                <motion.div
                    className="aboutImage"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={imageVariants}
                >
                    <img src="/photo1.jpg" alt="Karina" />
                </motion.div>
            </div>
        </section>
    )
}

export default About
