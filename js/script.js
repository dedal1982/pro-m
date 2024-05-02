document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      const accordionContent =
        accordionItem.querySelector(".accordion-content");

      if (header.getAttribute("aria-expanded") === "false") {
        header.setAttribute("aria-expanded", "true");
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        header.setAttribute("aria-expanded", "false");
        accordionContent.style.maxHeight = "0";
      }
    });
  });
});
