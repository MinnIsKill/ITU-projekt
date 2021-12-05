/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
   document.getElementById("myDropdown").classList.toggle("show");
 }

 // Close the dropdown menu if the user clicks outside of it
 window.onclick = function(event) {
   //dropdown
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
   // Loop through each div element with the class box
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

