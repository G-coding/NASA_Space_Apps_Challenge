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
light.addTo(mymap);

// Define the GIBS layer
var gibsLayer = new L.GIBSLayer('MODIS_Aqua_SurfaceReflectance_Bands721', {
    date: new Date('2025/10/05'),
    transparent: true,
    opacity: 1
}).addTo(mymap);

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

// --- Add Layer Switcher Control with NASA GIBS ---
var baseLayers = {
    "Light": light,
    "Dark": dark,
    "Watercolor": watercolor
};

// Overlays (optional layers)
var overlays = {
    "NASA GIBS Imagery": gibsLayer
};

// Add layer control to the map
L.control.layers(baseLayers, overlays).addTo(mymap);
