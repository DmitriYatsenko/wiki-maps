// Client facing scripts here
let map = L.map('map').setView([43.7, -79.3], 13);

let accessToken = 'pk.eyJ1IjoiZG1pdHJpeWF0c2Vua28iLCJhIjoiY2t5Ync3MWw2MGpqbTMxbWtzM3Zwa2F1MyJ9.PhF68nNuMvNvUcxEMRMNyg';

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: accessToken
}).addTo(map);

