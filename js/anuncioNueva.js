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
const imagesInput = document.querySelector("#images");
imagesInput.addEventListener("change", function() {
  const displayImagesDiv = document.querySelector("#display-images");
  displayImagesDiv.innerHTML = ""; // Clear previous images

  for (let i = 0; i < this.files.length; i++) {
    const reader = new FileReader();
    const file = this.files[i];

    reader.onload = function(event) {
      const uploadedImage = event.target.result;

      const imageDiv = document.createElement("div");
      imageDiv.classList.add("uploaded-image");
      imageDiv.style.backgroundImage = `url(${uploadedImage})`;
      displayImagesDiv.appendChild(imageDiv);
    };

    reader.readAsDataURL(file);
  }
});


  
const formAnuncio = document.getElementById("register-anuncio-form");
formAnuncio?.addEventListener("submit", (e) => {
  e.preventDefault();

  const uploadedImages = [];
  const imagesInput = document.querySelector("#images");

  if (imagesInput.files.length > 0) {
    for (let i = 0; i < imagesInput.files.length; i++) {
      const reader = new FileReader();
      const file = imagesInput.files[i];

      reader.onload = function (event) {
        uploadedImages.push(event.target.result);

        if (uploadedImages.length === imagesInput.files.length) {
          createNewAnuncio(e, uploadedImages);
        }
      };

      reader.readAsDataURL(file);
    }
  } else {
    createNewAnuncio(e, uploadedImages);
  }
});

function createNewAnuncio(e, uploadedImages) {
  console.log(uploadedImages); // Array of uploaded images

  let newAnuncio = {
    id: 2,
    imgSrc: uploadedImages, // Array of image sources
    productoNombre: e.target.commonName.value,
    descripcion: e.target.commonDescripcion.value,
    comercio: "Comercio de prueba",
    categoria: e.target.commonCategoria.value,
    tipoAnuncio: e.target.tipoPublicacion.value,
  };

  if (newAnuncio.categoria === "servicio") {
    newAnuncio.caracteristicas = e.target.commonCaracteristicasArticulo.value;
    newAnuncio.stock = e.target.commonStockArticulo.value;
  } else {
    newAnuncio.restricciones = e.target.commonDescripcionServicio.value;
  }

  let anuncios = JSON.parse(sessionStorage.getItem("anuncios")) || [];
  anuncios.push(newAnuncio);
  sessionStorage.setItem("anuncios", JSON.stringify(anuncios));

  Swal.fire(
    'Atención!',
    'El anuncio fue creado correctamente!',
    'success'
  );
}


/*
//Process new anuncio form
const newPlantForm = document.getElementById('register-anuncio-form')
const newPlantCard = document.getElementById('new-anuncio-card')
newPlantForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const newPlant = {
        family: e.target.family.value,
        commonName: e.target.commonName.value,
        section: e.target.section.value,
        row: e.target.row.value,
        column: e.target.column.value,
        image: uploaded_image
    }
    newPlantCard.style.display = 'flex'
    newPlantForm.style.display= 'none'
    title.innerHTML = "Nueva anuncio"

    const family = document.getElementById('new-anuncio-family')
    const commonName = document.getElementById('new-anuncio-common-name')
    const section = document.getElementById('new-anuncio-section')
    const sectionRow = document.getElementById('new-anuncio-section-row')
    const sectionColumn = document.getElementById('new-anuncio-section-column')
    const image = document.getElementById('new-anuncio-image')

    family.innerHTML = family.innerHTML + newPlant.family
    commonName.innerHTML = commonName.innerHTML + newPlant.commonName
    section.innerHTML = section.innerHTML+  newPlant.section
    sectionRow.innerHTML = sectionRow.innerHTML + newPlant.row
    sectionColumn.innerHTML = sectionColumn.innerHTML + newPlant.column
    image.src = newPlant.image

    
} )

//Process new family option
const addNewFamily = document.getElementById('add-new-family')
const newFamilyForm = document.getElementById('register-family-form')
const newFamilyName = document.getElementById('newFamilyFamily')
const familyScientificName = document.getElementById('familyScientificName')
const familyMainColor = document.getElementById('familyMainColor')
const tempeture = document.getElementById('tempeture')

const goToNewPlant = () => {
    newPlantForm.style.display = 'flex'
    newFamilyForm.style.display = 'none'
    title.innerHTML = "Crear anuncio"
}
const goToNewFamily = () => {
    newPlantForm.style.display = 'none'
    newFamilyForm.style.display = 'flex'
    title.innerHTML = "Registrar familia"
}
const backArrow = document.getElementById('back-arrow')
backArrow.addEventListener('click', goToNewPlant)
addNewFamily.addEventListener('click', goToNewFamily)
newFamilyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    goToNewPlant()
    const newFamily = {
        name: e.target.newFamilyFamily.value,
        familyScientificName: e.target.familyScientificName.value,
        familyMainColor: e.target.familyMainColor.value,
        typeOfSoil: e.target.typeOfSoil.value,
        tempeture: e.target.tempeture.value,
        irrigationCycle: e.target.irrigationCycle.value
    }

    newFamily.name.length > 0  ? families.add(newFamily.name.toLowerCase()) : ""
    addOptions()
    newFamilyName.value = ""
    familyScientificName.value = ""
    familyMainColor.value = ""
    tempeture.value = ""
    
})

*/
//Go to new anuncio
/* const newPlantSubmit = document.getElementById('new-anuncio-submit')
newPlantSubmit?.addEventListener('click', (e) => {
    return window.location = "./../pages/anuncioNueva.html"
})
 */








