function validarFormulario() {
  const parrafo = document.getElementById("error");
  parrafo.innerHTML = "";

  // Validar nombre
  if (document.formulario.nombre.value.trim() === "") {
    document.formulario.nombre.focus();
    parrafo.innerHTML = "NOMBRE INCORRECTO";
    return false;
  }

  // Validar apellido
  if (document.formulario.apellido.value.trim() === "") {
    document.formulario.apellido.focus();
    parrafo.innerHTML = "APELLIDO INCORRECTO";
    return false;
  }

  // Validar DNI
  const dni = document.formulario.dni.value.trim();
  if (dni === "" || isNaN(dni) || dni.length != 8) {
    document.formulario.dni.focus();
    parrafo.innerHTML = "DNI INEXISTENTE";
    return false;
  }

  // Validar número de teléfono
  const num = document.formulario.num.value.trim();
  if (num === "" || isNaN(num) || num.length != 9) {
    document.formulario.num.focus();
    parrafo.innerHTML = "NUMERO DE TELEFONO INEXISTENTE";
    return false;
  }

  // Validar email
  const email = document.formulario.email.value.trim();
  if (!email.includes('@') || !email.includes('.')) {
    document.formulario.email.focus();
    parrafo.innerHTML = "EMAIL INCORRECTO";
    return false;
  }

  // Validar país
  if (document.formulario.pais.value.trim() === "") {
    document.formulario.pais.focus();
    parrafo.innerHTML = "PAIS INCORRECTO";
    return false;
  }


  // Validar marca
  if (document.formulario.marca.value.trim() === "") {
    document.formulario.marca.focus();
    parrafo.innerHTML = "NO AGREGO LA MARCA DEL AUTOMOVIL";
    return false;
  }

  // Validar año
  const anio = parseInt(document.formulario.anio.value.trim());
  if (isNaN(anio) || anio < 1900 || anio > new Date().getFullYear()) {
    document.formulario.anio.focus();
    parrafo.innerHTML = "AÑO DEL AUTOMOVIL INVALIDO";
    return false;
  }

  // Validar modelo
  if (document.formulario.modelo.value.trim() === "") {
    document.formulario.modelo.focus();
    parrafo.innerHTML = "NO AGREGO EL MODELO DEL AUTOMOVIL";
    return false;
  }

  // Validar tipo de motor
  if (document.formulario.motor.selectedIndex === 0) {
    document.formulario.motor.focus();
    parrafo.innerHTML = "NO SELECCIONO UNA OPCIÓN DE MOTOR";
    return false;
  }

  // Validar transmisión
  if (document.formulario.transmision.selectedIndex === 0) {
    document.formulario.transmision.focus();
    parrafo.innerHTML = "NO SELECCIONO UNA OPCIÓN DE TRANSMISIÓN";
    return false;
  }

  // Validar checkbox de combustibles
  const combustibles = document.querySelectorAll('input[name="combustible"]:checked');
  if (combustibles.length === 0) {
    parrafo.innerHTML = "NO SELECCIONO NINGUNA OPCIÓN DE COMBUSTIBLE";
    return false;
  }

  // Validar descripción
  if (document.formulario.descripcion.value.trim() === "") {
    document.formulario.descripcion.focus();
    parrafo.innerHTML = "NO AGREGO UNA DESCRIPCIÓN DEL AUTOMOVIL";
    return false;
  }

  parrafo.innerHTML = "GRACIAS POR COMPLETAR EL FORMULARIO";
  document.formulario.submit();
}

function previewFiles() {
  const preview = document.querySelector("#preview");
  const files = document.querySelector("input[type=file]").files;

  function readAndPreview(file) {
    // Make sure `file.name` matches our extensions criteria
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      const reader = new FileReader();

      reader.addEventListener(
        "load",
        () => {
          const image = new Image();
          image.height = 100;
          image.title = file.name;
          image.src = reader.result;
          preview.appendChild(image);
        },
        false,
      );

      reader.readAsDataURL(file);
    }
  }

  if (files) {
    Array.prototype.forEach.call(files, readAndPreview);
  }
}

const picker = document.querySelector("#browse");
picker.addEventListener("change", previewFiles);
