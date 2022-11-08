let observer = new IntersectionObserver((e) => {
  e.forEach((i) => {
    i.target.style.opacity = 1;
  });
});

let intro = document.querySelectorAll(".intro");
