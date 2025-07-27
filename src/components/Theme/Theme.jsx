import { useEffect, useState } from 'react'
import '../Theme/Theme.scss'

const Theme = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark';
    });

    useEffect(() => {
        document.body.setAttribute('id', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const switchTheme = () => {
        setTheme((cur) => (cur === 'dark' ? 'light' : 'dark'));
    };

    return (
        <div className="meTheme">
            <div className="toggleWrapper">
                <input
                    className="input"
                    id="dn"
                    type="checkbox"
                    onChange={switchTheme}
                    checked={theme === 'light'}
                />
                <label className="toggle" htmlFor="dn">
                    <span className="toggle__handler">
                        <span className="crater crater--1"></span>
                        <span className="crater crater--2"></span>
                        <span className="crater crater--3"></span>
                    </span>
                    <span className="star star--1"></span>
                    <span className="star star--2"></span>
                    <span className="star star--3"></span>
                    <span className="star star--4"></span>
                    <span className="star star--5"></span>
                    <span className="star star--6"></span>
                </label>
            </div>
        </div>
    );
};

export default Theme;
