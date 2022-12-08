$(function () {
  $('.menu__list').on('click', 'a', function (event) {
    event.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
  })

  $('.slider-blog__inner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  })

  $('.menu__btn,.menu__list').on('click', function () {
    $('.header__top-inner').toggleClass('header__top-inner--active')
  })

  var mixer = mixitup('.gallary__content', {
    animation: {
      easing: 'ease-in-out',
      duration: 500,
      effects: 'rotateY(-25deg) fade',
      perspectiveDistance: '2000px',
    },
  })
})
