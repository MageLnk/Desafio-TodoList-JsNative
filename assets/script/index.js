let arrayTodoList = [
  {
    id: "001",
    activity: "Ver películas",
    completed: false,
  },
  {
    id: "002",
    activity: "Ver anime",
    completed: false,
  },
  {
    id: "003",
    activity: "Ver series",
    completed: true,
  },
  {
    id: "004",
    activity: "Ver youtube",
    completed: false,
  },
];

const totalActivities = (elements) => {
  return elements.length;
};

const completedActivities = (elements) => {
  const newArray = elements.filter((e) => {
    return e.completed;
  });
  return newArray.length;
};

const loadActivities = (elements) => {
  for (let i = 0; i < elements.length; i++) {
    document.querySelector(".checkbox-container").innerHTML += `
    <div class="checkbox-div">
        <span class="id-activy">${elements[i].id}</span>
        <span class="task">${elements[i].activity}</span>
        <input type="checkbox" value=${elements[i].id} ${
      elements[i].completed && "checked"
    } onclick="addNewActivity()" />
    </div>
        `;
  }
};

const addNewActivity = () => {
  console.log("Esto funciona");
};

const ignorarEsto = () => {
  console.log(document.querySelectorAll("input"));
};

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".checkbox-container").innerHTML = "";
  document.querySelector("#total-activities").innerHTML = totalActivities(arrayTodoList);
  document.querySelector("#completed-activities").innerHTML = completedActivities(arrayTodoList);
  loadActivities(arrayTodoList);
});
