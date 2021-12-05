/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
   document.getElementById("myDropdown").classList.toggle("show");
 }
 
 // Close the dropdown menu if the user clicks outside of it
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

/** AboveTable */
 $(document).ready(function() {
   $('#myAboveTable').DataTable( {
       "scrollY":        "200px",
       "scrollCollapse": true,
       "paging":         false
   } );
} );

function nodeScriptReplace(node) {
   if ( nodeScriptIs(node) === true ) {
           node.parentNode.replaceChild( nodeScriptClone(node) , node );
   }
   else {
           var i = -1, children = node.childNodes;
           while ( ++i < children.length ) {
                 nodeScriptReplace( children[i] );
           }
   }

   return node;
}
function nodeScriptClone(node){
   var script  = document.createElement("script");
   script.text = node.innerHTML;

   var i = -1, attrs = node.attributes, attr;
   while ( ++i < attrs.length ) {                                    
         script.setAttribute( (attr = attrs[i]).name, attr.value );
   }
   return script;
}

function nodeScriptIs(node) {
   return node.tagName === 'SCRIPT';
}