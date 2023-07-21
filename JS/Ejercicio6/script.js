function anadirImagen(){
    let div = document.getElementById("imagen");
        for (var i = 1; i <= 5; i++) {
            let img = div;
            img = new Image(200,300);
            img.src = "imagenes/minion5" + ".jpeg";
            div.appendChild(img);
        }
}

/*function eliminarImagen(){
    var valor = document.getElementById("valor").value;
    var imagenes = document.getElementById("imagen");
    var imagen_a_eliminar = document.body.getElementsByClassName("imagen")[valor - 1];
    imagenes.remove(imagen_a_eliminar);
    //var imagen = imagenes.getElementsByTagName("img")[valor - 1];
    //imagenes.removeChild(imagen);
}*/