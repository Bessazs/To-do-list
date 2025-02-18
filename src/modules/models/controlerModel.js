import { Project } from "./project";
import { ToDo } from "./toDo";
import { addProjectDOM, addProjectDialog, cleanTaks, showAllTasks } from "../view/DOMHandler";

let projects = []
let toDos = []



export function createProject(name) {
    const project = new Project(name)
    projects.push(project)
    addProjectDOM(projects)
    addProjectDialog(projects)

}

export function createTodo(name, date, priority, description, idProject) {

    const toDo = new ToDo({name: name, description: description, date: date, priority: priority})
    toDos.push(toDo)
    projects.forEach(project => {
        if (project.id == idProject) {
            project.toDos.push(toDo)
        }
    });
    cleanTaks()
    showAllTasks(toDos)
 }


export function formateDate(date) {
    const dates = date.split('-')
    return dates
 }


 export function completeTask(id) {
    console.log(id)
    toDos.forEach(toDo => {
        if (toDo.id == id) {
            toDo.status = 'complete'
        }
        });
    showAllTasks(toDos)

 }
