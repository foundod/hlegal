import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../scss/style.scss";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

(function () {
  const isOpen = document.querySelector(".header__burger");
  const isClose = document.querySelector(".header__menu-close");
  const navigation = document.querySelector(".header__menu");

  if (isOpen && navigation) {
    isOpen.addEventListener("click", () => {
      navigation.classList.toggle("active");
    });
  }

  if (isClose && navigation) {
    isClose.addEventListener("click", () => {
      navigation.classList.remove("active");
    });
  }

  document.addEventListener("click", (event) => {
    if (
      navigation &&
      !navigation.contains(event.target) &&
      isOpen &&
      !isOpen.contains(event.target)
    ) {
      navigation.classList.remove("active");
    }
  });
})();

(function () {
  // Отримуємо всі елементи вкладок
  const tabs = document.querySelectorAll(".tabs__link");

  // Отримуємо всі елементи контенту, які відповідають вкладкам
  const contents = document.querySelectorAll(".tabs__content-text");

  // Для кожної вкладки в масиві "tabs" створюємо обробник події
  tabs.forEach((tab, index) => {
    // Додаємо подію на клік по вкладці
    tab.addEventListener("click", () => {
      // Видаляємо клас "active" у всіх вкладок та всіх елементів контенту
      tabs.forEach((n) => n.classList.remove("active"));
      contents.forEach((m) => m.classList.remove("active"));

      // Додаємо клас "active" до вибраної вкладки (та яка була натиснута)
      tab.classList.add("active");

      // Додаємо клас "active" до відповідного контенту, що відповідає вкладці
      contents[index].classList.add("active");
    });
  });
})();
