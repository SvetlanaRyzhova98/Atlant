(function () {
  const hiroLink = document.querySelector(".hiro__background-link");
  const hiroBg = document.querySelector(".hiro");
  hiroLink.addEventListener("click", (event) => {
    event.preventDefault();
    const isBg2 = hiroBg.classList.contains("hiro__background-2");
    if (isBg2) {
      hiroBg.classList.remove("hiro__background-2");
      hiroBg.classList.add("hiro__background-1");
    } else {
      hiroBg.classList.remove("hiro__background-1");
      hiroBg.classList.add("hiro__background-2");
    }
  });
})();
