import React, { useEffect, useState } from "react";
import Navbar from "../Nav & Footer/ResponsiveNavbar";
import { FaDotCircle, FaUser } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

// const center = {
//   lat: 28.6139,
//   lng: 77.209,
// };

function Ride() {
    const [center, setCenter] = useState({
      lat: 28.6139,
      lng: 77.209,
    });
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setCenter({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          (error) => {
            console.log(error);
            alert("Location access denied");
          },
          {
            enableHighAccuracy: true,
          },
        );
      }
    }, []);
  return (
    <>
      <Navbar />

      <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6">
        <div className="border-4 border-gray-300 p-4 rounded-xl w-full max-w-sm">
          <h1 className="text-2xl font-semibold">Get a ride</h1>

          <div className="flex items-center gap-3.5 p-4 mt-5 bg-gray-200 rounded-lg">
            <FaDotCircle className="text-xl" />
            <input
              type="text"
              placeholder="Pickup location"
              className="outline-0 bg-transparent w-full"
            />
          </div>

          <div className="flex items-center gap-3.5 p-4 mt-5 bg-gray-200 rounded-lg">
            <FaDotCircle className="text-xl" />
            <input
              type="text"
              placeholder="Dropoff location"
              className="outline-0 bg-transparent w-full"
            />
            <IoAddCircle className="text-2xl" />
          </div>

          <div className="flex items-center gap-3.5 p-4 mt-5 bg-gray-200 rounded-lg">
            <FaDotCircle className="text-xl" />
            <input
              type="text"
              placeholder="Pickup now"
              className="outline-0 bg-transparent w-full"
            />
          </div>

          <div className="flex items-center gap-3 p-3.5 mt-5 bg-gray-200 rounded-full w-fit min-w-32">
            <FaUser className="text-xl" />
            <button>For me</button>
          </div>

          <button className="w-full bg-gray-100 rounded-xl p-3 mt-5 text-lg font-bold text-gray-500">
            Search
          </button>
        </div>

        <div className="flex-1 min-w-0 w-full">
          <LoadScript googleMapsApiKey="AIzaSyBpgZ65NiewGg7Tqr7uz3DknfOx9Vdpls8">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </>
  );
}

export default Ride;
