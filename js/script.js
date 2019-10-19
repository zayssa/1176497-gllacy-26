if (document.querySelector("body.index")) {
  document
    .querySelector(".js-feedback-open")
    .addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      document.querySelector(".js-feedback-modal").classList.add("shown");
      setTimeout(function() {
        document.querySelector(".js-feedback-modal").style.cssText =
          "opacity: 1;";
      }, 1);
      return false;
    });
  document
    .querySelector(".js-feedback-close")
    .addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      document.querySelector(".js-feedback-modal").style.cssText =
        "opacity: 0;";
      setTimeout(function() {
        document.querySelector(".js-feedback-modal").classList.remove("shown");
      }, 500);
      return false;
    });

  var carouselTotal = document.querySelectorAll(".js-carousel li").length;
  var carouselNav = document.querySelector(".js-carousel-nav");
  carouselNav.innerHTML = "";
  for (var i = 0; i < carouselTotal; i++) {
    carouselNav.innerHTML +=
      // prettier-ignore
      "<button type=\"button\" value=\"" + i + "\" aria-label=\"Спецпредложение " + (i + 1) + "\"></button>";
  }
  document
    .querySelector(".js-carousel-nav button:first-of-type")
    .classList.add("active");

  var carouselTO;
  var carouselCurrent = 0;
  var carouselSlideTo = function(id) {
    carouselCurrent = +id;
    if (carouselCurrent == carouselTotal) {
      carouselCurrent = 0;
    }
    document
      .querySelector(".js-carousel .carousel-item.active")
      .classList.remove("active");
    var carouselCurrentSlide = document.querySelector(
      ".js-carousel .carousel-item:nth-child(" + (carouselCurrent + 1) + ")"
    );
    carouselCurrentSlide.classList.add("active");
    var bgColor = carouselCurrentSlide.getAttribute("data-color");
    document.querySelector("body").style = "background-color: " + bgColor + ";";
    document
      .querySelector(".js-carousel-nav button.active")
      .classList.remove("active");
    document
      .querySelector(
        ".js-carousel-nav button:nth-child(" + (carouselCurrent + 1) + ")"
      )
      .classList.add("active");
    carouselTO = setTimeout(function() {
      carouselSlideTo(carouselCurrent + 1);
    }, 5000);
  };
  carouselSlideTo(0);
  var carouselButtons = document.querySelectorAll(".js-carousel-nav button");
  for (i = 0; i < carouselButtons.length; i++) {
    carouselButtons[i].addEventListener("click", function() {
      clearTimeout(carouselTO);
      carouselSlideTo(this.value);
      this.blur();
    });
  }

  var feedbackForm = document.querySelector("#feedbackForm");
  feedbackForm.addEventListener("submit", function(e) {
    if (
      !document.querySelector("#feedbackName").value ||
      !document.querySelector("#feedbackEmail").value ||
      !document.querySelector("#feedbackText").value
    ) {
      e.preventDefault();
      document.querySelector(".js-feedback-modal").classList.add("form-error");
      setTimeout(function() {
        document
          .querySelector(".js-feedback-modal")
          .classList.remove("form-error");
      }, 600);
    }
  });
}

var authForm = document.querySelector("#authForm");
authForm.addEventListener("submit", function(e) {
  if (
    !document.querySelector("#authEmail").value ||
    !document.querySelector("#authPassword").value
  ) {
    e.preventDefault();
    document.querySelector("#authPopover").classList.add("form-error");
    setTimeout(function() {
      document.querySelector("#authPopover").classList.remove("form-error");
    }, 600);
  }
});
