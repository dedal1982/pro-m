const accordBtn = document.querySelector(".accordion-header");
const accordContent = document.querySelector(".accordion-content");
const accordBtnImg = document.querySelector(".accordion-button svg");
const accordBtnBox = document.querySelector(".accordion-button");

accordBtn.addEventListener("click", () => {
  accordContent.classList.toggle("open");
  accordBtnImg.classList.toggle("open");
  accordBtnBox.classList.toggle("open");
});
