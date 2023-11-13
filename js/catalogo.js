

for (const p of anuncios) {
    p.productoNombre = p.productoNombre.toUpperCase();
    p.comercio = p.comercio.toUpperCase();
    p.categoria = p.categoria.toUpperCase();
}

let anunciosToShow = anuncios

const laodCatalog = () => {
    let tableData = document.getElementById('table-catalog')
    let table = `<table data-toggle="table" id="table-catalog">
    <thead>
    <tr>
    <th>Imagen</th>
    <th>Producto</th>
    <th>Comercio</th>
    <th>Categoria</th>
    </tr>
    </thead>
    <tbody>
    `

    anunciosToShow.forEach((anuncio, i) => {
        table = table + `<tr>
        <td><img class="imgAnuncios"  src="${anuncio.imgSrc}" /></td>
        <td>${anuncio.productoNombre}</td>
        <td>${anuncio.comercio}</td>
        <td>${anuncio.categoria}</td>
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
        anunciosToShow = anuncios;
    } else {
        anunciosToShow = anuncios.filter(anuncio => {
            return (
                anuncio.productoNombre.toLowerCase().includes(word.toLowerCase()) ||
                anuncio.comercio.toLowerCase().includes(word.toLowerCase()) ||
                anuncio.categoria.toLowerCase().includes(word.toLowerCase())
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
