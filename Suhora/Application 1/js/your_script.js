// your_script.js

document.addEventListener("DOMContentLoaded", function () {
    // Initialize the map
    var map = L.map('map').setView([0, 0], 2);

    // Add a base map layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Load GeoJSON data and add it to the map
    var geojsonLayer = L.geoJSON().addTo(map);

    fetch('data/your_data.geojson')
        .then(response => response.json())
        .then(data => {
            geojsonLayer.addData(data);
        });

    // Add the search control
    L.Control.geocoder().addTo(map);

    // Add drawing controls (Optional)
    var drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    var drawControl = new L.Control.Draw({
        edit: {
            featureGroup: drawnItems
        }
    });
    map.addControl(drawControl);

    // Example: Adding a marker to the map
    var marker = L.marker([0, 0]).addTo(map);
    marker.bindPopup("Hello, this is a marker!");


});
