import React from "react";
import MapContainer from "../../components/MapContainer";
import AddressMap from "../../components/AddressMap";
import FooterAddressMap from "../../components/FooterAddressMap";

function MapPage() {
  return (
    <div className="bg-[#d2cdb0] p-2 rounded-sm h-full">
      <div className="flex flex-col md:flex-row justify-start items-center p-4 ">
        <div className="md:w-1/2">
          <MapContainer />
        </div>
        <div className="md:w-1/2">
          <AddressMap />
        </div>
      </div>
      <FooterAddressMap />
    </div>
  );
}

export default MapPage;