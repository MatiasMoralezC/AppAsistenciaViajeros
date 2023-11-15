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


//Go to new anuncio
/* const newPlantSubmit = document.getElementById('new-anuncio-submit')
newPlantSubmit?.addEventListener('click', (e) => {
    return window.location = "./../pages/anuncioNueva.html"
})
 */








