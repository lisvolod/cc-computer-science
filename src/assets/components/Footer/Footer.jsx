import React from "react";
import "./Footer.scss";

const Footer = () => {
    const date = new Date();
    return (
        <footer className="footer">
            <div className="footer-cc-name">
                Циклова комісія комп'ютерних наук
            </div>
            <div className="footer-row">
                <div className="footer-logo footer-column">
                    <img className="footer-logo-img" src="/assets/images/logo_white.svg" alt="footer-logo" />
                </div>
                <div className="footer-column">
                    <p>Відокремлений структурний підрозділ</p>
                    <p>«Тернопільський фаховий коледж </p>
                    <p>Тернопільського національного технічного університету</p> 
                    <p>імені Івана Пулюя»</p>
                </div>
                <div className="footer-column">
                    <p>м. Тернопіль, вул. Л.Курбаса, 13, ауд. №102</p>
                    <p>+38 (0352) 28-18-11</p>
                    <p><a href="https://tk.te.ua/" target="_blank">www.tk.te.ua</a></p>
                    <p><a href="mailto:cs@tk.te.ua">cs@tk.te.ua</a></p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;