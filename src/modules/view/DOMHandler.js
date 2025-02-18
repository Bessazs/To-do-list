import srcTrash from "../../icons/Trash.svg"
import srcPriorityHigh from "../../icons/PrioHigh.svg";
import srcPriorityMedium from "../../icons/PrioMedium.svg";
import srcPriorityLow from "../../icons/PrioLow.svg";
import { isToday, isTomorrow, isThisWeek, isFuture } from "date-fns";
import { completeTask } from "../models/controlerModel";

export function cleanInputs() {
    const inputs = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea')
    inputs.forEach(input =>{
        if (input.type != 'submit') {
            input.value = ''
        }
    });
    textArea.value = ''
}

export function cleanTaks() {
    const listTasks = document.querySelectorAll(".list-tasks")
    listTasks.forEach(list => {
        while (list.firstChild) {
            list.removeChild(list.firstChild)
        }
    });

}


export function addProjectDOM(projects) {
    const listParent = document.querySelector('#nav-list-projects')
    while (listParent.firstChild) {
        listParent.removeChild(listParent.firstChild)
    }
    projects.forEach(project => {
            const list = document.createElement('li')
            const img = document.createElement('img')
            const div = document.createElement('div')
            const content = document.createElement('p')
            content.classList.add('project-name')
            img.src = srcTrash
            img.classList = `imgTrash imgTrash-${project.id}`
            list.classList =`project project-${project.id}`
            div.classList = 'divisor-aside'
            content.textContent = project.name
            list.appendChild(content)
            list.appendChild(img)
            
            listParent.appendChild(list)
            listParent.appendChild(div)
       
    });
    
}

export function addProjectDialog(projects){
    const listProjects = document.querySelector('#project-relation')
    while (listProjects.children.length > 1) {
        listProjects.removeChild(listProjects.lastChild)
    }

    projects.forEach(project => {
        if (project.name != 'default') {
            
            const option = document.createElement('option')
            option.textContent = project.name
            option.classList = `select-project option-${project.id}`
            option.value = project.id
            listProjects.appendChild(option)
        }
    });
}


export function showAllTasks(toDos) {
    cleanTaks()
    const today = document.querySelector('.list-today')
    const tomorrow = document.querySelector('.list-tomorrow')
    const week = document.querySelector('.list-week')
    const finished = document.querySelector('.list-finish')

    
    toDos.forEach(toDo => {

        if (isToday(toDo.date) && toDo.status != 'complete') {
            addTaskDom(toDo, today)
        }
        if (isTomorrow(toDo.date) && toDo.status != 'complete') {
            addTaskDom(toDo, tomorrow)
        } else 
        if (isThisWeek(toDo.date) && isFuture(toDo.date) && toDo.status != 'complete') {
            addTaskDom(toDo, week)
        }
        if (toDo.status == "complete") {
            addTaskDom(toDo, finished)
        }
    });

    
    const btnFinish = document.querySelectorAll('.mark')
    btnFinish.forEach(btn => {
      
        btn.addEventListener('click', ()=>{
        const classId = btn.className.split('-')
        completeTask(classId[1])    
        })
    });

}

function addTaskDom(toDo,time) {
    const li = document.createElement('li')
    li.classList = `task-${toDo.id}`
    const div = document.createElement('div')
    const content = document.createElement('p')
    const img = document.createElement('img')
    const divisor = document.createElement('div')
    img.classList.add('img-prio')
    if (toDo.status == 'incomplete') {
        div.classList.add(`mark`)
    }else{
        const div2 = document.createElement('div')
        div.classList.add('mark-disable')
        div2.classList.add(`fillmark`)
        div.appendChild(div2)
    }
    div.classList.add(`mark-${toDo.id}`)
    li.appendChild(div)
    content.classList.add('nametask')
    content.classList.add(`nameTask-${toDo.id}`)
    content.textContent = toDo.name
    li.appendChild(content)
    if (toDo.priority == 'low') {
        img.src = srcPriorityLow
    }
    if (toDo.priority == 'medium') {
        img.src = srcPriorityMedium
    }
    if (toDo.priority == 'high') {
        img.src = srcPriorityHigh
    }
    li.appendChild(img)
    time.appendChild(li)
    divisor.classList.add('divisor')
    time.appendChild(divisor)
    

}






