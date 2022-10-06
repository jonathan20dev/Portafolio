import React from 'react'
import './certificates.css';
import { Data } from "./Data"
//swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Certificates = () => {
    return (
        <section className="certificates section" id="certificates">
            <h2 className="section__title">Certificates</h2>
            <span className="section__subtitle">Goals</span>

            <Swiper className="certificates__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    }
                }}
                modules={[Pagination]}
            >
                {Data.map(({ id, image, title, description }) => {
                    return (
                        <SwiperSlide className="certificates__card" key={id}>
                            <img src={image} alt="goal img" className="certificates__img" />
                            <h3 className="certificates__name">{title}</h3>
                            <p className="certificates__description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export { Certificates }

