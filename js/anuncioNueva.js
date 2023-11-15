//title
const title = document.getElementById('register-anuncio-title')

//tipo de anuncio
document.getElementsByName("tipoPublicacion").forEach(element => {
    element.addEventListener("change", () => {
      if(element.value == "articulo"){
        document.getElementById("subFormArticulo").style.display = "block";
        document.getElementById("subFormServicio").style.display = "none";
      }
      else{
        document.getElementById("subFormArticulo").style.display = "none";
        document.getElementById("subFormServicio").style.display = "block";
      }
    })
  })

//read photo
const imageInput = document.querySelector("#image");
var uploadedImage = "";
imageInput.addEventListener("change", function() {
    const reader = new FileReader();
    uploadedImage  = reader.result;
    reader.readAsDataURL(this.files[0]);
});
const image_input = document.querySelector("#image")
var uploaded_image = ""
image_input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      uploaded_image = reader.result;
      document.querySelector("#display-image").style.display = 'block'
      document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
  });


  
const formAnuncio = document.getElementById("register-anuncio-form");
formAnuncio?.addEventListener("submit", (e) => {
    e.preventDefault()
    let newAnuncio = {
        id: 2,
        imgSrc: uploaded_image,
        productoNombre: e.target.commonName.value,
        descripcion: e.target.commonDescripcion.value,
        comercio: "Floreria Bob",
        categoria: e.target.commonCategoria.value,
        tipoAnuncio: e.target.tipoPublicacion.value
    }

    if(newAnuncio.categoria == "servicio"){
        newAnuncio.caracteristicas = e.target.commonCaracteristicasArticulo.value;
        newAnuncio.stock = e.target.commonStockArticulo.value;
    }else{
        newAnuncio.restricciones = e.target.commonDescripcionServicio.value;
    }

    if(anuncios == null)
        anuncios = []

    anuncios.push(newAnuncio)
    sessionStorage.setItem("anuncios", JSON.stringify(anuncios))
    Swal.fire(
      'Atención!',
      'El anuncio fue creado correctamente!',
      'success'
    )
})
