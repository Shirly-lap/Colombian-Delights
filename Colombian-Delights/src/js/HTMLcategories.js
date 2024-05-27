import { restaurants } from "../js/restaurants";

const categories = document.querySelector("#categories-list");
const burger = document.querySelector(".burger-list");
const fries = document.querySelector(".fries-list");
const tipyc = document.querySelector(".typic-list");
const hotdog = document.querySelector(".hotdog-list");
const card = document.querySelector(".cardContainer"); 

// Agrega un controlador de eventos de clic a cada imagen de categoría
categories.addEventListener("click", function (event) {
    if (event.target.classList.contains("burger-list")) {
      createCard(restaurants, 'hamburgers');
    } else if (event.target.classList.contains("fries-list")) {
      createCard(restaurants, 'frenchFries');
    } else if (event.target.classList.contains("typics-list")) {
      createCard(restaurants, 'tipicas');
    } else if (event.target.classList.contains("hotdog-list")) {
      createCard(restaurants, 'hotDogs');
    }
});

function createCard(restaurants, category) {
  let cardContainer = document.querySelector(".cardContainer");
  let cardHTML = '';

  restaurants.forEach((restaurant) => {
    restaurant.menu[category].forEach((item) => {
      cardHTML += `
        <div class="shop-card">
          <div class="title">${item.name}</div>
          <figure data-color="#E24938, #A30F22">
            <img src="${item.image}" class="" />
          </figure>
          <div class="cta">
            <div class="desc fw-bold">${restaurant.name}</div>
            <button class="btn">Visitar<span class="bg"></span></button>
          </div>
        </div>
      `;
    });
  });

  cardContainer.innerHTML = `
    <div class="d-flex align-items-center flex-wrap gap-5">
      ${cardHTML}
    </div>
  `;
}

