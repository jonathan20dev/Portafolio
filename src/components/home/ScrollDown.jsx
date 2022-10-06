import React from 'react'

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
         <span className="home__scroll-name">Scroll Down</span>
         <i className="uil uil-arrow-down"></i>
      </a>
    </div>
  )
}

export { ScrollDown }