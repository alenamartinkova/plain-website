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

function changeTab(evt, widgetSelected) {
    // Declare all variables
    var i, tabcontent, tabbtns;

    // Get all elements with class="tab-content" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tab-btn" and remove the class "active"
    tabbtns = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabbtns.length; i++) {
        tabbtns[i].className = tabbtns[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(widgetSelected).style.display = "block";
    evt.currentTarget.className += " active";
}
