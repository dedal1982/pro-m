//-------------------------------------
const popupPage = document.querySelector(".popup");
const popupForm = document.querySelector(".popup-form");
const popupClose = document.querySelectorAll(".popup-close");
const popupMainImage = document.querySelector(".element-m-img");
const popupTitle = document.querySelector(".element-title");
const popupParagraph = document.querySelector(".element-paragraph");
const popupPrice = document.querySelector(".element-price");
const buttonSubmit = document.querySelectorAll(".general-button");

document.addEventListener("DOMContentLoaded", function () {
  const elementsWithClass = document.querySelectorAll(".element");

  elementsWithClass.forEach((element) => {
    element.addEventListener("click", function (event) {
      event.stopPropagation();
      popupPage.classList.add("popup-open");
      const tImageSrc = this.querySelector(".t-image").src;
      const slideSubtitle = this.querySelector(".slide-subtitle").textContent;
      const paragraphText = this.querySelector(".paragraph").textContent;
      const priceText = this.querySelector(".t-price").id;

      popupMainImage.src = tImageSrc;
      popupTitle.textContent = slideSubtitle;
      popupParagraph.textContent = paragraphText;

      popupPrice.textContent = priceText;
    });
  });
});

popupClose.forEach((element) => {
  element.addEventListener("click", function (event) {
    event.stopPropagation();
    popupPage.classList.remove("popup-open");
    popupForm.classList.remove("popup-form-open");
  });
});

buttonSubmit.forEach((element) => {
  element.addEventListener("click", function (event) {
    event.stopPropagation();
    popupPage.classList.remove("popup-open");
    popupForm.classList.add("popup-form-open");
  });
});