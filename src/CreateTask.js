

export default function addTask(title,date,description){

    return (createTask(title,date,description));

}

const taskFactory = (title,date,description) => {
    return{title,date,description};
};

function createTask(title,date,description) {

    let task = taskFactory(title,date,description);

    console.log(task);

return(task);

}
