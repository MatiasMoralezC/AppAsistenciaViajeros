/******************************************************************************
 * Función para crear un mapa.
 */

var myMap;
var markers = [];
function mostrarSucursales(){
    createMap('mapContainer')
    createMapSucursales('mapContainer')
    mostrarBotonesMarkers()
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
window.onload = mostrarSucursales()
function createMapSucursales(nodeId){
    sucursales.forEach( suc => createMapSucursal(nodeId, suc))
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

function mostrarBotonesMarkers(){
    for(let i=0;i<sucursales.length;i++){
        var newLi = document.createElement("li");
        var newButton = document.createElement("button");
        var newContent = document.createTextNode(sucursales[i].nombre);
        newButton.appendChild(newContent); //añade texto al div creado.
        newButton.style.width = '100%'
        newLi.append(newButton)
        document.getElementById('listaSucursales').append(newLi)
        newButton.onclick = function() {
            markers[i].fire('click')
        };
    }
    document.getElementById('mostrarSucursales').onclick = function() {
        if(document.getElementById('sucursalesContainer').style.display === 'none'){
            document.getElementById('sucursalesContainer').style.display = ''
        }else{
            document.getElementById('sucursalesContainer').style.display = 'none'
        }
        
    }
}