// Initialize the map and set center position
var mymap = L.map('mapid', {
    center: [20, 0], // Latitude, Longitude
    zoom: 2
});

// --- Base Layers (Beautiful Themes) ---
var light = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    noWrap: true,
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
});

var dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    noWrap: true,
    maxZoom: 18,
    attribution: '&copy; <a href="https://carto.com/">CartoDB</a>'
});

var watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
    noWrap: true,
    maxZoom: 18,
    attribution: 'Map tiles by Stamen Design'
});

// Add default base layer
dark.addTo(mymap);

// --- Glowing Marker Icon ---
var glowingIcon = L.divIcon({
    html: '<div style="width:18px;height:18px;background:#00d1ff;border-radius:50%;box-shadow:0 0 15px #00d1ff;"></div>',
    className: ''
});

// Add a sample glowing marker (Delhi)
L.marker([28.6, 77.2], { icon: glowingIcon })
    .addTo(mymap)
    .bindPopup("<b>Delhi:</b> High Population Density Area")
    .openPopup();

// --- Smooth Animation on Load ---
mymap.flyTo([28.6, 77.2], 4, {
    animate: true,
    duration: 3
});

// --- Add Layer Switcher Control ---
var baseMaps = {
    "Light": light,
    "Dark": dark,
    "Watercolor": watercolor
};

L.control.layers(baseMaps).addTo(mymap);

// --- Optional Second Layer for Comparison (if needed) ---
// Example only: can be used with L.control.sideBySide or compare plugin
/*
var layer2 = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png', {
    attribution: 'Layer 2 by Stamen Design'
});
*/
