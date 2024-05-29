// main.js
import { burgerListener } from './Categories_Componentes/ShowCards'
// main.js
import { friesListener } from './Categories_Componentes/ShowCards'

import { tipicasListener } from './Categories_Componentes/ShowCards.js'
import { hotdogsListener } from './Categories_Componentes/ShowCards.js'

import {URL_GENERAL} from './Categories_Componentes/ShowCards.js'
const searchForm = document.getElementById('search-bar');
const searchInput = searchForm.querySelector('input');

const respuesta = await fetch(URL_GENERAL);
const data = await respuesta.json();
console.log(data); // Add this line to log the data

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();

    if (data && data.restaurantes) {
        const filteredRestaurants = data.restaurantes.filter(restaurant =>
            restaurant.name.toLowerCase().includes(searchTerm)
        );

        const cards = document.querySelector('.cards');
        cards.innerHTML = ''

        filteredRestaurants.forEach(restaurant => {
            restaurant.menu.hamburgers.forEach(item => {
                cards.innerHTML += `
                    <article class="card card--1 card-item">
                        <div class="card__info-hover"></div>
                        <div class="card__img" style="background-image: url('${item.image}');"></div>
                        <a href="#item-${item.id}" class="card_link" onclick="showItemDetails(${item.id})">
                            <div class="card__img--hover" style="background-image: url('${item.image}');"></div>
                        </a>
                        <div class="card__info">
                            <span class="card__category">$</span>
                            <h3 class="card__title">${item.name}</h3>
                            <span class="card__by">by <a href="#" class="card__author" title="author">${restaurant.name}</a></span>
                        </div>
                    </article>
                `;
            });
        });
    } else {
        console.error('Data is not in the expected format:', data);
    }
});


hotdogsListener()
tipicasListener()
burgerListener()
friesListener()

 