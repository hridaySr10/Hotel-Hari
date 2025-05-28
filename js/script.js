new Swiper(".hero-swiper", {
  slidesPerView: 1,
  direction: "horizontal", // Ensures horizontal scrolling
  centeredSlides: true,
  spaceBetween: 0,
  direction: "horizontal",
  // effect: "fade",
  speed: 3000,
  autoplay: {
    delay: 3000,
    reverseDirection: true,
    disableOnInteraction: false,
  },
  loop: true,
  lazyLoading: true,
  keyboard: {
    enabled: true,
  },
});

//.................tooltip................//

document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
//............counter..................//

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");
  const speed = 20; // Adjust speed for smoothness

  // Function to animate a single counter
  const animateNumber = (counter) => {
    const target = +counter.getAttribute("data-count");
    let current = 0;
    const increment = Math.ceil(target / speed); // Calculate increment

    const updateCount = () => {
      current += increment;
      if (current >= target) {
        counter.innerText = target; // Stop at the target number
      } else {
        counter.innerText = current;
        setTimeout(updateCount, 100); // Slow animation for better visibility
      }
    };

    updateCount();
  };

  // Observer to monitor when counters come into the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".count").forEach((counter) => {
            animateNumber(counter); // Animate the number
          });
          observer.unobserve(entry.target); // Stop observing after animation starts
        }
      });
    },
    { threshold: 0.8 } // Trigger when 80% of the element is visible
  );

  // Observe the parent container of all counters
  const counterBox = document.querySelector(".counter-box");
  if (counterBox) {
    observer.observe(counterBox);
  }
});

//..................chose-slider...........//
// img-box
new Swiper(".choseImgSwiper", {
  slidesPerView: 1,
  spaceBetween: 80,
  loop: true,
  centeredSlides: true,
  lazyLoading: true,
  speed: 3000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  allowTouchMove: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// text-box
new Swiper(".choseTextSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  allowTouchMove: true,
  grabCursor: true,
});

//.............gallery slider............//

new Swiper(".gallerySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  lazyLoading: true,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  allowTouchMove: true,
  grabCursor: true,
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    430: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

//...........service span color...........//

let spanColors = document.querySelectorAll(
  ".section-service .service-box-opt .nav-link .text p span"
);

let activeNavLinks = document.querySelectorAll(
  ".section-service .service-box-opt .nav-link"
);

activeNavLinks.forEach((activeNavLink) => {
  activeNavLink.addEventListener("click", function () {
    spanColors.forEach((spanColor) => {
      spanColor.classList.remove("activeSpan");
    });

    const spansInClickedNavLink = activeNavLink.querySelectorAll(
      ".section-service .service-box-opt .nav-link .text p span"
    );
    spansInClickedNavLink.forEach((span) => {
      span.classList.add("activeSpan");
    });
  });
});

//.................service details box open close..........//
let serviceBoxOptWrapper = document.querySelector(
  ".section-service .service-box-opt-wrapper"
);

let serviceBoxOptIcon = document.querySelector(
  ".section-service .service-box-opt-wrapper .open-close-btn i"
);

let serviceDetailsBtnBox = document.querySelector(
  ".section-service .service-box-opt-wrapper .open-close-btn .btn-box"
);

serviceDetailsBtnBox.addEventListener("click", function () {
  serviceBoxOptWrapper.classList.toggle("service-box-opt-wrapper-active");
  serviceBoxOptIcon.classList.toggle("detail-icon-active");
});

//..................blog slider.................//

new Swiper(".blogSwiper", {
  loop: true,
  centeredSlides: true,
  lazyLoading: true,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  allowTouchMove: true,
  touchRatio: 1.5,
  touchAngle: 45,
  threshold: 20,
  grabCursor: true,
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    430: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1.5,
      spaceBetween: 25,
    },
    1200: {
      slidesPerView: 1.8,
      spaceBetween: 25,
    },
  },
});

//................logo slider..............//

new Swiper(".logoSwiper", {
  slidesPerView: "auto",
  spaceBetween: 50,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 7000,
  freeMode: true,
  lazyLoading: true,
});

//............AOS.............//

var heroText = {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "bottom",
  duration: 1000,
  delay: 1550,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
};
ScrollReveal().reveal(".heroTextAOS", heroText);

var heroSpan = {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "bottom",
  rotate: { x: 0, y: 180, z: 0 },
  duration: 1000,
  delay: 1700,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
};
ScrollReveal().reveal(".heroSpanAOS", heroSpan);

var heroP = {
  distance: "60%",
  viewFactor: 0.2,
  origin: "bottom",
  duration: 1000,
  delay: 1600,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
};
ScrollReveal().reveal(".heroPAOS", heroP);

var heroBtnAOS = {
  distance: "70%",
  viewFactor: 0.2,
  origin: "bottom",
  duration: 1000,
  delay: 1650,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
};
ScrollReveal().reveal(".heroBtnAOS", heroBtnAOS);

var aboutImgBox = {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "right",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
};

ScrollReveal().reveal(".about-img-box", aboutImgBox);

// All btns

var aboutBtn = {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "bottom",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
};

ScrollReveal().reveal(".about-btn, .staff-btn", aboutBtn);

// fav rooms
var favRoom1 = {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "left",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
};

ScrollReveal().reveal(".fb-1", favRoom1);

var favRoom2 = {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "always",
  origin: "bottom",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
};

ScrollReveal().reveal(".fb-2", favRoom2);

var favRoom3 = {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "once",
  origin: "right",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
};

ScrollReveal().reveal(".fb-3", favRoom3);

// our services

var service1 = {
  distance: "50%",
  viewFactor: 0.2,
  delay: 300,
  useDelay: "once",
  origin: "right",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
};

ScrollReveal().reveal(".ni-1", service1);

var service2 = {
  distance: "50%",
  viewFactor: 0.2,
  delay: 300,
  useDelay: "once",
  origin: "right",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
};

ScrollReveal().reveal(".ni-2", service2);

var service3 = {
  distance: "50%",
  viewFactor: 0.2,
  delay: 300,
  useDelay: "once",
  origin: "right",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
};

ScrollReveal().reveal(".ni-3", service3);

var service4 = {
  distance: "50%",
  viewFactor: 0.2,
  delay: 300,
  useDelay: "once",
  origin: "right",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
};

ScrollReveal().reveal(".ni-4", service4);

// our staff

var staff1 = {
  distance: "50%",
  viewFactor: 0.2,
  delay: 600,
  useDelay: "once",
  origin: "left",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
};

ScrollReveal().reveal(".col-1", staff1);

var staff2 = {
  distance: "50%",
  viewFactor: 0.2,
  delay: 300,
  useDelay: "once",
  origin: "left",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
};

ScrollReveal().reveal(".col-2", staff2);

var staff3 = {
  distance: "50%",
  viewFactor: 0.2,
  delay: 300,
  useDelay: "once",
  origin: "right",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
};

ScrollReveal().reveal(".col-3", staff3);

var staff4 = {
  distance: "50%",
  viewFactor: 0.2,
  delay: 600,
  useDelay: "once",
  origin: "right",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
};

ScrollReveal().reveal(".col-4", staff4);

// gallery and blog

var galleryImg = {
  distance: "10%",
  viewFactor: 0.2,
  useDelay: "once",
  origin: "right",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
};

ScrollReveal().reveal(".gallerySwiper, .blogSwiper", galleryImg);

// heading and sub-heading

var heading = {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "once",
  origin: "bottom",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
};

ScrollReveal().reveal(".d-flex > h6, .d-flex h3", heading);

// booking-box

var bookingBox = {
  distance: "50%",
  viewFactor: 0.2,
  useDelay: "once",
  origin: "bottom",
  duration: 1000,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  opacity: 0,
  mobile: true,
};

ScrollReveal().reveal(".bookings-box", bookingBox);

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

  // Hide navbar after click on mobile
  $(".navbar-nav>li>a").on("click", function () {
    if ($(window).width() < 992) {
      $(".navbar-collapse").collapse("hide");
    }
  });
});

//................scroll-top............//

const contactBtn = document.querySelector(".contact-btn");
const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.opacity = "1";
    topBtn.style.visibility = "visible";
    topBtn.style.bottom = "6%";
    contactBtn.style.opacity = "1";
    contactBtn.style.visibility = "visible";
    contactBtn.style.transform = "rotateY(360deg)";
  } else {
    topBtn.style.opacity = "0";
    topBtn.style.visibility = "hidden";
    topBtn.style.bottom = "-20%";
    contactBtn.style.opacity = "0";
    contactBtn.style.visibility = "hidden";
  }
});
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//................loader...............//

const loader = document.querySelector(".loader");
let windowBody = document.querySelector("body");

setTimeout(() => {
  loader.style.opacity = 0;
  loader.style.visibility = "hidden";
}, 1500);

//.................modal copy text & timer to show............//

function copyToClipboard(element) {
  const text = element.innerText;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Text copied: " + text);
    })
    .catch((err) => {
      console.error("Error copying text: ", err);
    });
}

const modalBox = document.querySelector(".modal-box");
const modals = document.querySelector(".modal-box > .modals");
const body = document.querySelector("body");

setTimeout(() => {
  modalBox.style.visibility = "visible";
  modals.style.top = "0px";
  body.style.overflow = "hidden";
}, 12000);

const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", function () {
  modalBox.style.visibility = "hidden";
  modals.style.display = "none";
  body.style.overflow = "visible";
});

//....................book now modal................//
