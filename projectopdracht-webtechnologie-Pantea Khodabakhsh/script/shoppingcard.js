"use strict";
let products = [
  {
    id: 1,
    name: "Meouw zonnebrillen",
    type: "Accessoire",
    price: 50,
    logo: "./assets/logoImages/cat.jpg",
  },
  {
    id: 2,
    name: "Hamster Astronautenpak",
    type: "Kleren",
    price: 55,
    logo: "./assets/logoImages/hamster.jpg",
  },
  {
    id: 3,
    name: "Lama ketting",
    type: "Accessoire",
    price: 25,
    logo: "./assets/logoImages/llama.jpg",
  },
  {
    id: 4,
    name: "Batman Koe Kostuum",
    type: "Kleren",
    price: 65,
    logo: "./assets/logoImages/cow.jpg",
  },
  {
    id: 5,
    name: "Leeuw Rok",
    type: "Kleren",
    price: 60,
    logo: "./assets/logoImages/lion.jpg",
  },
  {
    id: 6,
    name: "Vogel Hoedje",
    type: "Accessoire",
    price: 35,
    logo: "./assets/logoImages/bird.jpg",
  },
  {
    id: 7,
    name: "Schildpad Sneakers",
    type: "schoenen",
    price: 40,
    logo: "./assets/logoImages/turtle.jpg",
  },
];

let AddingToCard = document.querySelector("#addedItems");

let allButtons = document.querySelectorAll(".addingToCard");

let totalPrice = document.querySelector("#totalPrice");

let addingItemsArray = [];
let sumOfPrices = 0;

for (let index = 0; index < allButtons.length; index++) {
  allButtons[index].addEventListener("click", () => {
    const element = products[index].name;
    const price = products[index].price;

    let existingItem = addingItemsArray.find((item) => item.name === element);

    if (existingItem) {
      let currentPrice = Number(existingItem.priceElem.textContent);
      existingItem.priceElem.textContent = currentPrice + price;
      sumOfPrices += price;
      totalPrice.textContent = sumOfPrices;
      return;
    }

    let divSetion = document.createElement("div");
    divSetion.classList.add("divSections");

    let addingItem = document.createElement("p");
    let addingPrice = document.createElement("p");
    let addingLogo = document.createElement("img");

    addingItem.textContent = element;
    addingPrice.textContent = price;
    addingLogo.src = products[index].logo;

    divSetion.appendChild(addingLogo);
    divSetion.appendChild(addingItem);
    divSetion.appendChild(addingPrice);
    sumOfPrices += parseInt(addingPrice.textContent);
    totalPrice.textContent = sumOfPrices;

    AddingToCard.appendChild(divSetion);

    divSetion.addEventListener("click", () => {
      AddingToCard.removeChild(divSetion);
      sumOfPrices -= parseInt(addingPrice.textContent);
      totalPrice.textContent = sumOfPrices;
      addingItemsArray = addingItemsArray.filter(
        (item) => item.name !== element
      );
    });

    addingItemsArray.push({
      name: element,
      priceElem: addingPrice,
    });
  });
}
