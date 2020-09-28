$(function () {
  var $myCarousel = $('.myCarousel')
  var $carouselBlobk = $('.carouselBlobk')
  var slideLength = 0
  var timer = null

  function scrollStart () {
    timer = setInterval(() => {
      if (slideLength === -3000) {
        slideLength = 0
      }
      slideLength -= 1
      $myCarousel.css('left', slideLength + 'px')
    }, 20);
  }

  function scrollEnd(){
    clearInterval(timer)
  }

  $carouselBlobk.mouseover(function () {
    scrollEnd()
  })

  $carouselBlobk.mouseout(function () {
    scrollStart()
  })

  scrollStart()
})()