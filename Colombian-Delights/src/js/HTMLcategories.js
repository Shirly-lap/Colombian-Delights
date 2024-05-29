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

 