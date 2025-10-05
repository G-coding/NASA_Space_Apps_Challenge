# 🌍 NASA Image Explorer

A Web App to Explore and Compare Massive Satellite Images Using LeafletJS and NASA GIBS

This project demonstrates how to explore and compare large-scale satellite imagery efficiently. It allows users to view multiple map layers (e.g., real satellite images, heat maps, or artistic tiles) with a drag-to-compare swipe interface and real-world NASA Earth imagery overlays.

# 🚀 Features

🗺️ Interactive, zoomable world map

🪞 Side-by-side image comparison (swipe feature)

📍 Feature labeling using glowing map markers

🔍 Mock search functionality for locations

🌐 Real satellite imagery overlay using NASA GIBS API

⚡ Optimized tile-based loading for large datasets

# 🧩 Tech Stack
```bash
Component	Technology Used: Frontend - HTML, CSS, JavaScript
Mapping Library: LeafletJS
Comparison Plugin: Leaflet Image Comparison
Satellite Data:	NASA GIBS API (MODIS, VIIRS layers)
Map Tiles (Demo): OpenStreetMap, Stamen Design
```
# 1️⃣ Folder Structure
```bash
NASA_Explorer/
├── index.html
├── style.css
└── script.js
```

# 🧠 How It Works

Uses Leaflet’s tile layer system so only visible map tiles are loaded, ensuring smooth performance even with massive datasets.

NASA GIBS API overlays provide authentic, high-resolution satellite imagery for Earth.

Swipe tool lets users visually compare two layers (e.g., different years or datasets).

Glowing markers allow feature labeling on the map.

Mock search demonstrates the concept of location-based navigation.

# 📊 Example Use Cases

Comparing satellite imagery across different years or datasets

Visualizing climate change, deforestation, or urban growth

Overlaying heat maps, pollution data, or other spatial datasets

Educational museum or science exhibits using real NASA imagery

# 🧾 Documentation Notes

🧱 Adaptive Storage: Only visible map tiles are fetched, making the app fast and lightweight.

🪄 Comparison Method: Drag-to-compare efficiently shows differences between datasets or timeframes.

🏛️ Example Scenario: Users can slide between layers—like a thermal map vs. visual map—to explore changes over time using real NASA satellite imagery.

# 🌐 NASA Resources

NASA Global Imagery Browse Services (GIBS): Provides high-resolution satellite imagery as an overlay on the map.
Link Text: NASA GIBS API

Usage:

Display authentic Earth imagery

Enhance the visual experience for users

Supports temporal comparison across dates for future features

# 💡 Future Enhancements

Add AI-based image recognition for automatic feature tagging

Support user-uploaded layers for custom datasets

Implement real-time search/autocomplete functionality

Integrate additional NASA or Sentinel datasets

# 👩‍💻 Author
```bash
Team: Ctrl+Alt+Delete
Project: NASA Image Explorer
Made with ❤️ using LeafletJS and NASA GIBS
```
