import {newObject} from "./newTodos.js";
import {buttonEnviarInfo} from "./DOMinfo.js";

var arrayToDosObject = [];

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Aquí puedes añadir cualquier código que quieras ejecutar cuando se envía el formulario.
});

buttonEnviarInfo.addEventListener('click',()=>{
    newObject();
    arrayToDosObject.push(newObject());
    console.log(arrayToDosObject);

})



