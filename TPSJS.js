// ########### Team Map #############

// Initialize and add the map

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        // Ontario
        center: { lat: 43.49443563253403, lng: -79.08434075655194 },
        mapTypeId: "terrain",
        zoom: 8
    });

    }

