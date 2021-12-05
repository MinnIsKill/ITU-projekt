import NavBarButton from './Button.js'

function responsive_toggle() {
  var x = document.getElementById("navBar");
  if (x.className === "navBar") {
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}

function NavBar(){
return(
    <div className="navBar" id="navBar">  
        <NavBarButton href="/" text="Domů" />
        <NavBarButton href="/Search" text="Vyhledat" />
        <NavBarButton href="/Add" text="Přidat" />
        <NavBarButton href="/Edit" text="Upravit" />
        <a className="icon" onClick= { responsive_toggle } ><img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/000000/external-mobile-application-hamburger-menu-setting-interface-basic-color-tal-revivo.png"/></a>      
    </div>
);
}


export default NavBar;
