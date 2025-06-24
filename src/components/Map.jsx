import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster";

// Import marker cluster plugin
import "leaflet.markercluster/dist/leaflet.markercluster";

// Fix for default markers in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Sample data - you can replace this with your actual data
const sampleData = [
  {
    lat: 23.20043513,
    lng: 79.10972744,
    year: 1997,
    predicted: 1138.0697,
    actual: 1412,
  },
  {
    lat: 23.20043513,
    lng: 79.10972744,
    year: 1998,
    predicted: 84.016365,
    actual: 0,
  },
  {
    lat: 23.20043513,
    lng: 79.10972744,
    year: 1999,
    predicted: 1092.8408,
    actual: 1099,
  },
  {
    lat: 23.30043513,
    lng: 79.50972743,
    year: 1997,
    predicted: 1112.4894,
    actual: 1115,
  },
  {
    lat: 23.30043513,
    lng: 79.50972743,
    year: 1998,
    predicted: 6.0322504,
    actual: 0,
  },
  {
    lat: 24.00043513,
    lng: 78.60972743,
    year: 1997,
    predicted: 1083.442,
    actual: 1080,
  },
  {
    lat: 24.00043513,
    lng: 78.60972743,
    year: 1998,
    predicted: 956.3876,
    actual: 925,
  },
  {
    lat: 24.00043513,
    lng: 78.70972744,
    year: 1997,
    predicted: 1083.442,
    actual: 1080,
  },
  {
    lat: 24.00043513,
    lng: 78.70972744,
    year: 1998,
    predicted: 956.3876,
    actual: 925,
  },
  {
    lat: 24.00043513,
    lng: 78.80972744,
    year: 1997,
    predicted: 1083.442,
    actual: 1080,
  },
  {
    lat: 24.00043513,
    lng: 78.80972744,
    year: 1998,
    predicted: 956.3876,
    actual: 925,
  },
  {
    lat: 24.00043513,
    lng: 78.90972743,
    year: 1997,
    predicted: 1083.442,
    actual: 1080,
  },
  {
    lat: 24.00043513,
    lng: 78.90972743,
    year: 1998,
    predicted: 956.3876,
    actual: 925,
  },
  {
    lat: 24.00043513,
    lng: 79.00972743,
    year: 1997,
    predicted: 1122.0737,
    actual: 1080,
  },
  {
    lat: 24.00043513,
    lng: 79.00972743,
    year: 1998,
    predicted: 882.8652,
    actual: 926,
  },
  {
    lat: 24.00043513,
    lng: 79.10972744,
    year: 1997,
    predicted: 1266.2056,
    actual: 1283,
  },
  {
    lat: 24.00043513,
    lng: 79.10972744,
    year: 1998,
    predicted: 826.0407,
    actual: 790,
  },
  {
    lat: 24.00043513,
    lng: 79.20972744,
    year: 1997,
    predicted: 1266.2056,
    actual: 1283,
  },
  {
    lat: 24.00043513,
    lng: 79.20972744,
    year: 1998,
    predicted: 826.0407,
    actual: 790,
  },
  {
    lat: 24.00043513,
    lng: 79.30972743,
    year: 1997,
    predicted: 1266.2056,
    actual: 1283,
  },
  {
    lat: 24.00043513,
    lng: 79.30972743,
    year: 1998,
    predicted: 826.0407,
    actual: 790,
  },
  {
    lat: 24.00043513,
    lng: 79.40972743,
    year: 1997,
    predicted: 1266.2056,
    actual: 1283,
  },
  {
    lat: 24.00043513,
    lng: 79.40972743,
    year: 1998,
    predicted: 826.0407,
    actual: 790,
  },
  {
    lat: 24.00043513,
    lng: 79.50972743,
    year: 1997,
    predicted: 1266.2056,
    actual: 1266,
  },
  {
    lat: 24.00043513,
    lng: 79.50972743,
    year: 1998,
    predicted: 826.0407,
    actual: 789,
  },
  {
    lat: 23.40043513,
    lng: 78.70972744,
    year: 1997,
    predicted: -0.5028429,
    actual: 0,
  },
  {
    lat: 23.40043513,
    lng: 78.70972744,
    year: 1998,
    predicted: 63.15037,
    actual: 0,
  },
  {
    lat: 23.40043513,
    lng: 78.70972744,
    year: 1999,
    predicted: 1054.8159,
    actual: 1081,
  },
  {
    lat: 23.40043513,
    lng: 78.70972744,
    year: 2000,
    predicted: 978.8865,
    actual: 1041,
  },
  {
    lat: 23.40043513,
    lng: 78.70972744,
    year: 2001,
    predicted: 931.2733,
    actual: 947,
  },
  {
    lat: 23.40043513,
    lng: 78.70972744,
    year: 2002,
    predicted: 1026.3704,
    actual: 992,
  },
  {
    lat: 23.40043513,
    lng: 78.70972744,
    year: 2003,
    predicted: 1281.9252,
    actual: 1305,
  },
];

const Map = ({ data = sampleData }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [mapData, setMapData] = useState(data);

  useEffect(() => {
    // Initialize map
    if (!mapInstanceRef.current) {
      const map = L.map(mapRef.current, {
        center: [24.841482802547773, 79.46861719745222],
        zoom: 6,
        zoomControl: true,
        preferCanvas: false,
      });

      // Add tile layer
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        minZoom: 0,
        maxZoom: 19,
        maxNativeZoom: 19,
        noWrap: false,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: "abc",
        detectRetina: false,
        tms: false,
        opacity: 1,
      }).addTo(map);

      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;

    // Clear existing markers
    map.eachLayer((layer) => {
      if (layer instanceof L.MarkerClusterGroup) {
        map.removeLayer(layer);
      }
    });

    // Create marker cluster group
    const markerClusterGroup = L.markerClusterGroup({
      chunkedLoading: true,
      maxClusterRadius: 50,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: true,
      zoomToBoundsOnClick: true,
      disableClusteringAtZoom: 16,
    });

    // Add markers for each data point
    mapData.forEach((point) => {
      // Skip points with zero or negative values
      if (point.actual <= 0 && point.predicted <= 0) return;

      // Determine marker color based on yield values
      let color = "blue";
      let fillColor = "green";

      if (point.actual > 0) {
        if (point.actual > 1200) {
          color = "red";
          fillColor = "red";
        } else if (point.actual > 1000) {
          color = "orange";
          fillColor = "orange";
        } else if (point.actual > 800) {
          color = "yellow";
          fillColor = "yellow";
        } else {
          color = "green";
          fillColor = "green";
        }
      } else if (point.predicted > 0) {
        if (point.predicted > 1200) {
          color = "red";
          fillColor = "red";
        } else if (point.predicted > 1000) {
          color = "orange";
          fillColor = "orange";
        } else if (point.predicted > 800) {
          color = "yellow";
          fillColor = "yellow";
        } else {
          color = "green";
          fillColor = "green";
        }
      }

      // Create circle marker
      const marker = L.circleMarker([point.lat, point.lng], {
        bubblingMouseEvents: true,
        color: color,
        dashArray: null,
        dashOffset: null,
        fill: true,
        fillColor: fillColor,
        fillOpacity: 0.2,
        fillRule: "evenodd",
        lineCap: "round",
        lineJoin: "round",
        opacity: 1.0,
        radius: 5,
        stroke: true,
        weight: 3,
      });

      // Create popup content
      const popupContent = `
        <div style="width: 100%; height: 100%;">
          <strong>Location:</strong> ${point.lat.toFixed(
            4
          )}, ${point.lng.toFixed(4)}<br>
          <strong>Year:</strong> ${point.year}<br>
          <strong>Predicted Yield:</strong> ${point.predicted.toFixed(
            2
          )} kg/ha<br>
          <strong>Actual Yield:</strong> ${
            point.actual > 0 ? point.actual.toFixed(2) : "N/A"
          } kg/ha
        </div>
      `;

      marker.bindPopup(popupContent, {
        maxWidth: "100%",
      });

      marker.addTo(markerClusterGroup);
    });

    markerClusterGroup.addTo(map);

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [mapData]);

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <div
        ref={mapRef}
        style={{
          width: "100%",
          height: "100%",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      />
    </div>
  );
};

export default Map;
