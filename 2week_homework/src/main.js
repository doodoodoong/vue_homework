ScrollOut();

let item = document.querySelectorAll(".board_item");

let img_item = document.querySelectorAll("img");

item[0].addEventListener("mouseover", function () {
  img_item[0].style.width = "100%";
  img_item[0].style.height = "100%";
  img_item[0].style.transitionDuration = "1s";
});
item[1].addEventListener("mouseover", function () {
  img_item[1].style.width = "100%";
  img_item[1].style.height = "100%";
  img_item[1].style.transitionDuration = "1s";
});
item[2].addEventListener("mouseover", function () {
  img_item[2].style.width = "100%";
  img_item[2].style.height = "100%";
  img_item[2].style.transitionDuration = "1s";
});
item[3].addEventListener("mouseover", function () {
  img_item[3].style.width = "100%";
  img_item[3].style.height = "100%";
  img_item[3].style.transitionDuration = "1s";
});
item[4].addEventListener("mouseover", function () {
  img_item[4].style.width = "100%";
  img_item[4].style.height = "100%";
  img_item[4].style.transitionDuration = "1s";
});
item[5].addEventListener("mouseover", function () {
  img_item[5].style.width = "100%";
  img_item[5].style.height = "100%";
  img_item[5].style.transitionDuration = "1s";
});

item[0].addEventListener("mouseout", function () {
  img_item[0].style.width = "0%";
  img_item[0].style.transitionDuration = "1s";
});

item[1].addEventListener("mouseout", function () {
  img_item[1].style.width = "0%";
  img_item[1].style.transitionDuration = "1s";
});

item[2].addEventListener("mouseout", function () {
  img_item[2].style.width = "0%";
  img_item[2].style.transitionDuration = "1s";
});

item[3].addEventListener("mouseout", function () {
  img_item[3].style.width = "0%";
  img_item[3].style.transitionDuration = "1s";
});

item[4].addEventListener("mouseout", function () {
  img_item[4].style.width = "0%";
  img_item[4].style.transitionDuration = "1s";
});

item[5].addEventListener("mouseout", function () {
  img_item[5].style.width = "0%";
  img_item[5].style.transitionDuration = "1s";
});
