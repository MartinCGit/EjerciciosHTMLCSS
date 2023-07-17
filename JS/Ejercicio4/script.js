
function mostrarHora(){
    var fecha = new Date();
    horas=fecha.getHours();
    minutos=fecha.getMinutes();
    segundos=fecha.getSeconds();
    
    
    valor = document.getElementById("contenido").innerHTML = horas+':'+minutos+':'+segundos;

    let clase = document.getElementsByClassName("now");

    for (var i = 0; i < clase.length; i++) {
        clase[i].innerHTML = valor;
      }
}              
        
    window.onload = function() {
        setInterval(mostrarHora, 1000);
    }