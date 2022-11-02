import electrodomestico from "../../assets/img/portfolio/electrodomesticos.webp";
import hogar from "../../assets/img/portfolio/hogar-4.webp";
import decoraciones from "../../assets/img/portfolio/decoraciones-2.webp";
import sastre from "../../assets/img/portfolio/sastreyclazado.webp";
import taller from "../../assets/img/portfolio/taller-mecanico.webp";
import otros from "../../assets/img/portfolio/otros-2.webp";

const cards = [
  {
    id: 1,
    image: electrodomestico,
    url: '/electro'
  },
  {
    id: 2,
    image: hogar,
    url: '/hogar'

  },
  {
    id: 3,
    image: decoraciones,
    url: '/decoracion'
  },
  {
    id: 4,
    image: sastre,
    url: '/sastre'
  },
  {
    id: 4,
    image: taller,
    url: '/taller'
  },
  {
    id: 5,
    image: otros,
    url: '/otros'
  },
];

export default cards;
