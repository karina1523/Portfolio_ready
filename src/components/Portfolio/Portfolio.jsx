import { useRef } from 'react'
import '../Portfolio/Portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'


const items = [
    { id: 1, key: 'shop', url: 'https://online-shop-one-ebon.vercel.app/' },
    { id: 2, key: 'weather', url: 'https://react-weather-opal.vercel.app/' },
    { id: 3, key: 'github', url: 'https://git-hub-finder-kappa-six.vercel.app/' },
    { id: 4, key: 'todo', url: 'https://to-do-list-rouge-six.vercel.app/' }
]



const Single = ({ item }) => {
    const ref = useRef()
    const { t } = useTranslation()

    const { scrollYProgress } = useScroll({ target: ref })
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return (
        <section>
            <div className="container_portfolio">
                <div className="wrapper_portfolio">
                    <div className="imageContainer_portfolio" ref={ref}>
                        <img className='img-port' src={`/images/${item.key}.jpg`} alt={t(`portfolio.projects.${item.key}.title`)} />
                    </div>
                    <motion.div className="textContainer_portfolio" style={{ y }}>
                        <h2 className='textContainer_portfolio-title'>{t(`portfolio.projects.${item.key}.title`)}</h2>
                        <p className='textContainer_portfolio-text'>{t(`portfolio.projects.${item.key}.desc`)}</p>
                        <button onClick={() => window.open(item.url, '_blank')}>
                            {t('portfolio.seeDemo')}
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}


const Portfolio = () => {
    const ref = useRef()
    const { t } = useTranslation()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'start start']
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>{t('portfolio.title')}</h1>
                <motion.div style={{ scaleX: scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}


export default Portfolio