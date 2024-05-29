// burger.js
export const URL_GENERAL = 'http://localhost:3000/restaurantes'
const fries = document.querySelector(".fries-list");
const tipyc = document.querySelector(".typic-list");
const constinerCards = document.querySelector(".cards")
const restaurantDetailElement = document.getElementById('restaurant-detail');
const restaurantDetailContentElement = document.getElementById('restaurant-detail-content');
const backButton = document.getElementById('back-button');





export const burgerListener = () => {
    const burger = document.querySelector(".burger-list"); // Asegúrate de tener un identificador correcto
    burger.addEventListener("click", async () => {
        const respuesta = await fetch(URL_GENERAL);
        const data = await respuesta.json();

        data.forEach(element => {
            let comida = element.menu.hamburgers;
            comida.forEach(index => {
                card.innerHTML += `
                <article  class="card card--1 card-item">
                    <div  class="card__info-hover"></div>
                    <div class="card__img"></div>
                    <a href="#item-${index.id}" class="card_link" onclick="showItemDetails(${index.id})">
                        <div class="card__img--hover"></div>
                    </a>
                    <div class="card__info">
                        <span class="card__category"> $</span>
                        <h3 class="card__title">${index.name}</h3>
                        <span class="card__by">by <a href="#" class="card__author" title="author"></a></span>
                    </div>
                </article>
                `;
            })
        });
    });
}

// fries.js
export const friesListener = () => {
    const fries = document.querySelector(".fries-list");// Asegúrate de tener un identificador correcto
    fries.addEventListener("click", async () => {
        const respuesta = await fetch(URL_GENERAL);
        const data = await respuesta.json();

        data.forEach(element => {
            let comida = element.menu.frenchFries;
            comida.forEach(index => {
                card.innerHTML += `
                <article  class="card card--1 card-item">
                    <div  class="card__info-hover"></div>
                    <div class="card__img"></div>
                    <a href="#item-${index.id}" class="card_link" onclick="showItemDetails(${index.id})">
                        <div class="card__img--hover"></div>
                    </a>
                    <div class="card__info">
                        <span class="card__category"> $</span>
                        <h3 class="card__title">${index.name}</h3>
                        <span class="card__by">by <a href="#" class="card__author" title="author"></a></span>
                    </div>
                </article>
                `;
            })
        });
    });
}

// tipicas.js
export const tipicasListener = () => {
    const tipyc = document.querySelector(".typic-list"); // Asegúrate de tener un identificador correcto
    tipyc.addEventListener("click", async () => {
        const respuesta = await fetch(URL_GENERAL)
        const data = await respuesta.json()

        data.forEach(element => {
            let comida = element.menu.tipicas;
            comida.forEach(index => {
                card.innerHTML += `
                <article  class="card card--1 card-item">
                    <div  class="card__info-hover"></div>
                    <div class="card__img"></div>
                    <a href="#item-${index.id}" class="card_link" onclick="showItemDetails(${index.id})">
                        <div class="card__img--hover"></div>
                    </a>
                    <div class="card__info">
                        <span class="card__category"> $</span>
                        <h3 class="card__title">${index.name}</h3>
                        <span class="card__by">by <a href="#" class="card__author" title="author"></a></span>
                    </div>
                </article>
                `;
            })
        });
    });
}

// hotdogs.js
export const hotdogsListener = () => {
    const hotdog = document.querySelector(".hotdog-list");// Asegúrate de tener un identificador correcto
    hotdog.addEventListener("click", async () => {
        const respuesta = await fetch(URL_GENERAL)
        const data = await respuesta.json()

        data.forEach(element => {
            let comida = element.menu.hotDogs;
            comida.forEach(index => {
                card.innerHTML += `
                <article  class="card card--1 card-item">
                    <div  class="card__info-hover"></div>
                    <div class="card__img"></div>
                    <a href="#item-${index.id}" class="card_link" onclick="showItemDetails(${index.id})">
                        <div class="card__img--hover"></div>
                    </a>
                    <div class="card__info">
                        <span class="card__category"> $</span>
                        <h3 class="card__title">${index.name}</h3>
                        <span class="card__by">by <a href="#" class="card__author" title="author"></a></span>
                    </div>
                </article>
                `;
            })
        });
    });
}