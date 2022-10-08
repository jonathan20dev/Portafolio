import React from 'react'
import './qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] = React.useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <section className="qualification section" id="portafolio">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ?
                        "qualification__content qualification__content-active" :
                        "qualification__content"}
                    >

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Computer Engineering</h3>
                                <span className="qualification__subtitle">Tecnológico de Costa Rica</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2020 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>
                        <div className="qualification__data">

                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">Platzi & Udemy courses</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2019 - Present
                                </div>
                            </div>
                        </div>
                        
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Soft Skills and Leadership for Transformation</h3>
                                <span className="qualification__subtitle">John C. Maxwell program</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                        <div className="qualification__data">

                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Course Assistant: Taller de programación</h3>
                                <span className="qualification__subtitle">Tecnológico de Costa Rica</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2022
                                </div>
                            </div>
                        </div>
                        
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Data structures Tutor</h3>
                                <span className="qualification__subtitle">Tecnológico de Costa Rica</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                    </div>


                    <div className={toggleState === 2 ?
                        "qualification__content qualification__content-active" :
                        "qualification__content"}>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Frontend Developer</h3>
                                <span className="qualification__subtitle">Asociación Mariano Juvenil</span>
                                <span className="qualification__subtitle">With Golabs supervision</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>


                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">QA Intern</h3>
                                <span className="qualification__subtitle">Nativo</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2022 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">IT Developer</h3>
                                <span className="qualification__subtitle">Comunidad Aplicaciones Móviles</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2021 - 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Frontend Developer</h3>
                                <span className="qualification__subtitle">Comunidad Aplicaciones Móviles</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2020 - 2022
                                </div>
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Android Developer</h3>
                                <span className="qualification__subtitle">Comunidad Aplicaciones Móviles</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2020 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>




                    </div>
                </div>
            </div>
        </section>
    )
}

export { Qualification }