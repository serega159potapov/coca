import Swiper from 'swiper';
import 'swiper/css';

export const useHeroSlider = () => {
    new Swiper('.hero_slider', {
        slidesPerView: 2.5,
        spaceBetween: 32,
        loop: true,
        centeredSlides: false,
        navigation: {
            nextEl: '.hero_slider-btns',
            prevEl: '.hero_slider-btns',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 16,
                slidesOffsetBefore: 15,
                slidesOffsetAfter: 15,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24,
                slidesOffsetBefore: 15,
                slidesOffsetAfter: 15,
            },
            993: {
                slidesPerView: 2.5,
                spaceBetween: 32,
                slidesOffsetAfter: 0,
                centeredSlides: false,
            },
        },
    });
};
