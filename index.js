  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'masonry'
  });
  
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  var swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is <= 767px
        768: {
            slidesPerView: 2,
            spaceBetween: 50
        },
        // when window width is <= 991px
        992: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    }
});

