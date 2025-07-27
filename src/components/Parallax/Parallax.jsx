import { useRef } from 'react';
import '../Parallax/parallax.scss';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Parallax = ({ type }) => {
    const ref = useRef();
    const { t } = useTranslation();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    });

    const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
    const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    const isAbout = type === 'AboutMe';

    return (
        <div
            className='parallax'
            ref={ref}
            style={{
                background: isAbout
                    ? 'linear-gradient(180deg, #0c0c1d, #111321)'
                    : 'linear-gradient(180deg, #0c0c1d, #505064)'
            }}
        >
            <motion.h1 className='parallax-title' style={{ y: yText }}>
                {isAbout ? t('parallax.AboutMe') : t('parallax.WhatIDid')}
            </motion.h1>

            <motion.div className="mountains"></motion.div>

            <motion.div
                className="planets"
                style={{
                    y: yBg,
                    backgroundImage: `url(${isAbout ? '/planets.png' : '/sun.png'})`
                }}
            ></motion.div>

            <motion.div style={{ x: yBg }} className="stars"></motion.div>
        </div>
    );
};

export default Parallax;


