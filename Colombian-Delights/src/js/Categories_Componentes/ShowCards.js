// The URL for the restaurant API
export const URL_GENERAL = 'http://localhost:3000/restaurantes'
const card = document.querySelector(".cards");



// Function to add an event listener to the burger list item
// When the burger list item is clicked, it fetches the data from the API and displays it in the card section
export const burgerListener = () => {
    const burger = document.querySelector(".burger-list"); // Make sure to have a correct identifier
    burger.addEventListener("click", async () => {
        const respuesta = await fetch(URL_GENERAL);
        const data = await respuesta.json();

        card.innerHTML = ''
        data.forEach(element => {
            
            let comida = element.menu.hamburgers;
            
            comida.forEach(index => {
                card.innerHTML += 
                `
                <article  class="card card--1 card-item">
                    <div  class="card__info-hover"></div>
                    <div class="card__img" style="background-image: url('${index.image}');"></div>
                    <a href="../../pages/profile.html" class="card_link" onclick="showItemDetails(${index.id})">
                        <div class="card__img--hover" style="background-image: url('${index.image}'); object-fit:cover;"></div>
                    </a>
                    <div class="card__info">
                        <span class="card__category"></span>
                        <h3 class="card__title">${index.name}</h3>
                        <span class="card__by">by <a href="#" class="card__author" title="author">${element.name}</a></span>
                    </div>
                </article>
                
                `;
            })
        });
    });
}

// Function to add an event listener to the fries list item
// When the fries list item is clicked, it fetches the data from the API and displays it in the card section
export const friesListener = () => {
    const fries = document.querySelector(".fries-list");// Make sure to have a correct identifier
    fries.addEventListener("click", async () => {
        const respuesta = await fetch(URL_GENERAL);
        const data = await respuesta.json();

        card.innerHTML = ''

        data.forEach(element => {
            let comida = element.menu.frenchFries;
            comida.forEach(index => {
                card.innerHTML += `
                <article  class="card card--1 card-item">
                    <div  class="card__info-hover"></div>
                    <div class="card__img" style="background-image: url('${index.image}');"></div>
                    <a href="#item-${index.id}" class="card_link" onclick="showItemDetails(${index.id})">
                        <div class="card__img--hover" style="background-image: url('${index.image}'); object-fit:cover;"></div>
                    </a>
                    <div class="card__info">
                        <span class="card__category"></span>
                        <h3 class="card__title">${index.name}</h3>
                        <span class="card__by">by <a href="#" class="card__author" title="author">${element.name}</a></span>
                    </div>
                </article>
                
                `;
            })
        });
    });
}

// Function to add an event listener to the typical food list item
// When the typical food list item is clicked, it fetches the data from the API and displays it in the card section
export const tipicasListener = () => {
    const tipyc = document.querySelector(".typic-list"); // Make sure to have a correct identifier
    tipyc.addEventListener("click", async () => {
        const respuesta = await fetch(URL_GENERAL)
        const data = await respuesta.json()
        card.innerHTML = ''

        data.forEach(element => {
            let comida = element.menu.tipicas;
            comida.forEach(index => {
                card.innerHTML += `
                <article  class="card card--1 card-item">
                    <div  class="card__info-hover"></div>
                    <div class="card__img" style="background-image: url('${index.image}');"></div>
                    <a href="#item-${index.id}" class="card_link" onclick="showItemDetails(${index.id})">
                        <div class="card__img--hover" style="background-image: url('${index.image}'); object-fit:cover;"></div>
                    </a>
                    <div class="card__info">
                        <span class="card__category"></span>
                        <h3 class="card__title">${index.name}</h3>
                        <span class="card__by">by <a href="#" class="card__author" title="author">${element.name}</a></span>
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
        card.innerHTML = ''

        data.forEach(element => {
            let comida = element.menu.hotDogs;
            comida.forEach(index => {
                card.innerHTML += 
                `
                <article  class="card card--1 card-item">
                    <div  class="card__info-hover"></div>
                    <div class="card__img" style="background-image: url('${index.image}');"></div>
                    <a href="#item-${index.id}" class="card_link" onclick="showItemDetails(${index.id})">
                        <div class="card__img--hover" style="background-image: url('${index.image}'); object-fit:cover;"></div>
                    </a>
                    <div class="card__info">
                        <span class="card__category"></span>
                        <h3 class="card__title">${index.name}</h3>
                        <span class="card__by">by <a href="#" class="card__author" title="author">${element.name}</a></span>
                    </div>
                </article>
                
                `;
            })
        });
    });
}