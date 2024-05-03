const burgerClick = document.querySelector(".header__burger");
const scrollLock = document.querySelector(".page-body");
const mobMenu = document.querySelector(".header__nav");

//открытие бургера
burgerClick.addEventListener("click", () => {
  burgerClick.classList.toggle("active");
  mobMenu.classList.toggle("active");
  scrollLock.classList.toggle("lock");
});

// Получаем все ссылки с классом 'header__link'
const links = document.querySelectorAll(".header__link");

// Перебираем все ссылки
links.forEach((link) => {
  // Добавляем обработчик событий на клик
  link.addEventListener("click", function (event) {
    // Удаляем класс 'active' у всех ссылок
    links.forEach((link) => {
      link.classList.remove("active");
    });

    // Добавляем класс 'active' к текущей ссылке
    this.classList.add("active");
  });
});

// document.querySelectorAll(".accordionTitle").forEach(function (item) {
//   item.addEventListener("click", function () {
//     this.nextElementSibling.classList.toggle("active");
//     this.nextElementSibling.style.display =
//       this.nextElementSibling.style.display === "none" ? "block" : "none";
//     this.classList.toggle("active");
//   });
// });
