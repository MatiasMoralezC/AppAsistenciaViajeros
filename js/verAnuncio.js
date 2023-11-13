var anuncio = sessionStorage.getItem("anuncio");
document.getElementById('img1').src = anuncio.imgSrc
document.getElementById('img2').src = anuncio.imgSrc2
document.getElementById('img3').src = anuncio.imgSrc3
document.getElementById('descripcion').innerText = anuncio.descripcion
document.getElementById('titulo').innerText = anuncio.productoNombre




