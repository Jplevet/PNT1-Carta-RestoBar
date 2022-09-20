function validarFomulario(){
 
  var nom = document.getElementById('nombre').value;
  console.log("linea 4");
  if(nom.length == 0) {
    alert('Nombre vacío');
    return;
  }
  console.log("linea 4");
    let correo = document.forms["formulario"]["correo"];
    var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    
    if (correo.value.match(mailformat)) {
        return true;
    } else {
    alert("Email incorrecto!");
        return false;
    }
}