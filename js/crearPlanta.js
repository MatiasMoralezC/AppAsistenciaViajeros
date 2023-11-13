
//title
const title = document.getElementById('register-plant-title')


//Families for select
const selectFamily = document.getElementById('family')
const families = new Set(plants.map(plant => plant.familyName.toLowerCase()))
const addOptions = () => {
    families.
    forEach(family => {
        selectFamily.appendChild(createElementFromHTML(`<option value="${family}">${family}</option>`))
    })
}
addOptions()

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

//Process new plant form
const newPlantForm = document.getElementById('register-plant-form')
const newPlantCard = document.getElementById('new-plant-card')
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
    title.innerHTML = "Nueva planta"

    const family = document.getElementById('new-plant-family')
    const commonName = document.getElementById('new-plant-common-name')
    const section = document.getElementById('new-plant-section')
    const sectionRow = document.getElementById('new-plant-section-row')
    const sectionColumn = document.getElementById('new-plant-section-column')
    const image = document.getElementById('new-plant-image')

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
    title.innerHTML = "Registrar planta"
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


//Go to new plant
/* const newPlantSubmit = document.getElementById('new-plant-submit')
newPlantSubmit?.addEventListener('click', (e) => {
    return window.location = "./../pages/plantaNueva.html"
})
 */








