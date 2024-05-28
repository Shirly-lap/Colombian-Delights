const URL_RESTAURANT = `http://localhost:3000/restaurantes`;
let tabla = document.querySelector("#restaurantTable");
let tbody = tabla.getElementsByTagName("tbody")[0];

async function insertarDatosEnTabla(tabla) {
  const response = await fetch(URL_RESTAURANT);
  const restaurantes = await response.json();
  restaurantes.forEach(restaurant => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${restaurant.id}</td>
      <td>${restaurant.name}</td>
      <td>${restaurant.description}</td>
      <td>${restaurant.address}</td>
      <td>options</td>
    `;
    tbody.appendChild(row);
  });
}

// Call the function to insert data
insertarDatosEnTabla(tabla);
