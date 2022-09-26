import addTask from './CreateTask';

console.log("her");

let addTaskButton = document.getElementById("addTaskButton");
let taskBoard = document.querySelector(".taskBoard");

let add = false;
let i = 0;
let currentProject = "";

addTaskButton.addEventListener('click',() => {

    if(add == true){
    
        i++;

        let title = document.getElementById('title').value;

        console.log(title);

        let dDate = document.getElementById('dueDate').value;
        let desCript = document.getElementById('descriptionBar').value;

        let newTask = addTask(title,dDate,desCript,i,currentProject);

        let pastForm = document.getElementById("inputs");
        pastForm.remove();

        taskBoard.insertBefore(addTaskToDOM(newTask),addTaskButton);

        add = false;
        addTaskButton.innerText = "Create Task";

    }

    else{
    let aggregator = document.createElement("div");
    aggregator.setAttribute("id","inputs");

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


function addTaskToDOM(object){
    
    let container = document.createElement('div');
    container.setAttribute("class","task");

    let title = document.createElement('p');
    title.innerText = object.title;

    let dueDate = document.createElement('p');
    dueDate.innerText = object.date;

    let deCritp = document.createElement('p');
    deCritp.innerText = object.description;

    let buttonContainter = document.createElement('div');
    
    buttonContainter.setAttribute("id",`${object.number}_task`);
    buttonContainter.classList.add("taskButtons");

    let del = document.createElement('button');
    del.innerText = "Delete";
    del.addEventListener('click',() =>{
        let removal = document.getElementById(`${object.number}_task`).parentElement;
        removal.remove();
    });

    let edit = document.createElement('button');
    edit.innerHTML = "Edit";
    edit.addEventListener('click',() =>{
        let editor = document.getElementById(`${object.number}_task`).parentElement;
        taskBoard.insertBefore(addinput(editor),addTaskButton);



    });

    buttonContainter.appendChild(del);
    buttonContainter.appendChild(edit);

    container.appendChild(title);
    container.appendChild(dueDate);
    container.appendChild(deCritp);
    container.appendChild(buttonContainter);

    return(container);
}


function addinput(object){

    let aggregator = document.createElement("div");
    aggregator.setAttribute("id","inputs");

    let titleBar = document.createElement("input");
    titleBar.setAttribute("id","title");
    titleBar.innerText = object.title;

    let dueDateBar = document.createElement("input");
    dueDateBar.setAttribute("id","dueDate");
    dueDateBar.setAttribute("type","date");
    dueDateBar.innerText = object.date;


    let descriptionBar = document.createElement("input");
    descriptionBar.setAttribute("id","descriptionBar");
    descriptionBar.innerText = object.description;

    aggregator.appendChild(titleBar);
    aggregator.appendChild(dueDateBar);
    aggregator.appendChild(descriptionBar);

    return(aggregator);

}