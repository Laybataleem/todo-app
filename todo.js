

        
  let todo = [];
  let editIndex = -1;

  function addTask() {
    const taskInput = document.getElementById("addtext");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a valid task.");
      return;
    }

    if (editIndex === -1) {
      todo.push(taskText);
    } else {
      todo[editIndex] = taskText;
      editIndex = -1;
    }

    taskInput.value = "";
    Display();
  }

  function deleteValue(index) {
    todo.splice(index, 1);
    Display();
  }

  function editValue(index) {
    const taskInput = document.getElementById("addtext");
    taskInput.value = todo[index];
    editIndex = index;
  }

function alldeletevalue(){
  todo=[]
  Display()
}

  function Display() {
    const showvalue = document.getElementById("showvalue");
    showvalue.innerHTML = "";

    todo.forEach((task, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="listmain">
          <div>
            <input type="checkbox"> ${task}
          </div>
          <div>
            <button class="style1" onclick="editValue(${index})">Edit</button>
            <button class="style" onclick="deleteValue(${index})">Delete</button>
          </div>
        </div>
      `;
      showvalue.appendChild(li);
    });
  }

  Display(); // Initial 