export function createClassMain() {
    var content = document.querySelector('.content');
    /**
     * creamos div class main
     */
    var classMain = document.createElement("div");
    classMain.className = "main";
    //creamos h1 en class main
    var h1Main = document.createElement("h1");
    h1Main.textContent = "Obrador panyflor";
    classMain.appendChild(h1Main);
    //creamos div y parrafo, añadiendo además el contenido
    var divMain = document.createElement("div");
    var pMain = document.createElement("p");
    pMain.textContent = "Nuestra historia"
    divMain.appendChild(pMain);
    classMain.appendChild(divMain);
    //incopramos classMain al content
    content.appendChild(classMain);
  }