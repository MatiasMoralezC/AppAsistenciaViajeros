var articulosActivos = [
    {
        nombre: "Llavero De Caricatura",
        id: 1,
        descripcion: "Este es el producto 1",
        img: "https://acdn.mitiendanube.com/stores/171/765/products/20230717_2009051-78a97af5730055a9c216896898602081-640-0.webp"
    },
    {
        nombre: "Taza Argentina",
        id: 2,
        descripcion: "Este es el producto 2",
        img: "https://puntolinea.com.ar/wp-content/uploads/2020/06/Mug-Animation-e1593551169608-510x554.png"
    },
    {
        nombre: "Cuadro de Montañas",
        id: 3,
        descripcion: "Este es el producto 3",
        img: "https://http2.mlstatic.com/D_NQ_NP_689597-MLA70668572796_072023-O.webp"
    },
    {
        nombre: "Cuadro de Montañas",
        id: 3,
        descripcion: "Este es el producto 4",
        img: "https://http2.mlstatic.com/D_NQ_NP_689597-MLA70668572796_072023-O.webp"
    },
    {
        nombre: "Cuadro de Montañas",
        id: 3,
        descripcion: "Este es el producto 5",
        img: "https://http2.mlstatic.com/D_NQ_NP_689597-MLA70668572796_072023-O.webp"
    },
    {
        nombre: "Cuadro de Montañas",
        id: 3,
        descripcion: "Este es el producto 6",
        img: "https://http2.mlstatic.com/D_NQ_NP_689597-MLA70668572796_072023-O.webp"
    },
    {
        nombre: "Cuadro de Montañas",
        id: 3,
        descripcion: "Este es el producto 7",
        img: "https://http2.mlstatic.com/D_NQ_NP_689597-MLA70668572796_072023-O.webp"
    },
    
];

function renderArticulos(articulos) {
    var contenidoHTML = '';

    articulos.forEach(function (element){
        contenidoHTML += '<div class="articulo">';
        contenidoHTML += '<h2>' + element.nombre + '</h2>';
        contenidoHTML += '<img src="' + element.img + '" alt="' + element.nombre + '">';
        contenidoHTML += '<p>' + element.descripcion + '</p>';
        contenidoHTML += '</div>';
    });

    return contenidoHTML;
}

document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.container');
    if (container) {
        container.innerHTML = renderArticulos(articulosActivos);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.container');
    if (container) {
        container.innerHTML = renderArticulos(articulosActivos);
    }
});