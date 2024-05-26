const cards = document.querySelector("#foods");

if (cards) {
  let cardHTML = "";

  for (let i = 0; i < 5; i++) {
    cardHTML += `
      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" >
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src="https://colombian-delights.s3.us-east-2.amazonaws.com/imagen9.webp" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"/></svg>
                <small>Earth</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"/></svg>
                <small>3d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  cards.innerHTML = `
    <div class="container px-4 py-5" id="custom-cards">
      <h2 class="pb-2 border-bottom">Custom cards</h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        ${cardHTML}
      </div>
    </div>
  `;
}