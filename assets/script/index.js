let allIds = [];
const createId = (ids) => {
  let createRandomNumber = Math.floor(Math.random() * 1000);
  for (i = 0; i < ids.length; i++) {
    if (createRandomNumber === ids[i]) {
      createRandomNumber = Math.floor(Math.random() * 1000);
      i = -1;
    }
  }
  allIds.push(createRandomNumber);
  return createRandomNumber;
};
let arrayTodoList = [
  {
    id: createId(allIds),
    activity: "Ver películas",
    completed: false,
  },
  {
    id: createId(allIds),
    activity: "Ver anime",
    completed: false,
  },
  {
    id: createId(allIds),
    activity: "Ver series",
    completed: true,
  },
  {
    id: createId(allIds),
    activity: "Ver youtube",
    completed: false,
  },
];

const totalActivities = (elements) => {
  document.querySelector("#total-activities").innerHTML = elements.length;
  return;
};

const totalCompletedActivities = (elements) => {
  document.querySelector("#completed-activities").innerHTML = "";
  const newArray = elements.filter((e) => {
    return e.completed;
  });
  document.querySelector("#completed-activities").innerHTML = newArray.length;
  return;
};

const deleteActivity = (element) => {
  const newArray = arrayTodoList.filter((e) => {
    return !(e.id === element);
  });
  arrayTodoList = newArray;
  loadActivities(arrayTodoList);
};

const handleClickOnCheckbox = (id) => {
  const arrayWithAllCheckboxs = Object.values(document.querySelectorAll("input")).filter((e) => {
    return e.type === "checkbox";
  });
  const findCheckbox = arrayWithAllCheckboxs.filter((e) => {
    return +e.value === id;
  });

  console.log("final", findCheckbox[0].checked);
  // Al final, por alguna razón, el .checked no funciona ya que el ID no funciona.
  // En honor al tiempo, lo haré con selectorAll
  //console.log("Ola k ase", document.querySelectorAll("input"));
  //console.log("Y este", document.getElementById(`${id}`).checked);
};

const loadActivities = (elements) => {
  totalActivities(arrayTodoList);
  totalCompletedActivities(arrayTodoList);
  document.querySelector(".checkbox-container").innerHTML = "";
  for (let i = 0; i < elements.length; i++) {
    document.querySelector(".checkbox-container").innerHTML += `
    <div class="checkbox-div">
        <span class="id-activy">${elements[i].id}</span>
        <span class="task">${elements[i].activity}</span>
        <input type="checkbox" ${elements[i].completed && "checked"} value="${
      elements[i].id
    }" onchange="handleClickOnCheckbox(${elements[i].id})" />
        <span class="delete-checkbox" onclick="deleteActivity(${elements[i].id})">X</span>
    </div>
        `;
  }
};

// onSubmit
document.getElementById("preventDefault").addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = document.querySelector("#input-new-activity").value;
  if (!inputValue) {
    return alert("Escriba un valor por favor");
  }
  const newObject = {
    id: createId(allIds),
    activity: inputValue,
    completed: false,
  };
  arrayTodoList.push(newObject);
  document.querySelector("#input-new-activity").value = "";
  loadActivities(arrayTodoList);
});

window.addEventListener("DOMContentLoaded", () => {
  loadActivities(arrayTodoList);
});
