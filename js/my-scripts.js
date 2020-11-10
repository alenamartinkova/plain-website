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
    var i, tabcontent, tabbtns;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tabbtns = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabbtns.length; i++) {
        tabbtns[i].className = tabbtns[i].className.replace(" active", "");
    }

    document.getElementById(widgetSelected).style.display = "block";
    evt.currentTarget.className += " active";
}

$(document).ready(function() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");

            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }

    // Set the date we're counting down to, in interval
    var countDownDate = new Date("Dec 24, 2020 20:20:20").getTime();

    var x = setInterval(function() {
        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("counter").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("counter").innerHTML = "DONE";
        }
    }, 1000);
})

function validateEmail(mail) {
    var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(mail.value.match(mailFormat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        document.form.email.focus();
        return false;
    }
}
