export const restaurants = [
  {
    id: 1,
    name: "Restaurante doña marta",
    address: "123 Street #45-67, Medellin",
    menu: {
      hamburgers: [
        {
          id: 1,
          category: "Hamburguesa",
          name: "Hamburguesa Clásica",
          image:
            "https://images.ecestaticos.com/CXJr7WaerAWg8tX9h2BsfQjCulU=/0x0:2121x1414/600x315/filters:fill(white):format(jpg):quality(99)/f.elconfidencial.com/original/348/61b/a7e/34861ba7e45bd4ca8232ec0ccbd5be64.jpg",
        },
        {
          id: 2,
          category: "Hamburguesa",
          name: "Hamburguesa Doble Carne",
          description: "Hamburguesa con el doble de carne y queso cheddar",
          image:
            "https://media-cdn.tripadvisor.com/media/photo-s/18/92/e1/89/hamburguesa-double-b.jpg",
        },
      ],
      frenchFries: [
        {
          id: 3,
          name: "Big papas",
          image:
            "https://colombian-delights.s3.us-east-2.amazonaws.com/imagen47.webp",
        },
      ],
      tipicas: [],
      hotDogs: [
        {
          id: 4,
          name: "Puppet",
          image:
            "https://colombian-delights.s3.us-east-2.amazonaws.com/imagen24.webp",
        },
      ],
    },
  },
  {
    id: 2,
    name: "The Typical Restaurant",
    address: "67 Street #89-01, Medellín",
    menu: {
      hamburgers: [],
      frenchFries: [],
      tipicas: [
        {
          id: 5,
          name: "Bandeja Paisa",
          image:
            "https://telemedellin.tv/wp-content/uploads/2024/03/Top-5-de-comidas-tipicas-que-todo-visitante-deberia-probar-en-Medellin.jpeg",
        },
        {
          id: 6,
          name: "Sancochito",
          image:
            "https://colombiapais.com/gastronomia-colombiana/gastronomia-medellin/sancocho-antioqueno.jpg",
        },
        {
          id: 7,
          name: "Calentao",
          image:
            "https://www.campi.com.co/wp-content/uploads/2023/04/Campi-Desayuno-antioqueno.webp",
        },
      ],
    },
  },
  {
    id: 3,
    name: "Comidas la 70",
    address: "123 Street #45-67, Medellin",
    menu: {
      hamburgers: [
        {
          id: 8,
          name: "BrotherBurgers",
          image:
            "https://colombian-delights.s3.us-east-2.amazonaws.com/imagen9.webp",
        },
        {
          id: 9,
          name: "Pataguesa",
          image:
            "https://colombian-delights.s3.us-east-2.amazonaws.com/imagen14.webp",
        },
      ],
      frenchFries: [
        {
          id: 10,
          name: "DetoPapas",
          image:
            "https://colombian-delights.s3.us-east-2.amazonaws.com/imagen53.webp",
        },
      ],
      tipicas: [],
      hotDogs: [
        {
          id: 11,
          name: "Hotdogsito",
          image:
            "https://colombian-delights.s3.us-east-2.amazonaws.com/imagen6.webp",
        },
      ],
    },
  },
  {
    id: 4,
    name: "Fast Food Fiesta",
    address: "789 Street #12-34, Medellin",
    menu: {
      hamburgers: [
        {
          id: 12,
          name: "Cheeseburger",
          price: 15000,
          image: "https://www.sargento.com/assets/Uploads/Recipe/Image/burger_0.jpg",
        },
        {
          id: 13,
          name: "Bacon Burger",
          price: 18000,
          image: "https://www.fullerssugarhouse.com/wp-content/uploads/2021/08/maplebaconburger.jpg",
        },
      ],
      frenchFries: [
        {
          id: 14,
          name: "Curly Fries",
          price: 8000,
          image: "https://colombian-delights.s3.us-east-2.amazonaws.com/imagen51.webp",
        },
      ],
      tipicas: [],
      hotDogs: [
        {
          id: 15,
          name: "Chili Dog",
          price: 12000,
          image: "https://example.com/chilidog.jpg",
        },
      ],
    },
  },
  {
    id: 5,
    name: "Typical Tastes",
    address: "321 Street #76-54, Medellin",
    menu: {
      hamburgers: [],
      frenchFries: [],
      tipicas: [
        {
          id: 16,
          name: "Ajiaco",
          price: 25000,
          image: "https://example.com/ajiaco.jpg",
        },
        {
          id: 17,
          name: "Empanadas",
          price: 5000,
          image: "https://example.com/empanadas.jpg",
        },
      ],
      hotDogs: [],
    },
  },
  {
    id: 6,
    name: "Burger Bonanza",
    address: "456 Street #23-45, Medellin",
    menu: {
      hamburgers: [
        {
          id: 18,
          name: "Triple Stack",
          price: 22000,
          image: "https://colombian-delights.s3.us-east-2.amazonaws.com/imagen50.webp",
        },
        {
          id: 19,
          name: "Veggie Burger",
          price: 17000,
          image: "https://thenaturalnurturer.com/wp-content/uploads/2024/01/Black-Bean-Burgers-33-500x500.jpg",
        },
      ],
      frenchFries: [],
      tipicas: [],
      hotDogs: [
        {
          id: 20,
          name: "Classic Dog",
          price: 10000,
          image: "https://example.com/classicdog.jpg",
        },
      ],
    },
  },
  {
    id: 7,
    name: "Fries Factory",
    address: "654 Street #32-54, Medellin",
    menu: {
      hamburgers: [],
      frenchFries: [
        {
          id: 21,
          name: "Cheese Fries",
          price: 9000,
          image: "https://colombian-delights.s3.us-east-2.amazonaws.com/imagen45.webp",
        },
        {
          id: 22,
          name: "Sweet Potato Fries",
          price: 9000,
          image: "https://colombian-delights.s3.us-east-2.amazonaws.com/imagen46.webp",
        },
      ],
      tipicas: [],
      hotDogs: [],
    },
  },
  {
    id: 8,
    name: "Hot Dog Haven",
    address: "987 Street #56-78, Medellin",
    menu: {
      hamburgers: [],
      frenchFries: [],
      tipicas: [],
      hotDogs: [
        {
          id: 23,
          name: "Chili Cheese Dog",
          price: 13000,
          image: "https://example.com/chilicheesedog.jpg",
        },
        {
          id: 24,
          name: "Slaw Dog",
          price: 12000,
          image: "https://example.com/slawdog.jpg",
        },
      ],
    },
  },
  {
    id: 9,
    name: "Typical Treats",
    address: "789 Street #12-34, Medellin",
    menu: {
      hamburgers: [],
      frenchFries: [],
      tipicas: [
        {
          id: 25,
          name: "Arepa",
          price: 7000,
          image: "https://example.com/arepa.jpg",
        },
        {
          id: 26,
          name: "Tamales",
          price: 12000,
          image: "https://example.com/tamales.jpg",
        },
      ],
      hotDogs: [],
    },
  }
];
