function imprimirConsola(){

        const form = document.querySelector('#formulario');
        
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const data = new FormData(event.target);

            console.log('Datos del formulario:');
            
            for (const [key, value] of data.entries()) {
                console.log(`${key}: ${value}`);
            }
            
        });
}

    
    function registros(){
        
        document.querySelector("#formulario").addEventListener("submit", imprimirConsola);

        // Coleccion en JSON
        let coleccionusuarios = JSON.parse(localStorage.getItem('myCollection'));
    
        // Registro con todos los datos que se quiere añadir a la coleccion de usuarios.
        let nuevoregistro = {
            id: valor.length + 1,
            nombre: document.getElementById('nombre').value,
            apellidos: document.getElementById('apellidos').value,
            tipoVia: document.getElementById('tipo').value,
            nombreVia: document.getElementById('nombrevia').value,
            codigoPostal: document.getElementById('codpostal').value,
            ciudad: document.getElementById('ciudad').value,
            provincia: document.getElementById('provincia').value,
            pais: document.getElementById('pais').value,
            fechanacimiento: document.getElementById('fecha-nacimiento').value,
            notamedia: document.getElementById('notamedia').value,
            telefono: document.getElementById('telefono').value,
            email: document.getElementById('email').value,
            contrasenha: document.getElementById('password').value,
            repetircontrasenha: document.getElementById('password2').value,
            pais2: document.getElementById('op_pais').value,
            tipocuenta: document.getElementById('tipocuenta').value,
            descripcion: document.getElementById('areadescripcion').value,
            foto: document.getElementById('foto').value,
            cv: document.getElementById('CV').value,
        };

        // Añadimos el nuevo registro y lo guardamos en localStorage.
        coleccionusuarios.push(nuevoregistro);
        localStorage.setItem('myCollection', JSON.stringify(coleccionusuarios));

        if (window.localStorage.hasOwnProperty('myCollection')){  /* Comprobar que contiene la propiedad y obtenerlo */
            document.querySelector("#formulario").value = window.localStorage.getItem('myCollection');
        }
}