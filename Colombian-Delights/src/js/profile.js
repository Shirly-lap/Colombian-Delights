// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// function initMap() {
//     // Crear un mapa centrado en una posición específica
//     var map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: 0, lng: 0}, // Coordenadas de ejemplo
//       zoom: 12 // Zoom del mapa
//     });

//     // Obtener la ubicación del usuario
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(function(position) {
//         var pos = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude
//         };

//         // Crear un marcador para la posición actual
//         var marker = new google.maps.Marker({
//           position: pos,
//           map: map,
//           title: '¡Estás aquí!'
//         });

//         // Centrar el mapa en la posición actual
//         map.setCenter(pos);
//       }, function() {
//         handleLocationError(true, map.getCenter());
//       });
//     } else {
//       // El navegador no soporta geolocalización
//       handleLocationError(false, map.getCenter());
//     }

//     // Función para manejar errores de geolocalización
//     function handleLocationError(browserHasGeolocation, pos) {
//       var infoWindow = new google.maps.InfoWindow({
//         position: pos,
//         content: browserHasGeolocation ?
//           'Error: El servicio de geolocalización falló.' :
//           'Error: Tu navegador no soporta geolocalización.'
//       });
//       infoWindow.open(map);
//     }

//     // Definir una posición específica
//     var markerPosition = new google.maps.LatLng(6.208998324923129, -75.56773618470302); // Coordenadas de ejemplo
//     var customMarker = new google.maps.Marker({
//       position: markerPosition,
//       map: map,
//       title: 'Posición Definida',
//       icon: {
//         url: 'https://cdn3d.iconscout.com/3d/premium/thumb/food-truck-8094303-6478880.png',
//         scaledSize: new google.maps.Size(50, 50)
//       }
//     });
//   }


// document.addEventListener("DOMContentLoaded", function () {
//   let map = L.map('map').setView([19.4327, -99.1331], 16);

//   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   }).addTo(map);

//   L.marker([19.4327, -99.1331]).addTo(map).bindPopup("Zócalo de la Ciudad de México");
//   L.marker([19.4349, -99.1313]).addTo(map).bindPopup("Templo Mayor");

//   map.on('click', function (e) {
//     alert("Posición: " + e.latlng);
//   });
// });
