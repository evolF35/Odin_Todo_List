

export default function addProject(title,number){
    return (createProject(title,number));
}

const projectFactory = (title,number) => {
    return{title,number};
};

function createProject(title,number) {

    let project = projectFactory(title,number);

return(project);
}

