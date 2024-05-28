const app = document.querySelector(".app-render")




function handleEventRender() {
    
    app.innerHTML = `
      
    <section id="primera-seccion" class="d-flex flex-row justify-content-around align-items-center">
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://colombian-delights.s3.us-east-2.amazonaws.com/imagen40.webp"
            class="d-block w-100 rounded-4" alt="Imagen Carrusel 1" style="height: 500px; width: 500px">
        </div>
        <div class="carousel-item">
          <img src="https://colombian-delights.s3.us-east-2.amazonaws.com/imagen41.webp"
            class="d-block w-100 rounded-4" alt="Imagen Carrusel 2" style="height: 500px; width: 500px">
        </div>
        <div class="carousel-item">
          <img src="https://colombian-delights.s3.us-east-2.amazonaws.com/imagen42.webp"
            class="d-block w-100 rounded-4" alt="Imagen Carrusel 3" style="height: 500px; width: 500px">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="col-md-6 d-flex flex-column justify-content-center align-items-center text-white">
      <h1 class="text-center rounded-5 mb-4"
        style="display: inline-block; color: #FFFFFF; border: 5px solid #FF9900; border-radius: 0.5rem; padding: 0.5rem 1rem;">
        La cocina de Doña Marta
      </h1>
      <div class="p-3">
        <p class="text-center fs-5 font-weight-bold">
          En las bulliciosas calles de la ciudad, entre el aroma tentador de
          especias y el murmullo de la gente, se encuentra el emprendimiento
          culinario de Doña Marta. Con su carrito de comida callejera, esta
          emprendedora audaz ha conquistado el paladar de los transeúntes con
          sus delicias caseras.
        </p>
        <br>
        <p class="text-center"><span class="fs-5 font-weight-bold">Horario de atención</span>
          <br>
          Lunes - Domingo: 5:00 p.m. - 11:00 p.m.
        </p>
      </div>
      <form action="https://wa.me/573017325327/?text=Hola, bienvenido a la línea de atención" method="get"
        target="_blank" class="text-center mt-4">
        <button type="submit" class="btn btn-warning">
          Contacto
        </button>
      </form>
    </div>
  </section>
  <br>

  <br> 
  <!-- More images below about the products sold -->
  <div class="container-3images bg-dark">
    <div class="row space-evenly justify-content-center">
      <div class="col-sm-3">
        <div class="image-container">
          <div class="img-flipper">
            <img src="https://colombian-delights.s3.us-east-2.amazonaws.com/imagen43.webp"
              class="img-front img-fluid d-block w-100 rounded-4" alt="Imagen 1">
            <div class="img-back">
              <p>Salchipapas Junior
                <br>
                Precio $15.000
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="image-container">
          <div class="img-flipper">
            <img src="https://colombian-delights.s3.us-east-2.amazonaws.com/imagen44.webp"
              class="img-front img-fluid d-block w-100 rounded-4" alt="Imagen 1">
            <div class="img-back">
              <p>Tocipapas
                <br>
                Precio $10.000
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="image-container">
          <div class="img-flipper">
            <img src="https://colombian-delights.s3.us-east-2.amazonaws.com/imagen45.webp"
              class="img-front img-fluid d-block w-100 rounded-4" alt="Imagen 1">
            <div class="img-back">
              <p>Salchipapas Familiar
                <br>
                Precio $30.000
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="image-container">
          <div class="img-flipper">
            <img src="https://colombian-delights.s3.us-east-2.amazonaws.com/imagen46.webp"
              class="img-front img-fluid d-block w-100 rounded-4" alt="Imagen 1">
            <div class="img-back">
              <p>Mini Infarto
                <br>
                Precio $50.000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br> 

  <!-- Backgound about the origin of the restaurant -->
  <section class="segunda-seccion d-flex">
    <article id="segunda-seccion2" class="d-flex justify-content-around" style="background-color: #212529">
      <div class="text-container">
        <h1 class="rounded-5 mb-4"
          style="display: inline-block; color: #FFFFFF; border: 5px solid #FF9900; border-radius: 0.5rem; padding: 0.5rem 1rem;">
          Su historia
        </h1>
        <p class="text-white fs-5 text-center">Doña Marta era una mujer emprendedora y apasionada por la cocina desde
          joven. Con habilidades culinarias
          heredadas de generaciones pasadas, decidió llevar su talento a las calles de su ciudad. Armada con una
          pequeña carretilla y recetas tradicionales de su familia, comenzó a vender comida callejera.
        </p>
      </div>
      <div class="img-container d-inline">
        <figure class="d-inline">
          <img class="marticas" src="https://colombian-delights.s3.us-east-2.amazonaws.com/marticas.png" alt="Imagen de la Dueña"
            class="d-inline">
        </figure>
      </div>
    </article>
  </section>

  <!-- A map where you can find the location of the restaurant -->
   <article class="text-center">
    <h1 class="rounded-5 mb-4"
      style="display: inline-block; color: #FFFFFF; border: 5px solid #FF9900; border-radius: 0.5rem; padding: 0.5rem 1rem;">
      Ubicación
    </h1>
    <br>
    <div id="map" class="mx-auto" style="width: 100%; height: 600px; border: 5px solid #FF9900; border-radius: 0.5rem"></div>
  </article>  
`;
}

handleEventRender()
