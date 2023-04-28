import "../css/03_mobile_menu.scss";

document.querySelector("nav").onclick = function (e) {
  const el = document.querySelector("main");
  if (el.classList.contains("collapsed")) {
    el.classList.remove("collapsed");
  } else {
    el.classList.add("collapsed");
  }
};
