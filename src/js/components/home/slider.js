import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useInsightSlider = () => {
    new Swiper('.insight_slider' , {
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: true,
        centeredSlides: true,
        breakpoints: {
            993: {
                centeredSlides: false,
            },
        },
    });
};

export const useTestimonialsSlider = () => {
    new Swiper('.testimonials_slider',{
        modules:[Navigation],
        slidesPerView: 'auto',
        spaceBetween: 22,
        loop: true,
        navigation: {
            prevEl: '.testimonials_btn--prev',
            nextEl: '.testimonials_btn--next',
        },
    })
}

