export function createClassNav(){
    var container = document.querySelector('.content');
    var nav = document.createElement("div");
    nav.className = "nav";
    //creacion de h1
    var h1Nav = document.createElement("h1");
    h1Nav.className = "h1";
    var h1NavContent = document.getElementsByClassName("h1");
    nav.appendChild(h1Nav);
    /**
     * creacion de ul para nav
    */
    var ulNav = document.createElement("ul");
    var li1Nav = document.createElement("li");
    var li2Nav = document.createElement("li");
    var li3Nav = document.createElement("li");
    //agregamos parrafo de cada lista
    li1Nav.textContent = "Menu";
    li2Nav.textContent = "Reservas";
    li3Nav.textContent = "Fotos";
    //agregamos li a ul
    ulNav.appendChild(li1Nav);
    ulNav.appendChild(li2Nav);
    ulNav.appendChild(li3Nav);
    // agregamos ulNav a nav
    nav.appendChild(ulNav);
    //agregamos nav a content
    container.appendChild(nav);
  }
  