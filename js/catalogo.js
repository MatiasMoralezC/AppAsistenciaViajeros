

for (const p of anuncios) {
    p.productoNombre = p.productoNombre.toUpperCase();
    p.comercio = p.comercio.toUpperCase();
    p.categoria = p.categoria.toUpperCase();
}

let anunciosToShow = anuncios

function redirectToAnuncio(){
    //sessionStorage.clear()
    sessionStorage.setItem("anuncio", null)
    let an = anuncios.find(e=>e.id==$("#anuncioId").text())
    sessionStorage.setItem("anuncio", JSON.stringify(an))
    window.location.href = './anuncio.html'
}

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
        table = table + `<tr onClick="redirectToAnuncio()">
        <td><img class="imgAnuncios"  src="${anuncio.imgSrc[0]}" /></td>
        <td>${anuncio.productoNombre}</td>
        <td>${anuncio.comercio}</td>
        <td>${anuncio.categoria}</td>
        <td id="anuncioId" hidden>${anuncio.id}</td>
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
filterInput.addEventListener('keydown', (e) => {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (e.key == "Backspace") {
        if (toFilter !== "") toFilter = toFilter.slice(0, toFilter.length - 1)
    } else if(keycode != 13){
        toFilter = toFilter + e.key.toLocaleLowerCase()
    }
    filterCatalog(toFilter)
})