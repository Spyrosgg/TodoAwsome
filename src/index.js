import "./style.css";

const content = document.querySelector("#content");
const inbox = [];

const objArr = [
  [
    "1my first title",
    "this is thesting ground",
    "2022-10-22",
    1,
    "Some notes go here. More notes",
  ],
  [
    "2my second title",
    "whatnot",
    "2022-05-12",
    2,
    "Some notes go here. More notes",
  ],
  [
    "3my third title",
    "whatever you want",
    "2022-10-22",
    3,
    "Some notes go here. More notes",
  ],
];

objArr.forEach((el) => {
  let objTodo = todoFactory(el);
  console.log(objTodo);
  let todo = componentDiv(["div", "todo", objTodo]);
  content.appendChild(todo);
});

function todoFactory([title, description, dueDate, priority, notes]) {
  const date = new Date();
  const newdate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  
  return {
    title,
    description,
    dateCreated: newdate,
    dueDate,
    priority,
    notes,
  };
}

function componentDiv([tagType, classDef, input]) {
  const element = document.createElement(tagType);
  element.classList.add(classDef);

  if (typeof input === "object") {
    let string = "";
    for (var prop in input) {
      string += `<i>${prop}</i> : ${input[prop]}</br>`;
    }
    element.innerHTML = string;
    return element;
  }
  element.textContent = input;

  return element;
}
