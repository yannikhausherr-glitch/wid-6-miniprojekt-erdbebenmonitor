import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
  GeoJSON,
} from "react-leaflet";
import Button from "@mui/material/Button";

import data from "./assets/4.5_week.geojson.json";
import data1 from "./assets/plate_boundaries.geojson.json";

export const Map = ({ setDetail, size, post }) => {
  const earthquakes = post.features || [];

  return (
    <MapContainer
      center={[47.5, 7.5]}
      zoom={2}
      style={{ height: "95vh", width: "100%" }}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <GeoJSON data={data1} />
      {earthquakes.map((d, i) => (
        <CircleMarker
          key={i}
          center={[d.geometry.coordinates[1], d.geometry.coordinates[0]]}
          pathOptions={{ color: "red" }}
          radius={d.properties.mag ** size}
        >
          <Popup>
            <div style={{ textAlign: "center" }}>
              {d.properties.title} <br />
              <Button
                variant="contained"
                color="info"
                size="small"
                onClick={() => setDetail({ d })}
              >
                Details
              </Button>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};
