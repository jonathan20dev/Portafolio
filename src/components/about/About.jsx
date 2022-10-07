import React from 'react'
import './about.css';
import AboutImg from "../../assets/iprofile.jpg"
import { Info } from './Info';
import CV from "../../assets/JonathanMendozaCV.pdf"


const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="about_img" className="about__img" />
                <div className="about__data">
                    <Info />
                    <p className="about__description">Web developer, I create websites with UI/UX user interface, I have years of experience creating scalable projects of all kinds that you can find in my GitHub profile: <a href="https://github.com/jonathan20dev">jonathan20dev</a> </p>

                    <a download="" href={CV} className="button button--flex">Download CV
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="button__icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" fill="var(--container-color)"/>
                        </svg>

                    </a>
                </div>
            </div>
        </section>
    )
}

export { About }