let todos = [
  {
    id: Math.random().toString(32).substring(2),
    text: "Gras afrijden",
    checked: false,
  },
  {
    id: Math.random().toString(32).substring(2),
    text: "TV kijken",
    checked: false,
  },
  {
    id: Math.random().toString(32).substring(2),
    text: "Den afwas doen",
    checked: true,
  },
];

function remove(idToRemove) {
  todos = todos.filter((todo) => idToRemove !== todo.id);
}
function check(idToCheck) {
  todos = todos.map((todo) => {
    if (todo.id === idToCheck) {
      todo.checked = !todo.checked;
    }
    return todo;
  });
}

const form = document.querySelector(".app__form");
const btn = document.querySelector(".app__form__button");
const input = document.querySelector(".app__form__input");
const ul = document.querySelector(".app__list");
const listTemplate = document.querySelector("#todo__item__template").innerHTML;

//als enter wordt gebruikt of op knop wordt geklikt
form.onsubmit = function (e) {
  e.preventDefault();
  if (input.value !== "") {
    input.classList.remove("app__form__input--error");
    todos.push({
      id: Math.random().toString(32).substring(2),
      text: input.value,
      checked: false,
    });
    input.value = "";
    render();
  } else {
    input.classList.add("app__form__input--error");
  }
};
input.onkeyup = function () {
  input.classList.remove("app__form__input--error");
};

function render() {
  ul.innerHTML = todos
    .map(function (el) {
      return listTemplate
        .replace("%TODOTEXT%", el.text)
        .replace("%TODOCHECK%", el.checked ? "checked" : "unchecked")
        .replace("%TODOID%", el.id);
    })
    .join("");
}

render();

ul.onclick = function (e) {
  if (e.target.classList.contains("ico--delete")) {
    //    console.dir(e.target.parentElement.dataset.id);
    remove(e.target.parentElement.dataset.id);
    render();
  }
  if (e.target.classList.contains("ico--check")) {
    check(e.target.parentElement.dataset.id);
    render();
  }
};
