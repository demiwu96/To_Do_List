var addBttn = document.getElementById("add");

addBttn.addEventListener("click", addTask);

// add tasks to the list
function addTask() {
    var task = document.createElement("li");
    var input = document.getElementById("input").value;
    var text = document.createTextNode(input);

    var bttn = document.createElement("button");
    var textBttn = document.createTextNode("Delete");
    bttn.className = "del";
    bttn.appendChild(textBttn);
    task.appendChild(text);

    if (input == '') {
        alert("What is your task?");
    } else {
        // cross off from the list
        document.getElementById("mytasks").appendChild(task).appendChild(bttn);
        task.addEventListener('click', function () {
            task.style.textDecoration = 'line-through';
            task.style.backgroundColor = 'grey';
            task.style.color = 'white';
        })
        // delete one task
        bttn.addEventListener('click', function () {
            task.style.display = "none";
        })
    }
    document.getElementById("input").value = '';
};

// delete all tasks
function deleteAll() {
    var toDoList = document.querySelector('ul');
    toDoList.innerHTML = '';
};

