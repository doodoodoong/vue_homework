ScrollOut();

let item = document.querySelectorAll(".board_item");

let img_item = document.querySelectorAll("img");

item[0].addEventListener("click", function () {
  img_item[0].style.width = "100%";
  img_item[0].style.height = "100%";
  img_item[0].style.transitionDuration = "1s";
});
