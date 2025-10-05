# 🌍 NASA Image Explorer

A Web App to Compare Massive Satellite Images Using LeafletJS

This project demonstrates how to explore and compare large-scale image or map data efficiently using LeafletJS. It allows users to compare two different map layers (for example, satellite images from different years or datasets like heat maps) with a simple drag-to-compare interface.

# 🚀 Features

🗺️ Interactive, zoomable world map

🪞 Side-by-side image comparison (swipe feature)

📍 Feature labeling using map markers

🔍 Mock search functionality for locations

⚡ Optimized tile-based loading for large datasets

# 🧩 Tech Stack
Component	Technology Used
Frontend	HTML, CSS, JavaScript
Mapping Library	LeafletJS

Comparison Plugin	Leaflet Image Comparison

Map Tiles (Demo)	OpenStreetMap, Stamen Design
# 🛠️ Setup Guide
1️⃣ Folder Structure
```bash
NASA_Explorer/
├── index.html
├── style.css
└── script.js
```

2️⃣ index.html
```bash
<!DOCTYPE html>
<html>
<head>
    <title>NASA Image Explorer</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <div id="mapid"></div>

    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/leaflet-image-comparison@0.3.0/dist/leaflet-image-comparison.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
```

3️⃣ style.css
```bash
#mapid {
    height: 100vh;
    width: 100%;
}

body {
    margin: 0;
    padding: 0;
}
```

4️⃣ script.js
```bash
// Initialize the map and set center
var mymap = L.map('mapid').setView([20, 0], 2);

// Layer 1: Base map
var layer1 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
}).addTo(mymap);

// Layer 2: Comparison layer (e.g., old image or heat map)
var layer2 = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png', {
    attribution: 'Map tiles by Stamen Design'
});

// Add comparison control
var compare = L.control.compare(layer1, layer2).addTo(mymap);

// Example marker (feature labeling)
L.marker([28.6, 77.2]).addTo(mymap)
  .bindPopup("<b>Known Feature:</b> High Population Density Area");

// Example search mockup
// mymap.setView([newLat, newLng], 5); // Conceptual for AI-like location search
```

# 🧠 How It Works

The app uses Leaflet’s tile layer system, meaning only small map tiles visible on the screen are loaded — not the full dataset.
→ This ensures high performance even for terabytes of imagery.

The comparison control (swipe tool) lets users visually compare two layers — for example, “Amazon Forest in 2000 vs 2020.”

Markers and popups provide feature labeling for known locations.

A mock search demonstrates the concept of “AI-powered navigation.”

# 📊 Example Use Cases

Comparing satellite imagery across different years

Visualizing climate change or deforestation

Overlaying heat maps or pollution data

Educational museum or science exhibits

# 🧾 Documentation Notes
🧱 Adaptive Storage

The project uses tiled map layers — only visible map tiles are fetched, making the application fast and lightweight.

🪄 Comparison Method

The drag-to-compare (swipe) control efficiently shows two datasets for the same region, allowing users to explore temporal or dataset-based differences.

🏛️ Example Scenario

“Using NASA’s imagery, users can slide between two layers — such as a thermal map and a visual map — to explore changes over time, just like a museum exhibit.”

# 💡 Future Enhancements

Integrate NASA or Sentinel satellite APIs for real data

Add AI-based image recognition for feature tagging

Add user-uploaded layer support

Implement actual search/autocomplete functionality

# 👩‍💻 Author

Team: Ctrl+Alt+Delete
Project: NASA Image Explorer
Made with ❤️ using LeafletJS
