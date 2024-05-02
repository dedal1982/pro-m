const burgerClick = document.querySelector(".header__burger");
const scrollLock = document.querySelector(".page-body");
const mobMenu = document.querySelector(".header__nav");

//открытие бургера
burgerClick.addEventListener("click", () => {
  burgerClick.classList.toggle("active");
  mobMenu.classList.toggle("active");
  scrollLock.classList.toggle("lock");
});
