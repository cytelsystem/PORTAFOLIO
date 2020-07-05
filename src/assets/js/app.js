import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();





// al scroll seccion hobbies detona el toggle  de la animacion div contorno1
//keep element in view
(function($)
{
    $(document).ready( function()
    {
        var elementPosTop = $('#s-hobbies').position().top;
        $(window).scroll(function()
        {
            var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
            //if top of element is in view
            if (wintop > elementPosTop){

              $(function () {
                $('#contorno1').foundation('toggle');
                
              });

            }
            else {
           
              // alert("no funciono es con otro")
            }
        });
    });
})(jQuery);




// FUNCIONA HEADER1

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});


  $(function () {
    $('#panel1').foundation('toggle');
    
  });








// cambio en pixeles  media para narvar 

function myFunction(x) {
if (x.matches) { // Si la consulta de medios coincide
// document.body.style.backgroundColor = "yellow";
var b11 = document.querySelector("#id-inicio"); 
b11.setAttribute("data-offset", "400");
var b22 = document.querySelector("#id-acerca"); 
b22.setAttribute("data-offset", "364");
var b33 = document.querySelector("#id-conocimiento"); 
b33.setAttribute("data-offset", "365");
var b44 = document.querySelector("#id-habilidades"); 
b44.setAttribute("data-offset", "365");
var b55 = document.querySelector("#id-experiencia"); 
b55.setAttribute("data-offset", "364");
var b66 = document.querySelector("#id-proyectos"); 
b66.setAttribute("data-offset", "365");
var b77 = document.querySelector("#id-aficiones"); 
b77.setAttribute("data-offset", "365");
var b88 = document.querySelector("#id-contacto"); 
b88.setAttribute("data-offset", "365");
} else {
  var b11 = document.querySelector("#id-inicio"); 
  b11.setAttribute("data-offset", "0");
   var b22 = document.querySelector("#id-acerca"); 
  b22.setAttribute("data-offset", "0");
  var b33 = document.querySelector("#id-conocimiento"); 
  b33.setAttribute("data-offset", "0");
  var b44 = document.querySelector("#id-habilidades"); 
  b44.setAttribute("data-offset", "0");
  var b55 = document.querySelector("#id-experiencia"); 
  b55.setAttribute("data-offset", "0");
  var b66 = document.querySelector("#id-proyectos"); 
  b66.setAttribute("data-offset", "0");
  var b77 = document.querySelector("#id-aficiones"); 
  b77.setAttribute("data-offset", "0");
  var b88 = document.querySelector("#id-contacto"); 
  b88.setAttribute("data-offset", "0");

}
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Llamar a la función de escucha en tiempo de ejecución
x.addListener(myFunction) // Adjuntar función de escucha en cambios de estado


