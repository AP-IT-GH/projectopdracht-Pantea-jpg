"use strict";
const shopItems = [
  {
    id:1,
    name: "Meouw zonnebrillen",
    image: "./assets/images/cat.jpg",
    category: "Accessoire",
    price: 50,
    html:"./product-Meouwzonnebrillen.html",
    description:
      "Onze mooie kat beschermt zichzelf niet alleen tegen de zon met deze stijlvolle zonnebril, maar steelt ook de show waar ze ook gaat! Met haar coole en grappige uitstraling zorgt ze voor een glimlach op ieders gezicht. Deze kattenzonnebril combineert mode en functionaliteit — perfect voor een fotoshoot, een wandeling in de zon of gewoon om jouw kat er onweerstaanbaar schattig uit te laten zien. Laat je kat stralen in stijl en trek alle aandacht met deze unieke zonnenbril! <li>⦁ Volledige zonbescherming😎</li> <li>⦁ Stijlvolle en unieke stijl✨</li> <li>⦁ Hoge Kwaliteit En duurzame materialen💎</li>",
  },
  {
    id:2,
    name: "Hamster Astronautenpak",
    image: "./assets/images/hamster.jpg",
    category: "Kleren",
    price: 55,
    html:"./product-HamsterAstronautenpak.html",
    description:
      "De aftelling is begonnen... 🚀<br> Jouw kleine astronaut is klaar om op avontuur te gaan! <br> In dit superzachte en schattige pakje voelt elke ontdekking als een ruimtemissie vol plezier. <br> Perfect voor kleine dromers die houden van avontuur, verkleedpartijtjes of gewoon een knusse dag thuis. <br> Met dit unieke astronautenpakje wordt elke dag een nieuwe reis door de sterren. 🌙✨ <li>⦁ Comfortabel en veilig voor dagelijks gebruik 🐾 <li>⦁ Stijlvol en uniek design dat opvalt 💎",
  },
  {
    id:3,
    name: "Lama ketting",
    image: "./assets/images/llama.jpg",
    category: "Accessoire",
    price: 25,
    html:"./product-LamaKetting.html",
    description:
      "Tijd om te stralen! 🦙💫 Jouw lama verdient het om eruit te zien als een echte ster. Met deze prachtige halsband loopt hij vol trots over het veld elegant, charmant en een tikkeltje eigenwijs. Perfect voor lama’s die houden van aandacht,  stijl en een vleugje glamour. Laat jouw pluizige vriend schitteren als nooit tevoren met deze unieke accessoire! ✨  <li>⦁ Comfortabel en veilig voor dagelijks gebruik 🐾</li> <li>⦁ Stijlvol en uniek design dat opvalt 💎</li> <li>⦁ Gemaakt van hoogwaardige materialen voor langdurig plezier ⚡</li> <li>⦁ Anti-allergisch en zacht voor de pels 🐾</li>",
  },
  {
    id:4,
    name: "Batman Koe Kostuum",
    image: "./assets/images/cow.jpg",
    category: "Kleren",
    price: 65,
    html:"./product-BatmanKoeKostuum.html",
    description:
      "Daar komt hij aan... de held van de boerderij! 🦇🐄<br /> Holy cow! Met dit geweldige Batman kostuum verandert jouw koe in een echte superheld die klaarstaat om onrecht te bestrijden. <br /> Van weiland tot stal — overal trekt hij de aandacht met zijn stoere look en charmante attitude. Perfect voor gespierde koeien 💥 <br /> Laat jouw koe schitteren als de ultieme boerderij-held! 🖤",
  },
  {
    id:5,
    name: "Leeuw Rok",
    image: "./assets/images/lion.jpg",
    category: "Kleren",
    price: 60,
    html:"./product-LeeuwRok.html",
    description:
      "Koninklijk! 🦁✨ <br /> Jouw leeuw is helemaal klaar om zijn troon te claimen met deze leeuwenrok. Gemaakt voor echte koningen van de savanne, vol trots, kracht en stijl. Met deze outfit straalt jouw leeuw als nooit tevoren. 🌟 <br /> Geef hem het zelfvertrouwen en de uitstraling die een ware koning verdient! 👑 <li>⦁ Comfortabel en perfect passend voor je leeuw 📏</li> <li>⦁ Verkrijgbaar in verschillende kleuren en designs 🌈</li> <li>⦁ Stoer, uniek en koninklijk design 👑</li> <li>⦁ Anti-allergisch en zacht voor de pels 🐾</li> <li>⦁ Gemaakt van hoogwaardige, duurzame materialen 💎</li>",
  },
  {
    id:6,
    name: "Vogel Hoedje",
    image: "./assets/images/bird.jpg",
    category: "Accessoire",
    price: 35,
    html:"./product-VogelHoedje.html",
    description:
      "Wie zegt dat vogels geen gevoel voor mode hebben? 😎🪶 <br /> Met dit unieke accessoire vliegt jouw gevederde vriend recht de spotlight in! perfect voor de kleine diva’s van de lucht, of gewoon om een beetje extra flair toe te voegen aan zijn dag. Laat hem pronken, spelen en vooral… stralen! 🌟 <li>⦁ Comfortabel en licht, speciaal voor vogels 🕊️</li> <li>⦁ Uniek design ✨</li> <li>⦁ Blijft stevig zitten, zelfs tijdens het vliegen ✨</li> <li>⦁ AVerkrijgbaar in verschillende maten en kleuren 🌈</li> <li>⦁ Gemaakt van hoogwaardige, duurzame materialen 💎</li>",
  },
  {
    id:7,
    name: "Schildpad Sneakers",
    image: "./assets/images/turtle.jpg",
    category: "Schoenen",
    price: 40,
    html:"./product-SchildpadSneakers.html",
    description:
      "Kijk uit, hier komt de meest stijlvolle schildpad van het land! 🐢💨 <br /> Met deze coole sneakers fladdert (nou ja, kruipt) jouw kleine vriend overal rond met een flinke dosis flair. Perfect voor avontuurlijk  stapjes en wandelen. Laat je schildpad pronken, schitteren en vooral… heerlijk traag maar fashionable de wereld ontdekken! 🌟 <li>⦁ Comfortabel en veilig te dragen voor je koe 🐮</li> <li>⦁ Uniek, grappig en opvallend design ✨</li> <li>⦁ Verkrijgbaar in verschillende maten voor een perfecte fit 📏</li> <li>⦁ Gemaakt van hoogwaardige en duurzame materialen 💎</li>",
  },
];

let productAddedToShopPage = document.querySelectorAll(".product");

productAddedToShopPage.forEach(element => {
    const productId = parseInt(element.id);
    const item = shopItems.find(p => p.id === productId);
    const html = `
    <div class="product-header">
      <button class="favourite" id="${item.id}">🤍</button>
      <button class="addingToCard" id="${item.id}">Toevoegen aan kaart</button>
    </div>

    <div class="info">
      <div>
        <p class="product-name"><a href="${item.html}">${item.name}</a></p>
        <p class="category">${item.category}</p>
      </div>
      <div class="price">€${item.price}</div>
    </div>

  `;

  element.innerHTML = html;

  element.style.backgroundImage = `url(${item.image})`;
  element.style.backgroundSize = "cover";
  element.style.backgroundPosition = "center";
});
