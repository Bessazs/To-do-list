class projecs {
    constructor(name, toDos = []) {
        this._name = name
        this._toDos = toDos
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

}