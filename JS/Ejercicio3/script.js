
function mostrarHora(){
    var fecha = new Date();
    horas=fecha.getHours();
    minutos=fecha.getMinutes();
    segundos=fecha.getSeconds();
    
    
    valor = document.getElementById("contenido").innerHTML = horas+':'+minutos+':'+segundos;
}        
        
    window.onload = function() {
        setInterval(mostrarHora, 1000);
    }
    