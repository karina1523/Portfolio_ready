import '../Navbar/Navbar.scss';
import Sidebar from '../SideBar/Sidebar';
import Socials from '../Socials'
import Theme from '../Theme/Theme';
import { useTranslation } from 'react-i18next';


const Navbar = () => {
    const { i18n } = useTranslation()

    const changeLang = () => {
        const newLang = i18n.language == 'ru' ? "en" : "ru"
        i18n.changeLanguage(newLang)
        localStorage.setItem('i18nextLng', newLang);
    }

    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <button onClick={changeLang} className="lang-toggle">
                    {i18n.language === 'en' ? 'RU' : 'EN'}
                </button>
                <div className="wrapper__left">
                    <Theme />
                    <Socials />
                </div>

            </div>
        </div>
    );
};

export default Navbar;

