"use strict";
var map = L.map("map").setView([-3.411823, -62.263224], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var myOwnLogo = L.icon({
  iconUrl: "./assets/logo/cropped_circle_image(1).png",
  iconSize: [50, 50],
  iconAnchor: [25, 20],
});
var myOwnLogoo = L.icon({
  iconUrl: "./assets/logo/owner.png",
  iconSize: [50, 50],
  iconAnchor: [25, 20],
});

var marker = L.marker([-3.469206, -62.217632], { icon: myOwnLogo }).addTo(map);

var markerr = L.marker([-3.411823, -62.263224], { icon: myOwnLogoo }).addTo(
  map
);

marker
  .bindPopup("Dit is de winkel.<br>Zorg ervoor dat u ons ook bezoekt!")
  .openPopup();
markerr
  .bindPopup("Hier vind je me meestal als ik niet in de winkel ben!")
  .openPopup();
