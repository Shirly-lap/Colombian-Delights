// main.js
import { burgerListener } from './Categories_Componentes/ShowCards'
// main.js
import { friesListener } from './Categories_Componentes/ShowCards'

import {URL_GENERAL} from './Categories_Componentes/ShowCards'

import { tipicasListener } from './Categories_Componentes/ShowCards.js'
import { hotdogsListener } from './Categories_Componentes/ShowCards.js'

const categories = document.querySelector("#categories-list")
const burger = document.querySelector(".burger-list")
const fries = document.querySelector(".fries-list")


hotdogsListener()
tipicasListener()
burgerListener()
friesListener()

 export function showItemDetails(id) {
  fetch(URL_GENERAL)
    .then(response => response.json())
    .then(data => {
      // Busca el elemento del menú con el ID correspondiente
      let item;
      for (let restaurant of data) {
        for (let category in restaurant.menu) {
          for (let menuItem of restaurant.menu[category]) {
            if (menuItem.id === id) {
              item = menuItem;
              break;
            }
          }
          if (item) break;
        }
        if (item) break;
      }

      // Selecciona los elementos HTML y cambia su contenido
      document.querySelector('.text-center.rounded-5.mb-4').textContent = item.name;

      let imageElements = document.querySelectorAll('.img-front.img-fluid.d-block.w-100.rounded-4')
      imageElements.forEach((imageElement, index) => {
        imageElement.src = item.image
      });

      let backElements = document.querySelectorAll('.img-back')
      backElements.forEach((backElement, index) => {
        backElement.textContent = `${item.name}\nPrecio $${item.price}`
      });
    });
}
