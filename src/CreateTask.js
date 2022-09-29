
let tasksArray = [];

export default function addTask(title,date,description,number,project){
    
    return (createTask(title,date,description,number,project));
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

