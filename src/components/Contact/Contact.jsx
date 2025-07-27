import { useRef, useState } from 'react';
import '../Contact/Contact.scss';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const containerVariants = {
    initial: { opacity: 0, y: 100 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            when: 'beforeChildren',
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 },
    },
};

const Contact = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const formRef = useRef(null);
    const isInView = useInView(ref, { margin: '-100px', once: true });
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        setError(false);
        setSuccess(false);

        emailjs
            .sendForm(
                'service_hdry1ka',
                'template_aj228uw',
                formRef.current,
                'k_IZgbs4Ohbaspj2n'
            )
            .then(
                () => setSuccess(true),
                () => setError(true)
            );
    };

    return (
        <motion.div
            ref={ref}
            className="contact"
            variants={containerVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
        >
            <motion.div className="textContainer" variants={containerVariants}>
                <motion.h1 variants={itemVariants}>{t('contact.title')}</motion.h1>
                <motion.div className="item" variants={itemVariants}>
                    <h2>{t('contact.info.mail')}</h2>
                    <span>karinaallaberdieva5@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={itemVariants}>
                    <h2>{t('contact.info.address')}</h2>
                    <span>Ташкент, Узбекистан</span>
                </motion.div>
                <motion.div className="item" variants={itemVariants}>
                    <h2>{t('contact.info.phone')}</h2>
                    <span>+998946531523</span>
                </motion.div>
            </motion.div>

            <motion.div className="formContainer" variants={itemVariants}>
                <motion.div
                    className="phoneSvg"
                    initial={{ opacity: 1 }}
                    animate={isInView ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ delay: 3, duration: 1 }}
                >
                    <img src="/phone.svg" alt="phone" />
                </motion.div>

                <motion.form
                    ref={formRef}
                    onSubmit={sendEmail}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 4, duration: 1 }}
                >
                    <input type="text" placeholder={t('contact.form.placeholderName')} name="name" />
                    <input type="email" placeholder={t('contact.form.placeholderEmail')} name="email" />
                    <textarea placeholder={t('contact.form.placeholderMessage')} name="message" />
                    <button type="submit">{t('contact.fields.submit')}</button>

                    {error && <span>{t('contact.status.error')}</span>}
                    {success && <span>{t('contact.status.success')}</span>}
                </motion.form>
            </motion.div>
        </motion.div>
    );
};

export default Contact;

