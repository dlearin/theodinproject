import {toDo} from "./toDosClass.js";
import {DOMSelector} from "./DOMinfo.js"


export function newObject(){
    const todo = new toDo(
        DOMSelector.title(), 
        DOMSelector.description(), 
        /*DOMSelector.dueDate(), 
        DOMSelector.priority()*/
        );
    console.log(todo);
    return {todo};
}