//..........header scroll............//

$(document).ready(function () {
  function handleScroll() {
    let initialScroll = 0;
    $(window).scroll(function () {
      if ($(window).width() >= 992) {
        let finalScroll = $(this).scrollTop();
        if (finalScroll > initialScroll) {
          $(".nav-top").css("top", "-33px");
          $(".nav-btm").css("top", "0px");
        } else if (finalScroll === 0) {
          $(".nav-top").css("top", "0px");
          $(".nav-btm").css("top", "33px");
        } else {
          $(".nav-top").css("top", "0px");
          $(".nav-btm").css("top", "33px");
        }

        initialScroll = finalScroll;
      }
    });
  }

  // adjust nav-btm position for mob
  function adjustNavForScreenSize() {
    if ($(window).width() < 992) {
      $(".nav-btm").css("top", "0px");
      $(".nav-top").css("top", "0px");
    } else {
      $(".nav-btm").css("top", "33px");
      $(".nav-top").css("top", "0px");
    }
  }

  adjustNavForScreenSize();
  handleScroll();

  $(window).resize(function () {
    adjustNavForScreenSize();
  });

  // hide navbar after click on mobile
  $(".navbar-nav>li>a").on("click", function () {
    if ($(window).width() < 992) {
      $(".navbar-collapse").collapse("hide");
    }
  });
});

//................loader...............//

const loader = document.querySelector(".loader");

setTimeout(() => {
  loader.style.opacity = 0;
  loader.style.visibility = "hidden";
}, 1500);

//....................reload..............//

let lastCondition = window.innerWidth > 768 ? "above" : "below";

window.addEventListener("resize", function () {
  const currentCondition = window.innerWidth > 768 ? "above" : "below";

  if (currentCondition !== lastCondition) {
    lastCondition = currentCondition;
    location.reload();
  }
});
