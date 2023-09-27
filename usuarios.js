var usuariosRegistrados =
  JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];

function iniciarSesion() {
  var documento = document.getElementById("documento").value;
  var contrasena = document.getElementById("contrasena").value;

  // Comprobar las credenciales en la lista de usuarios registrados
  var usuario = usuariosRegistrados.find(function (user) {
    return user.documento === documento && user.contrasena === contrasena;
  });

  if (usuario) {
    alert("Inicio de sesión exitoso.");
    // Aquí puedes redirigir al usuario a una página de inicio, por ejemplo.
  } else {
    alert("Error: Credenciales incorrectas.");
  }
}

function createUser() {
  // Obtener los datos del formulario
  var nombre = document.getElementById("nombre").value;
  var documento = document.getElementById("documento").value;
  var grado = document.getElementById("grado").value;
  var contrasena = document.getElementById("contrasena").value;

  // Crear un nuevo usuario
  var nuevoUsuario = {
    nombre: nombre,
    documento: documento,
    grado: grado,
    contrasena: contrasena,
  };

  // Agregar el nuevo usuario a la lista
  usuariosRegistrados.push(nuevoUsuario);

  // Guardar la lista actualizada en localStorage
  localStorage.setItem(
    "usuariosRegistrados",
    JSON.stringify(usuariosRegistrados)
  );

  alert("Registro exitoso.");
  window.location.href = "registro.html";
}

document
  .getElementById("register-form")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    createUser();
  });


  document.getElementById("login-form")?.addEventListener("submit", function (event) {
    event.preventDefault(); 
    iniciarSesion();
});