    
    function cuentaAtras() {
        // Obtenemos el valor de los segundos en el cuadro de texto
        var segundos = document.getElementById("segundos").value;
  
        setTimeout(function() {
            document.getElementById("alerta").style.display = "inline-flex";
            document.getElementById("posponer").style.display = "inline-flex";
            document.getElementById("detener").style.display = "inline-flex";
        }, segundos * 1000);

    }

    function detener() {

        clearTimeout(setTimeout(function() {
            document.getElementById("alerta").style.display = "inline-flex";
            document.getElementById("posponer").style.display = "inline-flex";
            document.getElementById("detener").style.display = "inline-flex";
        }, segundos * 1000));

        document.getElementById("alerta").style.display = "none";
        document.getElementById("posponer").style.display = "none";
        document.getElementById("detener").style.display = "none";
    }

    function posponer() {
        var segundos = document.getElementById("segundos").value;

        clearTimeout(setTimeout(function() {
            document.getElementById("alerta").style.display = "inline-flex";
            document.getElementById("detener").style.display = "inline-flex";
            document.getElementById("posponer").style.display = "inline-flex";

        }, segundos * 1000));

        setTimeout(function() {
            document.getElementById("alerta").style.display = "block";
            document.getElementById("posponer").style.display = "block";
            document.getElementById("detener").style.display = "block";
        }, segundos * 1000);

      }
      

