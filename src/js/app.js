var fs = require('fs');


window.ondragover = function(e) { e.preventDefault(); return false };
window.ondrop = function(e) { e.preventDefault(); return false };

$(document).ready(function() {

  var holder = document.getElementById('holder');

  holder.ondragover = function () { this.className = 'hover'; return false; };
  holder.ondragleave = function () { this.className = ''; return false; };
  holder.ondragend = function () { this.className = ''; return false; };

  holder.ondrop = function (e) {
    e.preventDefault();

    for (var i = 0; i < e.dataTransfer.files.length; ++i) {
      var file_path = e.dataTransfer.files[i].path;

      console.log("Se solto el archivo: " + file_path);
      console.log("El contenido así a pelo es:");

      if (/\.txt/.test(file_path)) {
        console.log(fs.readFileSync(file_path).toString());
      } else {
        console.log("EVITANDO imprimir el archivo porque no es un txt.");
      }

    }

    this.className = '';
    return false;
  };

});
