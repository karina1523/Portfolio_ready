import '../Navbar/Navbar.scss';
import Sidebar from '../SideBar/Sidebar';
import Socials from '../Socials';
import Theme from '../Theme/Theme';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { FaCog, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const { i18n } = useTranslation();
    const [showSettings, setShowSettings] = useState(false);

    const changeLang = () => {
        const newLang = i18n.language == 'ru' ? "en" : "ru";
        i18n.changeLanguage(newLang);
        localStorage.setItem('i18nextLng', newLang);
    };

    const toggleSettings = () => {
        setShowSettings(!showSettings);
    };

    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                {/* Иконка настроек (видна всегда) */}
                <div className="settings-container">
                    <button
                        className={`settings-toggle ${showSettings ? 'active' : ''}`}
                        onClick={toggleSettings}
                    >
                        {showSettings ? <FaTimes /> : <FaCog />}
                    </button>

                    {/* Выпадающее меню настроек */}
                    {showSettings && (
                        <div className="settings-dropdown">
                            <div className="settings-item">
                                <span className="settings-label">
                                    {i18n.language === 'en' ? 'Language' : 'Язык'}
                                </span>
                                <button onClick={changeLang} className="lang-toggle">
                                    {i18n.language === 'en' ? 'RU' : 'EN'}
                                </button>
                            </div>

                            <div className="settings-item">
                                <span className="settings-label">
                                    {i18n.language === 'en' ? 'Theme' : 'Тема'}
                                </span>
                                <Theme />
                            </div>

                            <div className="settings-item">
                                <span className="settings-label">
                                    {i18n.language === 'en' ? 'Socials' : 'Соцсети'}
                                </span>
                                <Socials />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;

