
function anadirImagen(){
    let miImagen = new Image(200, 300);
    let miImagen2 = new Image(200, 300);
    let miImagen3 = new Image(200, 300);
    let miImagen4 = new Image(200, 300);
    let miImagen5 = new Image(200, 300);

    miImagen.src = 'imagenes/minion.png';
    miImagen2.src = 'imagenes/minion2.png';
    miImagen3.src = 'imagenes/minion3.png';
    miImagen4.src = 'imagenes/minion4.png';
    miImagen5.src = 'imagenes/minion5.jpeg';

    document.body.appendChild(miImagen);
    document.body.appendChild(miImagen2);
    document.body.appendChild(miImagen3);
    document.body.appendChild(miImagen4);
    document.body.appendChild(miImagen5);
}