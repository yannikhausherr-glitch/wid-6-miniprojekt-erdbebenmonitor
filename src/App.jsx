import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Map } from "./Map";

import "./App.css";
import "leaflet/dist/leaflet.css";

function App() {
  const [detail, setDetail] = useState({});
  const [size, setSize] = useState(1);
  const [post, setPost] = useState([]);
  const [magnitude, setMagnitude] = useState("4.5");
  const [time, setTime] = useState("day");

  useEffect(() => {
    fetch(
      `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${magnitude}_${time}.geojson`,
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => setPost(res))
      .catch((err) => console.error("Fetch failed:", err));
  }, [magnitude, time]);

  return (
    <div className="app">
      <Header
        magnitude={magnitude}
        setMagnitude={setMagnitude}
        time={time}
        setTime={setTime}
      />
      <Sidebar detail={detail} size={size} setSize={setSize} />
      <div className="mainArea">
        <Map detail={detail} setDetail={setDetail} size={size} post={post} />
      </div>
    </div>
  );
}

export default App;
