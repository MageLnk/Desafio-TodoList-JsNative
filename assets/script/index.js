let arrayTodoList = [
  {
    id: 1,
    activity: "Ver películas",
    completed: false,
  },
  {
    id: 2,
    activity: "Ver anime",
    completed: false,
  },
  {
    id: 3,
    activity: "Ver series",
    completed: true,
  },
  {
    id: 4,
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
  document.querySelector("#total-activities").innerHTML = totalActivities(arrayTodoList);
  document.querySelector(".checkbox-container").innerHTML = "";
  for (let i = 0; i < elements.length; i++) {
    document.querySelector(".checkbox-container").innerHTML += `
    <div class="checkbox-div">
        <span class="id-activy">${elements[i].id}</span>
        <span class="task">${elements[i].activity}</span>
        <input type="checkbox" value=${elements[i].id} ${
      elements[i].completed && "checked"
    } onclick="addNewActivity()" />
        <span class="delete-checkbox" onclick="ignorarEsto()">X</span>
    </div>
        `;
  }
};

const ignorarEsto = () => {
  console.log("Ignora esto");
};

// Prevent default
document.getElementById("preventDefault").addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = document.querySelector("#input-new-activity").value;
  if (!inputValue) {
    return alert("Escriba un valor por favor");
  }
  const newObject = {
    id: arrayTodoList.length + 1,
    activity: inputValue,
    completed: false,
  };
  arrayTodoList.push(newObject);
  document.querySelector("#input-new-activity").value = "";
  loadActivities(arrayTodoList);
});

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#completed-activities").innerHTML = completedActivities(arrayTodoList);
  loadActivities(arrayTodoList);
});
