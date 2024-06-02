function previewFiles() {
  const preview = document.querySelector("#preview");
  const files = document.querySelector("input[type=file]").files;

  function readAndPreview(file) {
    if (/\.(jpe?g|png|gif)$/i.test(file.imagenes)) {
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

document.getElementById('car-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Formulario enviado con éxito!');
});
