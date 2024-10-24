import "../styles/styles.css";
import { Project } from "./models/project";

let projects = []


const btnAddTask = document.querySelector("#addTask");
const btnAddProject = document.querySelector("#addProject");
btnAddTask.addEventListener('click',() =>{
    document.querySelector(".dialog-task").showModal()
})

btnAddProject.addEventListener('click',() =>{
    document.querySelector('.dialog-project').showModal()
    
})

const btnCloseDialog = document.querySelectorAll(".btn-close");
btnCloseDialog.forEach(btn => {
    btn.addEventListener('click', () =>{
        document.querySelector('.dialog-task').close()
        document.querySelector('.dialog-project').close()
        
        
    })
});

const nameProject = document.querySelector("#name-project")
const btnSaveProject = document.querySelector("#btn-save-project")
btnSaveProject.addEventListener('click', (Event) =>{ 
    if (nameProject.value !== ""){
      Event.preventDefault();
      createProject(nameProject.value);
      document.querySelector('.dialog-project').close()
    }
    Event.preventDefault();

  })



function createProject(name) {
    const project = new Project(name);
    console.log(project.name);
    console.log(project.id);

    
    projects.push(project)
}


