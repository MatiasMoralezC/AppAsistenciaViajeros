

for (const p of plants) {
    p.familyName = p.familyName.toUpperCase();
    p.commonName = p.commonName.toUpperCase();
    p.mainColor = p.mainColor.toUpperCase();
    p.typeOfSoil = p.typeOfSoil.toUpperCase();
    p.ambientTemperature = p.ambientTemperature.toUpperCase();
    p.irrigationCycle = p.irrigationCycle.toUpperCase();
}

let plantsToShow = plants

const laodCatalog = () => {
    let tableData = document.getElementById('table-catalog')
    let table = `<table data-toggle="table" id="table-catalog">
    <thead>
    <tr>
    <th>N°</th>
    <th>Imagen</th>
    <th>Familia</th>
    <th>Nombre comun</th>
    <th>Color principal</th>
    <th>Tipo de suelo</th>
    <th>Temperatura</th>
    <th>Riego</th>
    </tr>
    </thead>
    <tbody>
    `

    plantsToShow.forEach((plant, i) => {
        table = table + `<tr>
        <th scope="row">${i + 1}</th>
        <td><img class="imgComercios"  src="${plant.imgSrc}" /></td>
        <td>${plant.familyName}</td>
        <td>${plant.commonName}</td>
        <td>${plant.mainColor}</td>
        <td>${plant.typeOfSoil}</td>
        <td>${plant.ambientTemperature}</td>
        <td>${plant.irrigationCycle}</td>
    </tr>`
    })

    table = table +
        `</tbody>
    </table>`
        ;

    tableData.innerHTML = table
    
}
laodCatalog()

const filterCatalog = (word) => {
    if (word.length === 0) {
        plantsToShow = plants;
    } else {
        plantsToShow = plants.filter(plant => {
            return (
                plant.commonName.toLowerCase().includes(word.toLowerCase()) ||
                plant.familyName.toLowerCase().includes(word.toLowerCase()) ||
                plant.mainColor.toLowerCase().includes(word.toLowerCase()) ||
                plant.typeOfSoil.toLowerCase().includes(word.toLowerCase()) ||
                plant.ambientTemperature.toLowerCase().includes(word.toLowerCase()) ||
                plant.irrigationCycle.toLowerCase().includes(word.toLowerCase()) ||
                plant.ambientTemperature.toString().toLowerCase().includes(word.toLowerCase())
            )
        })
    }
    laodCatalog()
}
const filterInput = document.getElementById('filter')
let toFilter = ""
filterInput.addEventListener('keyup', (e) => {
    if (e.key == "Backspace") {
        if (toFilter !== "") toFilter = toFilter.slice(0, toFilter.length - 1)
    } else {
        toFilter = toFilter + e.key.toLocaleLowerCase()
    }
    filterCatalog(toFilter)
})
