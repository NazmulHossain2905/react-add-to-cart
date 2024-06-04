import { randomUid } from "rand-uid";

export const fruits = [
  {
    id: randomUid(),
    name: "Orange",
    img: "/orange.png",
    rating: 1,
    review: 80,
    price: 100,
    quantity: 0,
  },
  {
    id: randomUid(),
    name: "Grape",
    img: "/grape.png",
    rating: 5,
    review: 292,
    price: 300,
    quantity: 0,
  },
  {
    id: randomUid(),
    name: "Pineapple",
    img: "/pineapple.png",
    rating: 3,
    review: 20,
    price: 75,
    quantity: 0,
  },
  {
    id: randomUid(),
    name: "Pomegranate",
    img: "/pomegranate.png",
    rating: 2,
    review: 180,
    price: 400,
    quantity: 0,
  },
];
