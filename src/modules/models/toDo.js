export class ToDo {
    static idTotal = 0
    
    constructor({name, description, date, priority, status}) {
        this._name = name
        this._description = description
        this._date = new Date(date[0],date[1]-1,date[2])
        this._priority = priority || 'low'
        this._id = ++ToDo.idTotal
        this._status = status || 'incomplete' 
        this._finishDate = ''
    }

    get name(){
        return this._name
    }

    set name(newName){
        if(newName){
            this._name = newName
        }
    }

    get description(){
        return this._description
    }

    set description(newDescription){
        if (newDescription) {
            this._description = newDescriptions
        }
        
    }

    get date(){
        return this._date
    }

    set date(newDate){
        if (newDate) {
            this._date = new Date (date[0],date[1]-1,date[2])
        }
    }

    get finishDate(){
        return this._date
    }

    set finishDate(newDate){
        if (newDate) {
            this._finishDate = new Date (date[0],date[1]-1,date[2])
        }
    }


    get priority(){
        return this._priority
    }

    set priority(newPriority){
        if (['low','medium', 'high'].includes(newPriority)) {
            this._priority = newPriority  
        }
    }

    get id(){
        return this._id
    }
    
    get status(){
        return this._status
    }

    set status(newStatus){
        if (['incomplete','complete'].includes(newStatus)) {
            this._status = newStatus  
        }
    }


}



