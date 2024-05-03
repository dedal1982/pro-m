//-------------------------------------
const popupPage = document.querySelector(".popup");
const popupClose = document.querySelector(".popup-close");
const popupMainImage = document.querySelector(".element-m-img");
const popupTitle = document.querySelector(".element-title");
const popupParagraph = document.querySelector(".element-paragraph");

document.addEventListener("DOMContentLoaded", function () {
  const elementsWithClass = document.querySelectorAll(".element");

  elementsWithClass.forEach((element) => {
    element.addEventListener("click", function (event) {
      event.stopPropagation();
      popupPage.classList.add("popup-open");
      const tImageSrc = this.querySelector(".t-image").src;
      const slideSubtitle = this.querySelector(".slide-subtitle").textContent;
      const paragraphText = this.querySelector(".paragraph").textContent;

      popupMainImage.src = tImageSrc;
      popupTitle.textContent = slideSubtitle;
      popupParagraph.textContent = paragraphText;
    });
  });
});

popupClose.addEventListener("click", () => {
  popupPage.classList.remove("popup-open");
});
