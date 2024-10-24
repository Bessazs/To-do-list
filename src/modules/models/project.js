export class Project {
    static idTotal = 0
    constructor(name = 'delfault', toDos = []) {
        this._name = name
        this._toDos = toDos
        this._id = ++Project.idTotal
    }


    get name(){
        return this._name
    }

    set name(newName){
        if(newName){
            this._name = newName
        }
    }

    get toDos(){
        return this._toDos
    }

    set name(newToDo){
        if(newToDo){
            this._toDos = newToDo
        }
    }

    get id(){
        return this._id
    }

}