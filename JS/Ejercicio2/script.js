function cambiar(){
    document.getElementById("contenido").innerHTML = "¡Hola Mundo!"
}

function update() {
    
    let colores = (["#0000FF", "#00FF00", "#808080", "#FFFF00"]);
    let indice = 0;

    setInterval (function(){
        console.log("Cada segundo cambiamos de color");
            document.getElementById("contenido").style.backgroundColor = colores[indice];
            indice++;
            if (colores[indice] === colores.length)
                indice = 0;
    }, 1000)
}    
