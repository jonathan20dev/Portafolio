import React from 'react'

const Data = () => {
    return (
        <div className="home__data">
            <h1 className="home__title">Jonathan Mendoza

            </h1>
            <h3 className="home__subtitle">Web Developer</h3>
            <p className="home__description">
                ¡Proactive student of computer engineering, with a lot of passion for web applications!.
            </p>

            <a href="#contact" className="button button--flex">Say Hello
                <svg xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"  
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className="button__icon">
                    <path strokeLinecap={"round"} strokeLinejoin={"round"} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
            </a>
        </div>
    )
}

export { Data }