import React from "react";
// Navbar
import { FaCar } from "react-icons/fa";
import { MdOutlineCarRental } from "react-icons/md";
import { BsBoxSeamFill } from "react-icons/bs";
import { Link } from "react-router";
import { SiGoogleforms } from "react-icons/si";
import Navbar from "../../Nav & Footer/ResponsiveNavbar";

//Sections
import { BsHourglassSplit } from "react-icons/bs";
import { IoBagSharp } from "react-icons/io5";

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

function Rentals() {
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
              src="https://mobile-content.uber.com/shared-rides/hourly_illustration.png"
              alt="Ride"
              className="w-full h-auto"
            />

            <div className="p-4 space-y-3 mt-5 h-52 overflow-scroll">
              <h1 className="text-2xl font-bold">Uber Rentals</h1>

              <div className="flex items-start gap-2">
                <ul className="mt-1 text-xl ">
                  <BsHourglassSplit />
                </ul>
                <p>Keep a car and driver for up to 12 hours</p>
              </div>

              <div className="flex items-start gap-2">
                <ul className="mt-1 text-xl">
                  <IoBagSharp />
                </ul>
                <p>
                  Ideal for business meetings, tourist travel and multiple stop
                  trips
                </p>
              </div>

              <div className="flex items-start gap-2">
                <ul className="mt-1 text-xl">
                  <MdOutlineCarRental />
                </ul>
                <p>Book for now or reserve for later</p>
              </div>
            </div>
            <button className=" bg-black text-white text-xl px-5 w-full rounded-xl font-semibold py-2.5 mt-2.5">
              {" "}
              Get started
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

export default Rentals;
