window.onload = function(){
    initMap();
}

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        
        center:new google.maps.LatLng(17.609993, 83.221436)
    });
}
