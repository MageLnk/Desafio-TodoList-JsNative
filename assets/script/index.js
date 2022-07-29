let arrayTodoList = [
  {
    id: 001,
    activity: "Ver películas",
    completed: false,
  },
  {
    id: 002,
    activity: "Ver anime",
    completed: false,
  },
  {
    id: 003,
    activity: "Ver series",
    completed: true,
  },
  {
    id: 004,
    activity: "Ver youtube",
    completed: false,
  },
];

const totalActivities = (elements) => {
  return elements.length;
};

/*
const loadActivities = (elements) => {
  for (let i = 0; i < elements.length; i++) {
    console.log(elements);
    document.querySelector(".checkbox-container").innerHTML += `
    <div class="checkbox-div">
        <span class="id-activy">${elements[i].id}</span>
        <span class="task">${elements[i].activity}</span>
        <input type="checkbox" ${elements[i].completed && "checked"} />
    </div>
        `;
  }
};
*/
const ignorarEsto = () => {
  console.log(document.querySelector("#4"));
};

window.addEventListener("DOMContentLoaded", () => {
  //document.querySelector(".checkbox-container").innerHTML = "";
  document.querySelector("#total-activities").innerHTML = totalActivities(arrayTodoList);
  loadActivities(arrayTodoList);
});
