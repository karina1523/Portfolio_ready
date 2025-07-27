import '../components/socials.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Socials = () => {
    return (
        <div className="social">
            <ul className="example-2">
                <li className="icon-content">
                    <a href="https://t.me/karina_0823" aria-label="telegram" data-social="linkedin">
                        <div className="filled"></div>
                        <i className="bi bi-telegram"></i>
                    </a>
                    <div className="tooltip">Telegram</div>
                </li>

                <li className="icon-content">
                    <a href="https://github.com/karina1523" aria-label="GitHub" data-social="github">
                        <div className="filled"></div>
                        <i className="bi bi-github"></i>
                    </a>
                    <div className="tooltip">GitHub</div>
                </li>

                <li className="icon-content">
                    <a href="https://www.youtube.com/@KarinaAllaberdieva" aria-label="YouTube" data-social="youtube">
                        <div className="filled"></div>
                        <i className="bi bi-youtube"></i>
                    </a>
                    <div className="tooltip">YouTube</div>
                </li>
            </ul>
        </div>
    );
};

export default Socials;
