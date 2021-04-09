
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
    
    // Marker for EricMcNeil

    const EMcLocation = {lat: 42.77880563811117, lng: -81.18124239146222} // St. Thomas 42.77880563811117, -81.18124239146222
    const marker = new google.maps.Marker({
    position: EMcLocation,
    map: map,
    });
    
    const EMcContent = 
    '<div><h2>Eric McNeill</h2></div>' +
    '<div>Cartographic Specialist</div>';
    
    const EMcIW = new google.maps.InfoWindow({
        content: EMcContent,
    });
    
    EMcmarker.addListener("click", () => {
        EMcIW.open(map, EMcmarker)
    });

    // Eric Millan

    const EMillanLocation = {lat: 44.23047096753822, lng: -76.48123839624441} // Kingston 44.23047096753822, -76.48123839624441
    const marker = new google.maps.Marker({
    position: EMillanLocation,
    map: map,
    });
    
    const EMillanContent = 
    '<div><h2>Eric Millan</h2></div>' +
    '<div>Applications Specialist</div>';
    
    const EMillanIW = new google.maps.InfoWindow({
        content: EMillanContent,
    });
    
    EMillanmarker.addListener("click", () => {
        EMillanIW.open(map, EMillanmarker)
    });

    // Gowsigan Sritharan

    const GSLocation = {lat: 43.65246364298885, lng: -79.38365280943889} // Toronto 43.65246364298885, -79.38365280943889
    const marker = new google.maps.Marker({
    position: GSLocation,
    map: map,
    });
    
    const GSContent = 
    '<div><h2>Gowsigan Sritharan</h2></div>' +
    '<div>Applications Specialist</div>';
    
    const GSIW = new google.maps.InfoWindow({
        content: GSContent,
    });
    
    GSmarker.addListener("click", () => {
        GSIW.open(map, GSmarker)
    });