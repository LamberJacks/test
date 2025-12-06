(function () {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    autoplay: {
      delay: 3000,
    },
    effect: "fade",
    speed: 600,
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
})();
