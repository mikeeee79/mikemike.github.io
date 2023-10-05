/*========== scroll reveal ==========*/
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(
  "nav, .menu h1, .gallery h1, .review h1, .order h1, .team h1",
  {
    origin: "top",
  }
);

ScrollReveal().reveal(
  ".menu_box, .gallery_image_box, .review_box, .team_box, .footer_tags",
  {
    origin: "bottom",
  }
);

ScrollReveal().reveal(".men_text, section p, .main_btn, .image, .order_image", {
  origin: "left",
});

ScrollReveal().reveal(
  ".main_image, .about_text, .about_btn, .input, .order_btn",
  {
    origin: "right",
  }
);
