import React from 'react'
import './services.css';

const Services = () => {
    const [toggleState, setToggleState] = React.useState(0)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services__container container grid">

            <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Website <br/> creator</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Website creator</h3>
                            <p className="services__modal-description">
                            I have more than 2 years of experience creating websites, which meet the requirements requested by the client.
                            </p>

                            <ul className="services__modal-services grid">

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                    I have familiarity with HTML, CSS, JavaScript skills, React, Angular, Node and many design libraries.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                    Corporate website design and muckups
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                    I have experience with flexible project lifecycles
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                    I have experience with agile methodologies.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Product <br /> Designer</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Product Designer</h3>
                            <p className="services__modal-description">
                            I have experience in the whole process of creating usable products and experiences, always thinking of possible solutions.
                            </p>

                            <ul className="services__modal-services grid">

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                    I create the best version of a requested product, with the time and resources available.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                    I define scenarios and build interaction patterns.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                    I use tools that help to study user behavior (UX).
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                    I create UI prototypes and product logic with wireframes.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                    I set up and analyze different tests to verify that this is the best product that can be offered.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">UI/UX <br /> Designer</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">UI/UX Designer</h3>
                            <p className="services__modal-description">
                            I have experience in improving the total immersion of a user when navigating a digital space.
                            </p>

                            <ul className="services__modal-services grid">

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                    I create experiences that meet the needs of customers when they interact with the company's web platform.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                    I improve the perception of the brand and its proximity to the customer.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                    As a result of the aforementioned, I generate a better link between the product and the user.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                
            </div>

        </section>
    )
}

export { Services }