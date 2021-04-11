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
Dalemarker = new google.maps.Marker({
position: DaleLocation,
map: map,
});

Dalemarker.addListener("click", () => {
    DaleIW.open(map, Dalemarker)
});

const DaleContent = 
'<div><h2>Dale Langford</h2></div>' +
'<div>Cartographic Specialist</div>';

const DaleIW = new google.maps.InfoWindow({
    content: DaleContent,
});

// Marker for EricMcNeil

const EMcLocation = {lat: 42.77880563811117, lng: -81.18124239146222} // St. Thomas 42.77880563811117, -81.18124239146222
EMcmarker = new google.maps.Marker({
position: EMcLocation,
map: map,
});

EMcmarker.addListener("click", () => {
    EMcIW.open(map, EMcmarker)
});

const EMcContent = 
'<div><h2>Eric McNeill</h2></div>' +
'<div>Cartographic Specialist</div>';

const EMcIW = new google.maps.InfoWindow({
    content: EMcContent,
});

// Eric Millan

const EMillanLocation = {lat: 44.23047096753822, lng: -76.48123839624441} // Kingston 44.23047096753822, -76.48123839624441
EMillanmarker = new google.maps.Marker({
position: EMillanLocation,
map: map,
});

EMillanmarker.addListener("click", () => {
    EMillanIW.open(map, EMillanmarker)
});

const EMillanContent = 
'<div><h2>Eric Millan</h2></div>' +
'<div>Applications Specialist</div>';

const EMillanIW = new google.maps.InfoWindow({
    content: EMillanContent,
});

// Gowsigan Sritharan

const GSLocation = {lat: 43.725621583524195, lng: -79.76508180498831} // Brampton 43.725621583524195, -79.76508180498831
GSmarker = new google.maps.Marker({
position: GSLocation,
map: map,
});

GSmarker.addListener("click", () => {
    GSIW.open(map, GSmarker)
});
const GSContent = 
'<div><h2>Gowsigan Sritharan</h2></div>' +
'<div>Applications Specialist</div>';

const GSIW = new google.maps.InfoWindow({
    content: GSContent,
});

}

