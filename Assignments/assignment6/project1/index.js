
  const nav = document.querySelector("nav");
  window.addEventListener("scroll" , () => {
    if (window.scrollY > 50) {
      nav.classList.add("active-1");
    } else {
      nav.classList.remove("active-1");
    }
  });