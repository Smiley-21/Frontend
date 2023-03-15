import * as React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { Room } from "@mui/icons-material";

function App() {
  const [viewport, setViewport] = useState({
    latitude: 37.7517,
    longitude: -122.4376,
    zoom: 4,
  });
  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        //local css for Map
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "15px",
          border: "2px solid red",
          margin: "10px",
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={-122.4376} latitude={37.7517} anchor="bottom">
          <div >You are here</div>
        </Marker>
        <Room
          style={{
            fontSize: viewport.zoom,
          }}
        />
      </ReactMapGL>
    </div>
  );
}

export default App;
