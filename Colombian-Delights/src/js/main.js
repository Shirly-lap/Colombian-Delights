// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

(function(d, s, id) {
    let js;
    if (d.getElementById(id)) { return; }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://embedsocial.com/cdn/ht.js";
    d.getElementsByTagName("head")[0].appendChild(js);
  }(document, "script", "EmbedSocialHashtagScript"));