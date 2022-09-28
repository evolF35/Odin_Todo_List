
let tasksArray = [];

export default function addTask(title,date,description,number,project){
    
    return (createTask(title,date,description,number,project));
}

export function changeTitle(object,title){
        object.title = title;
    }

export function changeDate(object,date){
        object.date = date;
    }

export function changeDescription(object,description){
        object.description = description;
    }

export function changeProject(object,project){
        object.project = project;
    }

const taskFactory = (title,date,description,number,project) => {
    return{title,date,description,number,project};
};


function createTask(title,date,description,number,project) {

    let task = taskFactory(title,date,description,number,project);
    console.log(task);
    tasksArray.push(task);


    return(task);
}

export { tasksArray };

