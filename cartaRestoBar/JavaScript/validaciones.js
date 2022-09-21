function validarFormulario(){
 
  var nom = document.getElementById('nombre').value;
  if(nom.length == 0) {
    alert('Nombre vacío');
    return;
  }
  let correo = document.forms["formulario"]["correo"];
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (correo.value.match(mailformat)) {
      return true;
  } else {
  alert("Email incorrecto!");
      return false;
  }
}