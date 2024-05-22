const validacion  = () => {

  const form = document.querySelector('#form')

  form.addEventListener('submit', (evento) => { 

      if(!form.checkValidity()){ 
          

          evento.preventDefault() 
          evento.stopPropagation()  


          form.classList.add('was-validated')
      }
      else
          alert('Formulario Enviado')
  })  
}

module.exports = validacion;
