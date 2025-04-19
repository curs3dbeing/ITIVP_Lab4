import React from 'react';
//import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footerContainer">
                <div className="productsFooter">
                    GPM Продукты
                    <span className="footerLinks">GPM Ссылка</span>
                    <span className="footerLinks">GPM Link</span>
                </div>
                <div className="legalFooter">
                    Правила пользования
                    <span className="footerLinks">Соглашения</span>
                </div>
                <div className="appFooter">
                    Приложение
                </div>
            </div>
            <div className="footerCopyright">Copyright © 2025 All rights reserved - Gopop.me</div>
        </footer>
    )
}

export default Footer;