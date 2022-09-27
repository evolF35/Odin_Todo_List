

export default function addProject(title,number){
    return (createProject(title,number));
}

const projectFactory = (title,number) => {
    return{title,number};
};

function createTask(title,number) {

    let project = projectFactory(title,number);

    console.log(project);

return(project);
}

