$(document).ready(function () {
  console.log('The DOM is now loaded and can be manipulated');
  $('.slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});
