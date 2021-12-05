/**
 *  main.js
 *
 *  obsahuje funkce manipulující s HTML prvky, zajišťuje čtení dat ve formátu JSON ze serveru, jejich následné 
 *	 přetypování a dynamické vytváření HTML bloků
 *
 *  AUTOR:  Vojtěch Kališ (xkalis03@stud.fit.vutbr.cz)
 *
**/


/* Dropdown hide/show toggle */
function myFunction() {
   document.getElementById("myDropdown").classList.toggle("show");
}

/** Dropdown */
window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
         var openDropdown = dropdowns[i];
         if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
         }
      }
   }
}

$(document).ready(function(){
   var url = window.location.hash;
   console.log(url);
   //document.getElementById(url).style.display = "";
   $('div.selector').not(url).hide();
   $('div.selector').filter(url).show();
});

/** AboveTable */
$(document).ready(function() {
   $('#myAboveTable').DataTable( {
      "scrollY":        "200px",
      "scrollCollapse": true,
      "paging":         false
   } );
} );

