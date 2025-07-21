import Swiper from 'swiper';
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
            }
        }
    });
}