import "../css/01_grid.scss";

const colors = ["tomato", "red", "orange", "darkred"];
document.body.innerHTML = `<ul></ul>`;

let listItems = "";
for (let i = 0; i < 300; i++) {
  listItems += `<li data-id=${i} style="background-color:${
    colors[Math.floor(Math.random() * colors.length)]
  };"></li>`;
}

document.querySelector("body > ul").innerHTML += listItems;

const stylesToApply = {
  display: "grid",
  height: "100vh",
  gap: "2px",
  gridTemplateColumns: "repeat(20, 1fr)",
};

//styles toepassen
Object.assign(document.querySelector("ul").style, stylesToApply);

document.querySelectorAll("li").forEach((el) => {
  // debugger;
  el.onmouseover = function (e) {
    e.target.classList.add("big");
  };
  el.onmouseout = function (e) {
    e.target.classList.remove("big");
  };
  el.onclick = function (e) {
    console.log(e.target.dataset.id);
  };
});

// // document.querySelector("p").onclick() = function() {
// //     alert("test");
// // }

// document.querySelector("p").addEventListener("click", doeIets);
// document.querySelector("p").removeEventListener("click", doeIets);

// document.querySelector("p").addEventListener(
//   "click",
//   function () {
//     alert("test");
//   },
//   { once: true, capture: true }
// );

// document.querySelector("body p").onclick = function(e) {
//   e.target
// }
