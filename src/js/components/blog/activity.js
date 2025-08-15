import Swiper from 'swiper';
import 'swiper/css';

export const useActivitySlider = () => {
    const swiper = new Swiper('.activity_slider', {
        slidesPerView: 2.5,
        spaceBetween: 32,
        loop: true,
        centeredSlides: false,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            993: {
                slidesPerView: 2.5,
                spaceBetween: 32,
                centeredSlides: false,
            },
        },
    });
    // сохраняем экземпляр для последующих обновлений после фильтрации
    window.activitySwiper = swiper;
    return swiper;
};

// Инициализация слайдера при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    useActivitySlider();

    // Обработка кликов по кнопкам
    document.querySelectorAll('.activity_tabs-button').forEach((button) => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Удаляем класс active у всех кнопок
            document
                .querySelectorAll('.activity_tabs-button')
                .forEach((btn) => {
                    btn.classList.remove('activity_tabs-button-active');
                });

            // Добавляем класс active к нажатой кнопке
            button.classList.add('activity_tabs-button-active');

            // Фильтр слайдов: показываем только подходящие слайды
            const slides = document.querySelectorAll('.activity_article');
            slides.forEach((slide) => {
                const isMatch =
                    filter === 'all' ||
                    slide.getAttribute('data-category') === filter;
                slide.classList.toggle('active', isMatch);
                slide.style.display = isMatch ? '' : 'none';
            });

            // Обновляем Swiper после изменения DOM
            if (
                window.activitySwiper &&
                typeof window.activitySwiper.update === 'function'
            ) {
                window.activitySwiper.update();
                window.activitySwiper.slideTo(0);
            }
        });
    });

    // Инициализация: показываем все слайды при загрузке и добавляем класс active к первой кнопке
    const firstButton = document.querySelector('.activity_tabs-button');
    firstButton.classList.add('activity_tabs-button-active');
    document.querySelectorAll('.activity_article').forEach((slide) => {
        slide.classList.add('active');
        slide.style.display = '';
    });
});
