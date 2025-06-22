let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let doneCount = tasks.filter((t) => t.checked).length;

window.onload = function () {
  renderTasks();

  const form = document.querySelector("#create-todo-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const description = document.querySelector("#description").value.trim();
    const tag = document.querySelector("#description-tag").value.trim();
    const today = new Date().toLocaleDateString("pt-BR");

    if (description && tag) {
      const newTask = {
        id: Date.now(),
        description,
        tag,
        date: today,
        checked: false,
      };

      tasks.push(newTask);
      saveTasks();
      appendTaskToDOM(newTask);
      form.reset();
    }
  });
  document
    .getElementById("remove-done-tasks-btn")
    .addEventListener("click", function () {
      tasks = tasks.filter((task) => !task.checked);
      doneCount = 0;
      saveTasks();
      renderTasks();
    });
};

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateFooter() {
  const footerText = document.querySelector(".remove-done-tasks-btn");
  const removeBtn = document.querySelector("#remove-done-tasks-btn");
  footerText.textContent = `${doneCount} tarefa${
    doneCount !== 1 ? "s" : ""
  } concluída${doneCount !== 1 ? "s" : ""}`;

  if (doneCount > 0) {
    removeBtn.style.display = "inline-block";
  } else {
    removeBtn.style.display = "none";
  }
}

function renderTasks() {
  const section = document.querySelector(".todo-list-section");
  section.innerHTML = "";
  tasks.forEach((task) => {
    appendTaskToDOM(task);
  });
  updateFooter();
}

function appendTaskToDOM(task) {
  const section = document.querySelector(".todo-list-section");

  const card = document.createElement("div");
  card.className = "todo-list-card";

  const titulo = document.createElement("h2");
  titulo.textContent = task.description;
  if (task.checked) {
    titulo.style.textDecoration = "line-through";
    titulo.style.color = "#b1bacb";
  }

  const detalhes = document.createElement("div");
  detalhes.className = "task-details";

  const tagDiv = document.createElement("div");
  tagDiv.className = "task-details-tag";
  tagDiv.textContent = task.tag;

  const dataDiv = document.createElement("div");
  dataDiv.className = "task-details-create";
  dataDiv.textContent = `Criado: ${task.date}`;

  detalhes.appendChild(tagDiv);
  detalhes.appendChild(dataDiv);

  const btnContainer = document.createElement("div");
  btnContainer.className = "task-done-btn";

  if (task.checked) {
    const checkIcon = document.createElement("img");
    checkIcon.src = "./images/checked.png";
    checkIcon.alt = "Tarefa concluída";
    checkIcon.style.width = "32px";
    checkIcon.style.height = "32px";
    btnContainer.appendChild(checkIcon);
  } else {
    const botao = document.createElement("button");
    botao.className = "done-task-btn";
    botao.type = "button";
    botao.setAttribute("aria-label", "Concluir tarefa");
    botao.textContent = "Concluir";

    botao.addEventListener("click", () => {
      task.checked = true;
      saveTasks();
      doneCount++;
      titulo.style.textDecoration = "line-through";
      titulo.style.color = "#b1bacb";

      btnContainer.innerHTML = "";
      const checkIcon = document.createElement("img");
      checkIcon.src = "./images/checked.png";
      checkIcon.alt = "Tarefa concluída";
      checkIcon.style.width = "32px";
      checkIcon.style.height = "32px";
      btnContainer.appendChild(checkIcon);

      updateFooter();
    });

    btnContainer.appendChild(botao);
  }

  card.appendChild(titulo);
  card.appendChild(detalhes);
  card.appendChild(btnContainer);
  section.appendChild(card);
}
