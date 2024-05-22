const mostrarYOcultar = () => {

    const secciones = document.querySelectorAll('.seccionCines, .seccionApps');
  

    secciones.forEach(function(seccion) {
      seccion.addEventListener("click", function() {

          this.classList.toggle("activo");
        
      });
    });

}

module.exports = mostrarYOcultar;
