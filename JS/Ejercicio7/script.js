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