import Swiper from 'swiper';
import 'swiper/css';

export const useOurTeamSlider = () => {
    new Swiper('.our-team_slider', {
        slidesPerView: 2.5,
        spaceBetween: 16,
        loop: true,
        centeredSlides: false,
        navigation: {
            nextEl: '.our-team_slider-btns',
            prevEl: '.our-team_slider-btns',
        },
        breakpoints: {
            320: {
                slidesPerView: 1.2,
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
                slidesPerView: 3,
                spaceBetween: 24,
                slidesOffsetAfter: 0,
                centeredSlides: false,
            },
        },
    });
};
