// script.js

document.addEventListener('DOMContentLoaded', () => {
    const restaurantListElement = document.getElementById('restaurant-list');
    const restaurantDetailElement = document.getElementById('restaurant-detail');
    const restaurantDetailContentElement = document.getElementById('restaurant-detail-content');
    const backButton = document.getElementById('back-button');

    const API_URL = 'http://localhost:3000/restaurantes';  // URL del JSON server

    // Función para cargar datos de restaurantes
    async function loadRestaurantsData() {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Error al cargar los datos');
            }
            const data = await response.json();
            renderRestaurantList(data);
        } catch (error) {
            console.error('Error al cargar los datos:', error);
        }
    }

    // Función para renderizar la lista de restaurantes
    function renderRestaurantList(restaurants) {
        restaurantListElement.innerHTML = restaurants.map(restaurant => `
            <div class="card" data-id="${restaurant.id}">
                <h2>${restaurant.name}</h2>
                <p>${restaurant.description}</p>
            </div>

            
        `).join('');

        // Añadir evento de clic a cada card
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', (event) => {
                const restaurantId = event.currentTarget.getAttribute('data-id');
                showRestaurantDetail(restaurantId, restaurants);
            });
        });
    }

    // Función para mostrar los detalles del restaurante
    function showRestaurantDetail(id, restaurants) {
        const restaurant = restaurants.find(r => r.id === id);        
        console.log(restaurant);
        if (restaurant) {
            console.log('holaaa');
            restaurantDetailContentElement.innerHTML = `
                <h1>${restaurant.name}</h1>
                <p>${restaurant.description}</p>
                <p>Dirección: ${restaurant.address}</p>
                <h2>Menú</h2>
                ${renderMenu(restaurant.menu)}
            `;
            restaurantListElement.style.display = 'none';
            restaurantDetailElement.style.display = 'block';
        }
    }

    // Función para renderizar el menú del restaurante
    function renderMenu(menu) {
        let html = '';
        for (const category in menu) {
            html += `<h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>`;
            html += '<div>';
            menu[category].forEach(item => {
                html += `
                    <div>
                        <h4>${item.name}</h4>
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                `;
            });
            html += '</div>';
        }
        return html;
    }

    // Volver a la lista de restaurantes
    backButton.addEventListener('click', () => {
        restaurantDetailElement.style.display = 'none';
        restaurantListElement.style.display = 'block';
    });

    // Cargar y renderizar la lista de restaurantes al cargar la página
    loadRestaurantsData();
});
