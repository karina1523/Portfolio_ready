import { motion, } from 'framer-motion'
import { useTranslation } from 'react-i18next'


const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    }
}


const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    }
}
const Links = () => {
    const { t } = useTranslation();

    const items = [
        'navigation.homepage',
        'navigation.about',
        'navigation.portfolio',
        'navigation.contact',
    ];

    return (
        <motion.div className='links' variants={variants}>
            {items.map(key => (
                <motion.a
                    href={`#${key.split('.').pop()}`}
                    key={key}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {t(key)}
                </motion.a>
            ))}

        </motion.div>
    )
}

export default Links