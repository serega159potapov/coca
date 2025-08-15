import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useArticlesSlider = () => {
    const swiper = new Swiper('.articles_slider', {
        modules:[Navigation],
        slidesPerView: 2.5,
        spaceBetween: 32,
        loop: true,
        centeredSlides: false,
        navigation: {
            prevEl: '.articles_top-btn--prev',
            nextEl: '.articles_top-btn--next',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
            520: {
                slidesPerView: 1.5,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            993: {
                slidesPerView: 2.5,
                spaceBetween: 32,

            },
        },
    });
    // сохраняем экземпляр для последующих обновлений после фильтрации
    window.activitySwiper = swiper;
    return swiper;
};
