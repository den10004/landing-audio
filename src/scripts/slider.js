/*var swiper = new Swiper(".sound__slider", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 65,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 1.5,
    },
    425: {
      slidesPerView: 2,
    },
    1300: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    1401: {
      slidesPerView: 5,
      spaceBetween: 65,
    },
  },
  navigation: {
    prevEl: ".cardsSlider-button-prev",
    nextEl: ".cardsSlider-button-next",
  },
});

var swiper1 = new Swiper(".comments__slider", {
  loop: true,
  slidesPerView: 1,

  navigation: {
    prevEl: ".comments-button-prev",
    nextEl: ".comments-button-next",
  },
});
*/ // slider.js
import Swiper from "swiper";
import { Navigation } from "swiper/modules"; // Импортируйте Navigation из swiper/modules
import "swiper/css";
import "swiper/css/navigation"; // Подключите стили для Navigation

document.addEventListener("DOMContentLoaded", () => {
  // Инициализация первого слайдера
  const swiper = new Swiper(".sound__slider", {
    modules: [Navigation], // Укажите Navigation как модуль
    loop: true,
    slidesPerView: 5,
    spaceBetween: 65,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      400: {
        slidesPerView: 1.5,
      },
      425: {
        slidesPerView: 2,
      },
      1300: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      1401: {
        slidesPerView: 5,
        spaceBetween: 65,
      },
    },
    navigation: {
      prevEl: ".cardsSlider-button-prev",
      nextEl: ".cardsSlider-button-next",
    },
  });

  // Инициализация второго слайдера
  const swiper1 = new Swiper(".comments__slider", {
    modules: [Navigation], // Укажите Navigation как модуль
    loop: true,
    slidesPerView: 1,
    navigation: {
      prevEl: ".comments-button-prev",
      nextEl: ".comments-button-next",
    },
  });
});
