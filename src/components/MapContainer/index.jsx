import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "500px",
  height: "400px",
};

const center = {
  lat: 10.83822765355517,
  lng: 106.83911582461813,
};

function MapContainer() {
  return (
    <div className="bg-[#d2cdb0] p-2 rounded-sm">
      <LoadScript googleMapsApiKey="AIzaSyDaOulQACiJzBfqumbsqg_-vKha8fCnL-s">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Thêm các Marker hoặc Polygon vào đây */}
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default MapContainer;
