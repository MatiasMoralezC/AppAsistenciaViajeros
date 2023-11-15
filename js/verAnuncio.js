var anuncio = JSON.parse(sessionStorage.getItem("anuncio"));
document.getElementById('img1').src = anuncio.imgSrc[0]
document.getElementById('img2').src = anuncio.imgSrc[1]
document.getElementById('img3').src = anuncio.imgSrc[2]
document.getElementById('descripcion').innerText = anuncio.descripcion
document.getElementById('titulo').innerText = anuncio.productoNombre
createMap('mapContainer')
window.onload = function(){
    $("#mapContainer").hide()
}

function mostrarMapa(){
    if( $("#mapContainer").is(":visible")){
        $("#mapContainer").hide()
    }else{
        $("#mapContainer").show()
        if(markers.length == 0){
            mostrarSucursales();
        }
    }
    
}

/******************************************************************************
 * Función para crear un mapa.
 */

 var myMap;
 var markers = [];
 function mostrarSucursales(){
     createMapSucursal('mapContainer',comercios.find(c => c.comercioId == anuncio.comercioId))
 }
 
 function createMap(nodeId) {
     var ungsLocation = [-34.5221554, -58.7000067];
     myMap = L.map(nodeId).setView(ungsLocation, 13);
 
     // renderizamos el mapa
     const tileprovider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
     L.tileLayer(tileprovider,
         {
             maxZoom: 25,
         }).addTo(myMap);
 
 }
 
 function createMapSucursal(nodeId, suc) {
     let coordenadas = [suc.ubicacion.lat, suc.ubicacion.lon];
     let marker = L.marker(coordenadas).addTo(myMap)
     .bindPopup(`${suc.nombre}<br/><span class="depDir">${suc.direccion}</span><br/><span class="depHor">${suc.horario}</br></span><span class="depHor">${suc.tel}</span>`); 
     markers.push(marker)
 }
 
 function getVisibleMarkers(map) {
     var markerList = [];
     map.eachLayer(function(layer) {
         if ((layer instanceof L.Marker) && (map.getBounds().contains(layer.getLatLng()))){
             markerList.push(layer);
         };
     });
     return markerList;
 }




