import { useTranslation } from 'react-i18next'
import '../Hero/Hero.scss'
import { motion } from 'framer-motion'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  }
}

const sliderVariants = {
  initial: {
    x: -500,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: 'mirror',
    }
  }
}

const Hero = () => {
  const { t } = useTranslation();


  return (
    <div className='hero'>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>

      <div className="wrapper_hero">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h2 variants={textVariants}>Karina</motion.h2>
          <motion.h1 variants={textVariants}>{t('hero.Web developer and UI designer')}</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              onClick={() => window.location.href = "https://github.com/karina1523?tab=repositories"}
            >
              {t('hero.See the latest Works')}
            </motion.button>

            <motion.button
              variants={textVariants}
              onClick={() => window.location.href = "http://localhost:5174/contact#сontact"}
            >
              {t('hero.Contact me')}
            </motion.button>
          </motion.div>

          <motion.img className='mouse' variants={textVariants} src="/scroll.png" alt="" />
        </motion.div>
        <div className="imageContainer_hero">
          <img className='heroImg' src="/kk.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
