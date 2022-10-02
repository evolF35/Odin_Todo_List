import { da, ta } from 'date-fns/locale';
import addTask from './CreateTask';
import { tasksArray } from './CreateTask';


let projectsArray = [];



var current = new Date();


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

        if(tasksArray != null){
        addToLocalStorage();
        }

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

        let number = removal.lastChild;

        let huell = number.id;

        let task_number = huell.replace("_task,");


        removal.remove();

        tasksArray.splice(task_number,1);
        addToLocalStorage();



    });

    let edit = document.createElement('button');
    edit.innerHTML = "Edit";
    edit.addEventListener('click',() =>{
        let editor = document.getElementById(`${object.number}_task`).parentElement;

        let peas = editor.getElementsByTagName('p');

        taskBoard.insertBefore(addInputEdit(peas[0].innerText,peas[1].innerText,peas[2].innerText),addTaskButton);
        addTaskButton.innerText = "Edit Task";

        let number = editor.lastChild;
        let huell = number.id;
        let task_number = huell.replace("_task,");


        tasksArray.splice(task_number,1);
        addToLocalStorage();



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
    
    let allTasks = document.querySelectorAll(".task");

    allTasks.forEach(task => task.remove());

    let name = document.createElement("input");
    name.placeholder = "Project_Name";
    taskBoardTitle.appendChild(name);

    let addPorjectButton = document.createElement("button");
    addPorjectButton.innerText = "Add Project";
    taskBoardTitle.appendChild(addPorjectButton);

    addTaskButton.style.display = "none";

    addPorjectButton.addEventListener('click',()=>{
        
        if(name.value != ""){

        taskBoardTitle.innerText = name.value;

        let newP = document.createElement('p');
        newP.innerText = taskBoardTitle.innerText;
        currentProject = newP.innerText;

        let deleteProject = document.createElement('p');
        deleteProject.innerText = "delete";

        deleteProject.addEventListener('click',() => {

            tasksArray = tasksArray.filter(task => task.project != newP.innerText);
            projectsArray = projectsArray.filter(project => project != newP.innerText); 



            if(newP.innerText == taskBoardTitle.innerText){
                taskBoardTitle.innerText = "Switch to another project or create a new one";
                
                addTaskButton.style.display = "none";

                let allTasks = document.querySelectorAll(".task");

                if(allTasks != null){
                allTasks.forEach(task => task.remove());
                }


            }


            newP.remove();
            deleteProject.remove();

            addToLocalStorage();



        })

        newP.addEventListener('click',()=>{
            taskBoardTitle.innerText = newP.innerText;
            currentProject = newP.innerText;

            (renderTasks(getTasks(currentProject)));
            addTaskButton.style.display = "";
        });


        listofProjects.appendChild(newP);
        listofProjects.appendChild(deleteProject);

        addTaskButton.style.display = "";


        projectsArray.push(name.value);

        addToLocalStorage();

        }

        


    }
    );

    }
    

    );


function getTasks(project){

    let tasks = tasksArray.filter(task => task.project == project);

    return(tasks);
}


function renderTasks(tasks){

    let allTasks = document.querySelectorAll(".task");
    allTasks.forEach(task => task.remove());

    if(task != null){
    tasks.forEach(task => taskBoard.insertBefore(addTaskToDOM(task),addTaskButton));
}

}


let listAllTasks = document.querySelector('.all');

listAllTasks.addEventListener('click', () =>{

    taskBoardTitle.innerText = "All Tasks";
    renderTasks(tasksArray);

    addTaskButton.style.display = "none";

})

let tasksDueToday = document.querySelector('.today');

tasksDueToday.addEventListener('click',() => {

    taskBoardTitle.innerText = "Tasks Due Today";

    let tomorrow = new Date();
    tomorrow = tomorrow.setDate(current.getDate());

    let bate = JSON.parse(JSON.stringify(tasksArray));

    bate = bate.filter(mask => (mask.date = (new Date(`${mask.date}`))));
    
    let lessThan1 = bate.filter(dues => (((dues.date - tomorrow)/((1000 * 60 * 60 * 24))) <= 1 && ((dues.date - tomorrow)/((1000 * 60 * 60 * 24))) >= -1 ));

    lessThan1 = lessThan1.filter(task => (task.date = ((task.date).toLocaleDateString())));

    renderTasks(lessThan1);

    addTaskButton.style.display = "none";
})

let tasksDueThisWeek = document.querySelector('.days7');

tasksDueThisWeek.addEventListener('click',() => {
    
    taskBoardTitle.innerText = "Tasks Due Within 7 days";

    let nextWeek = new Date();
    nextWeek = nextWeek.setDate(current.getDate());

    let fate = JSON.parse(JSON.stringify(tasksArray));

    fate = fate.filter(mask => (mask.date = (new Date(`${mask.date}`))));
    
    let lessThan7 = fate.filter(dues => (((dues.date - nextWeek)/((1000 * 60 * 60 * 24))) <= 8 && ((dues.date - nextWeek)/((1000 * 60 * 60 * 24))) >= -1 ));

    lessThan7 = lessThan7.filter(task => (task.date = ((task.date).toLocaleDateString())));

    renderTasks(lessThan7);

    addTaskButton.style.display = "none";
})


let longTermTasks = document.querySelector('.longterm');

longTermTasks.addEventListener('click',() => {
    
    taskBoardTitle.innerText = "Tasks not due in 7 days";

    let long = new Date();
    long = long.setDate(current.getDate());

    let gate = JSON.parse(JSON.stringify(tasksArray));

    gate = gate.filter(mask => (mask.date = (new Date(`${mask.date}`))));
    
    let moreThan7 = gate.filter(dues => (((dues.date - long)/((1000 * 60 * 60 * 24))) >= 8));

    moreThan7 = moreThan7.filter(task => (task.date = ((task.date).toLocaleDateString())));

    renderTasks(moreThan7);

    addTaskButton.style.display = "none";
})


function addToLocalStorage(){
    window.localStorage.setItem('taksArray',JSON.stringify(tasksArray));
    window.localStorage.setItem('projectArray',JSON.stringify(projectsArray));
}

function renderLocalStorage(){

    tasksArray = JSON.parse(window.localStorage.getItem(('taksArray')));
    projectsArray = JSON.parse(window.localStorage.getItem(('projectArray')));

    if(projectsArray != null){
    projectsArray.forEach(project => addProjecttoDOM(project));
    }

    taskBoardTitle.innerText = "Add a Project";
    addTaskButton.style.display = "none";


}


function addProjecttoDOM(projectName){

    taskBoardTitle.innerText = projectName;

        let newP = document.createElement('p');
        newP.innerText = taskBoardTitle.innerText;
        currentProject = newP.innerText;

        let deleteProject = document.createElement('p');
        deleteProject.innerText = "delete";

        deleteProject.addEventListener('click',() => {

            tasksArray = tasksArray.filter(task => task.project != newP.innerText);
            projectsArray = projectsArray.filter(project => project != newP.innerText); 
            addToLocalStorage();


            if(newP.innerText == taskBoardTitle.innerText){
                taskBoardTitle.innerText = "Switch to another project or create a new one";
                addTaskButton.style.display = "none";

                let allTasks = document.querySelectorAll(".task");

                allTasks.forEach(task => task.remove());

            }


            newP.remove();
            deleteProject.remove();

        })

        newP.addEventListener('click',()=>{
            taskBoardTitle.innerText = newP.innerText;
            currentProject = newP.innerText;

            (renderTasks(getTasks(currentProject)));
            addTaskButton.style.display = "";
        });


        listofProjects.appendChild(newP);
        listofProjects.appendChild(deleteProject);

        addTaskButton.style.display = "";

        }
        


        renderLocalStorage();