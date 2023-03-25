//exportamos constante selector de boto enviar

export const buttonEnviarInfo = document.querySelector('#submit');

/*
exportamos selector 
DOM elements que seleciona los campos
del formulario

*/

export var DOMSelector = (()=>{

var title = ()=>{

const titleInfo = document.querySelector('#title');
const titleValue = titleInfo.value;

return titleValue;
};

var description=() =>{

    const descriptionInfo = document.querySelector('#description');
    const descriptionValue = descriptionInfo.value;
    
    return descriptionValue;

} ;

/*var dueDate=() =>{

    const dueDateInfo = document.querySelector('#dueDate');
    const dueDateValue = dueDateInfo.value;
    
    return dueDateValue;

} ;*/

/*var priority=() =>{

    const priorityInfo = document.querySelector('#priority');
   const priorityValue = priorityInfo.value;
    
    return priorityValue;

} ;*/

return {
    title,
    description,
    /*dueDate,
    priority,*/
  };

})();

