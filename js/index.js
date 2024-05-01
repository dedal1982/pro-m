const swiper = new Swiper(".tours__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 3,
  spaceBetween: 20,
  // Navigation arrows
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
