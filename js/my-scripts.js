// Initialize and add the map
function initMap() {
    const vsb = { lat: 49.8317457, lng: 18.161458 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: vsb,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: vsb,
        map: map,
    });
}
