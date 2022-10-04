import React from 'react'

const Data = () => {
    return (
        <div className="home__data">
            <h1 className="home__title">Jonathan
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={"1.5"} stroke="currentColor" className="home__hand">
  <path strokeLinecap={"round"} strokeLinejoin={"round"} d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" fill="#FFDD67"/>
</svg>



            </h1>
            <h3 className="home__subtitle">Frontend Developer</h3>
            <p className="home__description">
                Proactive student of computer engineering, with a lot of passion for the development of web applications
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