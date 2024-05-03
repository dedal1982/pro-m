// const burgerClick = document.querySelector(".header__burger");
// const scrollLock = document.querySelector(".page-body");
// const mobMenu = document.querySelector(".header__nav");

// //открытие бургера
// burgerClick.addEventListener("click", () => {
//   burgerClick.classList.toggle("active");
//   mobMenu.classList.toggle("active");
//   scrollLock.classList.toggle("lock");
// });

// // Получаем все ссылки с классом 'header__link'
// const links = document.querySelectorAll(".header__link");

// // Перебираем все ссылки
// links.forEach((link) => {
//   // Добавляем обработчик событий на клик
//   link.addEventListener("click", function (event) {
//     // Удаляем класс 'active' у всех ссылок
//     links.forEach((link) => {
//       link.classList.remove("active");
//     });

//     // Добавляем класс 'active' к текущей ссылке
//     this.classList.add("active");
//     mobMenu.classList.remove("active");
//     burgerClick.classList.remove("active");
//   });
// });
//--------------------------------------
document.getElementById("openPopup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});
