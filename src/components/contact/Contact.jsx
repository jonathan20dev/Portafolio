import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kqp0pok', 'template_nk6h518', form.current, 'ovlpfHhr7YE6zhNqs')
      e.target.reset()
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">jonathan20.dev@gmail.com</span>

              <a href="mailto:jonathan20.dev@gmail.com" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+506 50135801</span>

              <a href="https://api.whatsapp.com/send?phone=+50650135801&text=Hello, more information!" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>

              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">jonathan.mendoza</span>

              <a href="https://me.me/Jonathan.Mendoza.ST/" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">Name</label>
              <input type="text" name="name" className="contact__form-input" placeholder="Insert your name" />
            </div>
          

          
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">Mail</label>
              <input type="email" name="email" className="contact__form-input" placeholder="Insert your email" />
            </div>
          

          
            <div className="contact__form-div contact__form-area">
              <label htmlFor="" className="contact__form-tag">Project</label>
              <textarea placeholder="Write your project" className="contact__form-input" name="project" cols="30" rows="10"></textarea>
            </div>
            <button className="button button--flex">Send Message
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
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}

export { Contact }