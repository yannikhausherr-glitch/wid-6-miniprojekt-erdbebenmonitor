import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Map } from "./Map";

import "./App.css";
import "leaflet/dist/leaflet.css";

function App() {
  const [detail, setDetail] = useState({});
  const [size, setSize] = useState(1);

  return (
    <div className="app">
      <Header />
      <Sidebar detail={detail} size={size} setSize={setSize} />
      <div className="mainArea">
        <Map detail={detail} setDetail={setDetail} size={size} />
      </div>
    </div>
  );
}

export default App;
