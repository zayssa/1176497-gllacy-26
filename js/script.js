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
var carouselCurrent = 0;
setInterval(function() {
  carouselCurrent++;
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
}, 2000);

console.log(carouselTotal);
