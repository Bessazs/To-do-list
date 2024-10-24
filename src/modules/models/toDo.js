export class ToDo {
    static idTotal = 0
    
    constructor({name, description, date, priority}) {
        this._name = name
        this._description = description
        this._date = date
        this._priority = priority || 'low'
        this._id = ++ToDo.idTotal
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
            this._date = newDate
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




}



