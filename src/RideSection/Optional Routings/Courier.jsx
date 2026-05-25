import React from "react";
import { FaCar } from "react-icons/fa";
import { MdOutlineCarRental } from "react-icons/md";
import { BsBoxSeamFill } from "react-icons/bs";
import { Link } from "react-router";
import { SiGoogleforms } from "react-icons/si";
import { FaDotCircle } from "react-icons/fa";
import { CgShapeSquare } from "react-icons/cg";
import Navbar from "../../Nav & Footer/ResponsiveNavbar";

// Map
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

function Courier() {
  return (
    <>
      <Navbar />
      <hr className="border-4 border-gray-300 " />

      <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6">
        {/* Ride Request Form */}
        <div className="flex flex-col lg:flex-row gap-6 p-6">
          {/* Ride Request Card */}
          <div className="w-full max-w-sm rounded-xl border-2 border-gray-100 overflow-hidden">
            <img
              src="https://d3i4yxtzktqr9n.cloudfront.net/web-plan/c824e49b7d43abd5.jpg"
              alt="Ride"
              className="w-full h-auto"
            />

            <div className="p-4 space-y-3 mt-5 h-52 overflow-scroll">
              <h1 className="text-2xl font-bold">Courier</h1>

              <div>
                <p className=" text-lg text-gray-600">
                  Have a courier deliver something for you. Get packages
                  delivered in the time it takes to drive there.
                </p>
              </div>

              <div className=" flex items-center gap-3.5 bg-gray-200 px-5 py-2.5 rounded-xl">
                <ul className=" text-xl">
                  <FaDotCircle />
                </ul>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Pickup Location"
                  className=" text-lg font-semibold text-gray-700 outline-0"
                />
              </div>

              <div className=" flex items-center gap-3.5 bg-gray-200 px-5 py-2.5 rounded-xl">
                <ul className=" text-xl">
                  <CgShapeSquare />
                </ul>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Dropoff Location"
                  className=" text-lg font-semibold text-gray-700 outline-0"
                />
              </div>
            </div>
            <button className=" bg-gray-200 text-gray-400 text-xl px-5 w-full rounded-xl font-semibold py-2.5 mt-2.5 cursor-pointer hover:bg-black hover:text-white ">
              {" "}
              Search
            </button>
          </div>
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

export default Courier;
