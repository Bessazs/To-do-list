import "../styles/styles.css";
import { cleanInputs, cleanTaks} from "./view/DOMHandler";
import { createProject, createTodo, formateDate} from './models/controlerModel';


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
      createProject(nameProject.value)
      cleanInputs()
      document.querySelector('.dialog-project').close()
    }    
    Event.preventDefault()

  })

const nameTodo = document.querySelector('#name-task')
const dateTodo = document.querySelector('#date')
const priorityTodo = document.querySelector('#priority')
const descriptionTodo = document.querySelector('#description')
const idProjectTodo = document.querySelector('#project-relation')
const btnSaveTodo = document.querySelector('#btn-save-task')

btnSaveTodo.addEventListener('click', (Event)=>{
    Event.preventDefault()
    if (nameTodo.value != '' && dateTodo.value != '') {
        const date = formateDate(dateTodo.value)
        createTodo(nameTodo.value, date, priorityTodo.value, descriptionTodo.value, idProjectTodo.value)
        cleanInputs()
        document.querySelector('.dialog-task').close()
    }

})



const btnFinish = document.querySelectorAll('.mark')
btnFinish.forEach(btn => {
    console.log(btn)
    btn.addEventListener('click', ()=>{
        const idBtn = btn.getAttribute("class")
        
        
    })
});

