/******************************************************************************
 * Función para crear un mapa.
 */

var myMap;
var markersComercios = [];
var markersCentros = [];
var markersEventos = [];

function mostrarSucursales(){
    createMap('mapContainer')
    createMapSucursales('mapContainer')
    mostrarBotonesMarkers()
    mostrarBotonesMarkersDeCentros()
    mostrarBotonesMarkersEventos()
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
    movilesYCentros.forEach( cen => createMapCentro(nodeId, cen))
    eventos.forEach( eve => createMapEvento(nodeId, eve) )
}

function createMapSucursal(nodeId, suc) {
    let coordenadas = [suc.ubicacion.lat, suc.ubicacion.lon];
    let marker = L.marker(coordenadas).addTo(myMap)
    .bindPopup(`${suc.nombre}<br/><span class="depDir">${suc.direccion}</span><br/><span class="depHor">${suc.horario}</br></span><span class="depHor">${suc.tel}</span>`,  {closeOnClick: true, autoClose: false}); 
    markersComercios.push(marker)
}

function createMapCentro(nodeId, cen) {
    let greenIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      }); //icono personalizado para los centros y moviles

    let coordenadas = [cen.ubicacion.lat, cen.ubicacion.lon];
    let marker = L.marker(coordenadas, {icon: greenIcon}).addTo(myMap)
    .bindPopup(`${cen.nombre}<br/><span class="depDir">${cen.direccion}</span><br/><span class="depHor">${cen.horario}</br></span><span class="depHor">${cen.tel}</span>`,  {closeOnClick: true, autoClose: false}); 
    markersCentros.push(marker)
}

function createMapEvento(nodeId, eve) {
    let orangeIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      }); //icono personalizado para eventos

    let coordenadas = [eve.ubicacion.lat, eve.ubicacion.lon];
    let marker = L.marker(coordenadas, {icon: orangeIcon}).addTo(myMap)
    .bindPopup(`Evento: ${eve.nombre}<br/><span class="depDir">${eve.direccion}</span><br/><span class="depHor">${eve.horario}</br></span><span class="depHor">${eve.tel}</span>`,  {closeOnClick: true, autoClose: false}); 
    markersEventos.push(marker)
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

function mostrarTodosMarkersComercios() {
    let button = document.getElementById('mostrarSucursales')

    button.onclick = function() {
        for(let i=0;i<sucursales.length;i++){
            markersComercios[i].openPopup()
        } 
    }
}

function mostrarTodosMarkersCentros() {
    let button = document.getElementById('mostrarCentros')

    button.onclick = function() {
        for(let i=0;i<movilesYCentros.length;i++){
            markersCentros[i].openPopup()
        } 
    }
}

function mostrarTodosMarkersEventos() {
    let button = document.getElementById('mostrarEventos')

    button.onclick = function() {
        for(let i=0;i<eventos.length;i++){
            markersEventos[i].openPopup()
        } 
    }
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
            markersComercios[i].fire('click')
        };
    }
    /* document.getElementById('mostrarSucursales').onclick = function() {
        if(document.getElementById('sucursalesContainer').style.display === 'none'){
            document.getElementById('sucursalesContainer').style.display = ''
        }else{
            document.getElementById('sucursalesContainer').style.display = 'none'
        }
        
    } */
}

function mostrarBotonesMarkersDeCentros(){
    for(let i=0;i<movilesYCentros.length;i++){
        var newLi = document.createElement("li");
        var newButton = document.createElement("button");
        var newContent = document.createTextNode(movilesYCentros[i].nombre);
        newButton.appendChild(newContent);
        newButton.style.width = '100%'
        newLi.append(newButton)
        document.getElementById('listaCentros').append(newLi)
        newButton.onclick = function() {
            markersCentros[i].fire('click')
        };
    }
    /* document.getElementById('mostrarCentros').onclick = function() {
        if(document.getElementById('centrosContainer').style.display === 'none'){
            document.getElementById('centrosContainer').style.display = ''
        }else{
            document.getElementById('centrosContainer').style.display = 'none'
        }
        
    } */
}

function mostrarBotonesMarkersEventos() {
    for(let i=0;i<eventos.length;i++){
        var newLi = document.createElement("li");
        var newButton = document.createElement("button");
        var newContent = document.createTextNode(eventos[i].nombre);
        newButton.appendChild(newContent);
        newButton.style.width = '100%'
        newLi.append(newButton)
        document.getElementById('listaEventos').append(newLi)
        newButton.onclick = function() {
            markersEventos[i].fire('click')
        };
    }
}

mostrarTodosMarkersComercios()
mostrarTodosMarkersCentros()
mostrarTodosMarkersEventos()