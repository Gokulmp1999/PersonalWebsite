import React from "react";
import "./testiMonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import review from "../constants/Review";
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function TestiMonial() {

  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
  
      <Swiper className="container testimonials__container"  modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
    
      pagination={{ clickable: true }}
      >
        {review.map((review) => (
          
          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={review.avatar} alt="Avatar" />
            </div>
            <h5 className="client__name">{review.name}</h5>
            <small className="client__review">{review.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default TestiMonial;
