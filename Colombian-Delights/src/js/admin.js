import Swal from 'sweetalert2'

const URL_RESTAURANT = `http://localhost:3000/restaurantes`;
let tabla = document.querySelector("#restaurantTable");
let tbody = document.querySelector("#tableBody");
let form = document.querySelector('#restaurantForm');
let id;

const name = document.querySelector('#name');
const phoneNumber = document.querySelector('#phoneNumber');
const address = document.querySelector('#address');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
    });
    console.log('Form submitted');
    if (id === undefined) {
        console.log('Creating new restaurant');
        await createRestaurant(name, phoneNumber, address);
    } else {
        console.log(`Updating restaurant with id: ${id}`);
        await updateRestaurant(id, name, phoneNumber, address);
    }
    await loadRestaurants();
    form.reset();
    id = undefined;
});

tbody.addEventListener('click', async function (event) {
    if (event.target.classList.contains("btn-danger")) {
        const id = event.target.getAttribute("data-id");
        alert(`Estas seguros que quieres elimar el id : ${id}`)
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });
        await deleteRestaurant(id);
        await loadRestaurants();
    }

    if (event.target.classList.contains("btn-warning")) {
        id = event.target.getAttribute("data-id");
        const restaurantFound = await findRestaurant(id);
        name.value = restaurantFound.name;
        phoneNumber.value = restaurantFound.phoneNumber; // Cambiado de 'description' a 'phoneNumber'
        address.value = restaurantFound.address;
    }

});

// Function to load a restaurant
async function loadRestaurants() {
    try {
        console.log('Loading restaurants');
        const response = await fetch(URL_RESTAURANT);
        if (!response.ok) throw new Error(`Error fetching restaurants: ${response.statusText}`);
        const restaurantes = await response.json();

        tbody.innerHTML = "";
        restaurantes.forEach(restaurant => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${restaurant.id}</td>
                <td>${restaurant.name}</td>
                <td>${restaurant.phoneNumber}</td>
                <td>${restaurant.address}</td>
                <td>
                    <button type="button" data-id=${restaurant.id} class="btn btn-warning">Editar</button>
                    <button type="button" data-id=${restaurant.id} class="btn btn-danger">Borrar</button>
                    
                </td>
            `;
            tbody.appendChild(row);
        });
    } catch (error) {
        console.error(error);
    }
}

// Function to find a restaurant
async function findRestaurant(id) {
    try {
        console.log(`Finding restaurant with id: ${id}`);
        const response = await fetch(`${URL_RESTAURANT}/${id}`);
        if (!response.ok) throw new Error(`Error finding restaurant: ${response.statusText}`);
        const data = await response.json();
        console.log('Restaurant found:', data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

// Function to create a restaurant
async function createRestaurant(name, phoneNumber, address) {
    const newRestaurant = {
        name: name.value,
        phoneNumber: phoneNumber.value,
        address: address.value
    };

    try {
        console.log('Creating restaurant:', newRestaurant);
        const response = await fetch(URL_RESTAURANT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRestaurant),
        });
        if (!response.ok) throw new Error(`Error creating restaurant: ${response.statusText}`);
    } catch (error) {
        console.error(error);
    }
}

// Function to update a restaurant
async function updateRestaurant(id, name, phoneNumber, address) {
    const updateRestaurant = {
        name: name.value,
        phoneNumber: phoneNumber.value,
        address: address.value
    };

    try {
        console.log(`Updating restaurant with id: ${id}`, updateRestaurant);
        const response = await fetch(`${URL_RESTAURANT}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateRestaurant),
        });
        if (!response.ok) throw new Error(`Error updating restaurant: ${response.statusText}`);
        id = undefined;
    } catch (error) {
        console.error(error);
    }
}

// Function to delete a restaurant
async function deleteRestaurant(id) {
    try {
        console.log(`Deleting restaurant with id: ${id}`);
        const response = await fetch(`${URL_RESTAURANT}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error(`Error deleting restaurant: ${response.statusText}`);
    } catch (error) {
        console.error(error);
    }
}

// Start the table with existing restaurants
loadRestaurants();
