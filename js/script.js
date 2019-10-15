if (document.querySelector("body.index")) {
  document
    .querySelector(".js-feedback-open")
    .addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log(e);
      document.querySelector(".js-feedback-modal").classList.add("shown");
      return false;
    });
  document
    .querySelector(".js-feedback-close")
    .addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log(e);
      document.querySelector(".js-feedback-modal").classList.remove("shown");
      return false;
    });

  var carouselTotal = document.querySelectorAll(".js-carousel li").length;
  var carouselNav = document.querySelector(".js-carousel-nav");
  carouselNav.innerHTML = "";
  for (var i = 0; i < carouselTotal; i++) {
    carouselNav.innerHTML +=
      '<button type="button" value="' + i + '"></button>';
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
    document.querySelector(".js-carousel .carousel-item:first-child").style =
      "margin-left: -" + carouselCurrent * 100 + "%";
    var bgColor = document
      .querySelector(
        ".js-carousel .carousel-item:nth-child(" + (carouselCurrent + 1) + ")"
      )
      .getAttribute("data-color");
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
}
