import { Dog } from "./modules/Dog.js";


// List of Animals
let allAnimals = [
  // Dogs
  new Dog(
    "1",
    "Oscar",
    -34.90597,
    -56.19124,
    "Dog",
    5,
    "Toy Poodle",
    "The Toy Poodle is a noble-looking dog with a fine muzzle and long neck. It has a thick, curly coat that is often molded",
    "Img/Dogs/Dog (1).png",
    "Male",
    "Montevideo",
    "Mesocephalic"
  ),



];

let Dogs = allAnimals.filter((pet) => pet.type === "Dog");
let Cats = allAnimals.filter((pet) => pet.type === "Cat");

export { allAnimals, Dogs, Cats };
