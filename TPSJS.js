// ########### Team Map #############

// Initialize and add the map

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        // Ontario
        center: { lat: 43.943726362759605, lng: -78.70952221169588 },
        mapTypeId: "terrain",
        zoom: 10
    });

    }

