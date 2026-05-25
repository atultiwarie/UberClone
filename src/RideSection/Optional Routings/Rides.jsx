import React from "react";
// Navbar
import { FaCar } from "react-icons/fa";
import { MdOutlineCarRental } from "react-icons/md";
import { BsBoxSeamFill } from "react-icons/bs";
import { Link } from "react-router";
import { SiGoogleforms } from "react-icons/si";
import Navbar from "../../Nav & Footer/ResponsiveNavbar";

// ////////////////////////
import { FaDotCircle, FaUser } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

function Rides() {
  return (
    <>
      <Navbar />
      <hr className="border-4 border-gray-300 " />

      <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6">
        {/* Ride Request Form */}
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

          <div className="flex items-center gap-3.5 p-4 mt-5  bg-gray-200 rounded-lg">
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

          <div className="flex items-center gap-3 p-3.5 mt-5 bg-gray-200 rounded-full w-32">
            <FaUser className="text-xl" />
            <button>For me</button>
          </div>

          <button className="w-full bg-gray-100 rounded-xl p-3 mt-5 text-lg font-bold text-gray-500">
            Search
          </button>
        </div>

        {/* Google Map */}
        <div className="flex-1 min-w-0 w-full">
          <LoadScript googleMapsApiKey="AIzaSyBpgZ65NiewGg7Tqr7uz3DknfOx9Vdpls8">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={12}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </>
  );
}

export default Rides;
