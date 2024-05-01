const swiper = new Swiper(".tours__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 3,
  spaceBetween: 40,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});
