import addTask from './CreateTask';
import returnTaskArray from './CreateTask';




let addTaskButton = document.getElementById("addTaskButton");
addTaskButton.style.display = "none";
let taskBoard = document.querySelector(".taskBoard");

let taskBoardTitle = document.querySelector(".taskBoardTitle");

let add = false;
let i = 0;
let currentProject = taskBoardTitle.innerText;
let porjectAdd = false;

let edit = false;

addTaskButton.addEventListener('click',() => {

    if(add == true){
        i++;

        let title = document.getElementById('title').value;


        let dDate = document.getElementById('dueDate').value;
        let desCript = document.getElementById('descriptionBar').value;

        let newTask = addTask(title,dDate,desCript,i,currentProject);

        console.log(returnTaskArray());
        
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
    title.setAttribute("class","taskTitleDOM");
    title.innerText = object.title;

    let dueDate = document.createElement('p');
    dueDate.setAttribute("class","taskDueDateDOM");
    dueDate.innerText = object.date;

    let deCritp = document.createElement('p');
    deCritp.setAttribute("class","desCriptionDOM");
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

        let peas = editor.getElementsByTagName('p');

        taskBoard.insertBefore(addInputEdit(peas[0].innerText,peas[1].innerText,peas[2].innerText),addTaskButton);
        addTaskButton.innerText = "Edit Task";

        editor.remove();

    });

    buttonContainter.appendChild(del);
    buttonContainter.appendChild(edit);

    container.appendChild(title);
    container.appendChild(dueDate);
    container.appendChild(deCritp);
    container.appendChild(buttonContainter);

    return(container);
}


function addInputEdit(title,dueDate,description){

    let aggregator = document.createElement("div");
    aggregator.setAttribute("id","inputs");

    let titleBar = document.createElement("input");
    titleBar.setAttribute("id","title");
    titleBar.value = title;

    let dueDateBar = document.createElement("input");
    dueDateBar.setAttribute("id","dueDate");
    dueDateBar.setAttribute("type","date");
    dueDateBar.value = dueDate;


    let descriptionBar = document.createElement("input");
    descriptionBar.setAttribute("id","descriptionBar");
    descriptionBar.value = description;

    aggregator.appendChild(titleBar);
    aggregator.appendChild(dueDateBar);
    aggregator.appendChild(descriptionBar);

    add = true;
    edit = true


    return(aggregator);
}



let addProjectButton = document.getElementById("addProjectButton");

let listofProjects = document.querySelector(".listProjects");

let allTasks = document.querySelectorAll(".task");

addProjectButton.addEventListener('click',()=>{

    taskBoardTitle.innerText = "";
    let name = document.createElement("input");
    name.placeholder = "Project_Name";
    taskBoardTitle.appendChild(name);

    let addPorjectButton = document.createElement("button");
    addPorjectButton.innerText = "Add Project";
    taskBoardTitle.appendChild(addPorjectButton);

    addTaskButton.style.display = "none";


    addPorjectButton.addEventListener('click',()=>{
        taskBoardTitle.innerText = name.value;

        let newP = document.createElement('p');
        newP.innerText = taskBoardTitle.innerText;
        currentProject = newP.innerText;


        newP.addEventListener('click',()=>{
            taskBoardTitle.innerText = newP.innerText;
            currentProject = newP.innerText;



        });

        listofProjects.appendChild(newP);

        addTaskButton.style.display = "";
        }
    );

    

    });


function renderTasks(project){

    let tasks = returnTaskArray();
    
    return(tasks);

}