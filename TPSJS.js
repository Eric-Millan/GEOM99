// ########### Team Map #############

// Initialize and add the map

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        // Ontario
        center: { lat: 43.49443563253403, lng: -79.08434075655194 },
        mapTypeId: "terrain",
        zoom: 8
    });

// Marker for Dale

const DaleLocation = {lat: 43.91176793798334, lng: -78.68743210405533} // Bowmanville 43.91176793798334, -78.68743210405533
const marker = new google.maps.Marker({
position: DaleLocation,
map: map,
});

const DaleContent = 
'<div><h2>Dale Langford</h2></div>' +
'<div>Cartographic Specialist</div>';

const DaleIW = new google.maps.InfoWindow({
    content: DaleContent,
});

Dalemarker.addListener("click", () => {
    DaleIW.open(map, Dalemarker)
});

    }

