let observer = new IntersectionObserver(() => {});

let intro = document.querySelectorAll("p");

observer.observe(intro[0]);
