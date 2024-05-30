// let map = L.map('map').setView([0,-1], 16);
// let customIcon = L.icon({
//     iconUrl: 'https://cdn-icons-png.flaticon.com/512/4244/4244731.png',
//     iconSize: [38, 38]
// });


// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// // Add current location
// function addCurrentLocationMarker() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function (position) {
//             let lat = position.coords.latitude;
//             let lng = position.coords.longitude;
//             L.marker([lat, lng]).addTo(map).bindPopup("Tu ubicación actual").openPopup();
//         });
//     } else {
//         alert("La geolocalización no es compatible con este navegador.");
//     }
// }

// // Add the position of the restaurant
// function addUserDefinedLocation(lat, lng, popupText) {
//     L.marker([lat, lng], {icon: customIcon}).addTo(map).bindPopup(popupText).openPopup();
// }

// // Add marker when page load
// addCurrentLocationMarker();
// addUserDefinedLocation(6.21018,-75.57166, "Las Delicias de Don Pedro");
