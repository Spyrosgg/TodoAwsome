import "./style.css";
import dataTestIn from "./pages/testData";

//testing data manually entered
const objArr = dataTestIn();

const content = document.querySelector("#content");
const projects = {
  inbox: []
};

//injects the objs into main #content---------
objArr.forEach((el) => {
  let todoObj = todoFactory(el);
  projects.inbox.push(todoObj);
  //console.log(todoObj);

  let todoDiv = createElement("div", "todo");
  let todo = renderObj(todoDiv, todoObj);
  content.appendChild(todo);
});

projectStorage("Cleaning");
projectStorage("Study");
projectStorage("Work");


console.log(projects);

// my Factories
//todo object factory
function todoFactory([title, description, dueDate, priority, notes]) {
  const date = new Date();
  const newdate = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  return {
    title,
    description,
    dateCreated: newdate,
    dueDate,
    priority,
    notes,
  };
}

// Poject Factory
function projectStorage(projectStorage) {
  projects[projectStorage] = [];
}

//Functions
//
function renderObj(element, input) {
  if (typeof input === "object") {
    let string = "";
    for (var prop in input) {
      string += `<i>${prop}</i> : ${input[prop]}</br>`;
    }
    element.innerHTML = string;
    return element;
  }
  console.log("Error: not an object");
}

function createElement(tagType, classDef) {
  const element = document.createElement(tagType);
  element.classList.add(classDef);
  return element;
}
