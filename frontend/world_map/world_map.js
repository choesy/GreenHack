var polyline=null;
marker=[];
var mymap = L.map('wmap').setView([46.056946, 14.505751], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'pk.eyJ1IjoiY2hvZXN5IiwiYSI6ImNrdm9nODg3NDEwenMycXFmZDh2dWpqcmQifQ.xG91AESpamTmUy57bP9mtw'
}).addTo(mymap);



function drawpath(){
  line=document.getElementById("line_id").value
    fetch("http://93.103.58.211:80/getPath?line="+line).then(function(response) {
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
      fetch("http://93.103.58.211:80/getBicycles").then(function(response) {
      return response.json();
    }).then(function(data) {
      if(marker.length<1){
      points=data["points"]
      for(var i=0; i<points.length;i++){
        marker[i] = L.marker([points[i][0],points[i][1]]).addTo(mymap);
      }
    }
    }).catch(function(e) {
      console.log(e);
    });
    }

    function rmbicycles(){
      for(var i=0; i<marker.length;i++){
        mymap.removeLayer(marker[i]);
        
      }
      marker=[];
    }