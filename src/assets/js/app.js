import $ from "jquery";
import "what-input";

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require("foundation-sites");

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();
var javi = "marido de ivonne";

console.log(javi);

$(function () {
  $(window).scroll(function () {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $("body").addClass("sticky-shrinknav-wrapper");
      $("#herotext").addClass("herotext");
      $("#grid-container-fluid").addClass("grid-container-fluid-color");
    } else {
      $("body").removeClass("sticky-shrinknav-wrapper");
      $("#herotext").removeClass("herotext");
      $("#grid-container-fluid").removeClass("grid-container-fluid-color");
    }
  });
});

// FUNCIONA HEADER1

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
// FIN

//mostrar animacion 

$('#panel').foundation('toggle');


