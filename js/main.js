const toggleShowSidebar = () => {
  const sidebarContainer = document.querySelector("#sidebar-container");
  sidebarContainer.classList.toggle("show");
  document.body.classList.toggle("show");
  if (sidebarContainer.classList.contains("show"))
    document.body.style.overflow = "hidden";
  else document.body.style.overflow = "";
};

document
  .querySelector(".sidebar-opener")
  .addEventListener("click", toggleShowSidebar);

document
  .querySelector(".sidebar-closer")
  .addEventListener("click", toggleShowSidebar);

const isInViewportFull = (el) => {
  const rect = el.getBoundingClientRect();

  const isFull =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight + 700 ||
        document.documentElement.clientHeight + 700) &&
    rect.right <=
      (window.innerWidth + 700 || document.documentElement.clientWidth + 700);

  const isRight =
    rect.top >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth);

  const isLeft =
    rect.top >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth);

  return isFull || isRight || isLeft;
};

const fadeInContainers = document.querySelectorAll(".fade-in-container");
const slideInContainers = document.querySelectorAll(".slide-in-container");

const runEffects = () => {
  fadeInContainers.forEach((container) => {
    const elements = Array.from(container.children);
    elements.forEach((item, i) => {
      if (isInViewportFull(item)) {
        item.style.transitionDuration = (i + 1) * 0.5 + "s";
        item.classList.add("show");
      } else {
        item.classList.remove("show");
      }
    });
  });

  slideInContainers.forEach((container) => {
    const elements = Array.from(container.children);
    elements.forEach((item, i) => {
      if (isInViewportFull(item)) {
        item.style.transitionDuration = (i + 1) * 0.5 + "s";
        item.classList.add("show");
      } else {
        item.classList.remove("show");
      }
    });
  });
};

// Show Navbar
document.querySelector(".menu-trigger").addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("show");
});

// Eventos
window.addEventListener("load", runEffects);
window.addEventListener("resize", runEffects);
window.addEventListener("scroll", runEffects);
