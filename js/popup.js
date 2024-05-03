const popupPage = document.querySelector(".popup");
const popupClose = document.querySelector(".popup-close");
const scrollLock = document.querySelector(".page-body");

popupClose.addEventListener("click", () => {
  popupPage.classList.add("popup-exit");
});
