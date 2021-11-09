var polyline=null;
biclj_list=[];
avant_list=[];
var mymap = L.map('wmap').setView([46.056946, 14.505751], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'pk.eyJ1IjoiY2hvZXN5IiwiYSI6ImNrdm9nODg3NDEwenMycXFmZDh2dWpqcmQifQ.xG91AESpamTmUy57bP9mtw'
}).addTo(mymap);
var greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


function drawpath(){
  line=document.getElementById("line_id").value
    fetch("/getPath?line="+line).then(function(response) {
    return response.json();
  }).then(function(data) {
    if(polyline!=null){
      mymap.removeLayer(polyline)
    }
    points=data["points"]
    polyline = L.polyline(points, {color: 'red',weight:4}).addTo(mymap);
  }).catch(function(e) {
    console.log(e);
  });
  }

  function addbicycles(){
      fetch("/getBicycles").then(function(response) {
      return response.json();
    }).then(function(data) {
      if(biclj_list.length<1){
      points=data["points"]
      for(var i=0; i<points.length;i++){
        biclj_list[i] = L.marker([points[i][0],points[i][1]],{'title':points[i][2]}).addTo(mymap);
      }
    }
    }).catch(function(e) {
      console.log(e);
    });
    }

    function rmbicycles(){
      for(var i=0; i<biclj_list.length;i++){
        mymap.removeLayer(biclj_list[i]);
        
      }
      biclj_list=[];
    }

  
    function addavant(){
      fetch("/getAvant").then(function(response) {
      return response.json();
    }).then(function(data) {
      if(avant_list.length<1){
      points=data["points"]
      for(var i=0; i<points.length;i++){
        avant_list[i] = L.marker([points[i][0],points[i][1]],{'title':points[i][2],'icon': greenIcon}).addTo(mymap);
      }
    }
    }).catch(function(e) {
      console.log(e);
    });
    }

    function rmavant(){
      for(var i=0; i<avant_list.length;i++){
        mymap.removeLayer(avant_list[i]);
        
      }
      avant_list=[];
    }