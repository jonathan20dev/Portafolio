import React from 'react'
import "./footer.css"


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Mendoza</h1>

                <ul className="footer__list">
                    <li><a href="#about" className="footer__link">About</a></li>
                    <li><a href="#portafolio" className="footer__link">Qualification</a></li>
                    <li><a href="#certificates" className="footer__link">Cetificates</a></li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.facebook.com/Jonathan.Mendoza.ST/" className="footer__social-link" target="_blank"> <i className="bx bxl-facebook"></i> </a>
                    <a href="https://www.instagram.com/jonathan_19y/" className="footer__social-link" target="_blank"> <i className="bx bxl-instagram"></i> </a>
                    <a href="https://twitter.com/Jonatha08655055" className="footer__social-link" target="_blank"> <i className="bx bxl-twitter"></i> </a>
                </div>
                <span className="footer__copy">
                    &#169; Elemental. All rigths reserved
                </span>
            </div>
        </footer>
    )
}

export { Footer }