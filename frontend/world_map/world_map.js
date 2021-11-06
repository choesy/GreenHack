var mymap = L.map('wmap').setView([46.056946, 14.505751], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY2hvZXN5IiwiYSI6ImNrdm9nODg3NDEwenMycXFmZDh2dWpqcmQifQ.xG91AESpamTmUy57bP9mtw'
}).addTo(mymap);