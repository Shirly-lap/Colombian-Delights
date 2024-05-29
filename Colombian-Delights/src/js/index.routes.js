
// import showItemDetails from './HTMLcategories.js'

window.addEventListener('hashchange', function() {
    var id = window.location.hash.substring(1); // Obtiene el ID de la URL
    showItemDetails(id);
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        showItemDetails(id);
    });
});

async function showItemDetails(id) {
    const container = document.getElementById('container-p');

    const respuesta = await fetch(URL_GENERAL)
    const data = await respuesta.json()
    // Obtiene los datos del elemento con el ID dado
    const item = data.find(element => element.id === id);

    // Define tu HTML basado en los datos del elemento
    let html = `
        <article  class="card card--1 card-item">
            <div  class="card__info-hover"></div>
            <div class="card__img"></div>
            <a href="#item-${item.id}" class="card_link">
                <div class="card__img--hover"></div>
            </a>
            <div class="card__info">
                <span class="card__category"> $</span>
                <h3 class="card__title">${item.name}</h3>
                <span class="card__by">by <a href="#" class="card__author" title="author"></a></span>
            </div>
        </article>
    `;

    // Inserta el HTML en el elemento del DOM
    container.innerHTML = html;
}