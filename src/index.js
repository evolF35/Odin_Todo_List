import addTask from './CreateTask';



console.log("her");


let addTaskButton = document.getElementById("addTaskButton");
let taskBoard = document.querySelector(".taskBoard");

let add = false;
let create = false;

addTaskButton.addEventListener('click',() => {


    if(add == true && create == false){
    
        let title = document.getElementById('title').value;
        let dDate = document.getElementById('dueDate').value;
        let desCript = document.getElementById('descriptionBar').value;

        let newTask = addTask(title,dDate,desCript);

        

    }


    if(add == false){
    let aggregator = document.createElement("div");

    let titleBar = document.createElement("input");
    titleBar.setAttribute("id","title");
    titleBar.placeholder = "Name";

    let dueDateBar = document.createElement("input");
    dueDateBar.setAttribute("id","dueDate");
    dueDateBar.setAttribute("type","date");

    let descriptionBar = document.createElement("input");
    descriptionBar.setAttribute("id","descriptionBar");
    descriptionBar.placeholder = "Description";

    aggregator.appendChild(titleBar);
    aggregator.appendChild(dueDateBar);
    aggregator.appendChild(descriptionBar);

    taskBoard.insertBefore(aggregator,addTaskButton);

    add = true;
    addTaskButton.innerText = "Add Task";
    }

});

