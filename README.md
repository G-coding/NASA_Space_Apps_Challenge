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
Mapping Library	LeafletJS,

Comparison Plugin	Leaflet Image Comparison

Map Tiles (Demo)	OpenStreetMap, Stamen Design

# 1️⃣ Folder Structure
```bash
NASA_Explorer/
├── index.html
├── style.css
└── script.js
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
```bash
Team: Ctrl+Alt+Delete
Project: NASA Image Explorer
Made with ❤️ using LeafletJS
```
