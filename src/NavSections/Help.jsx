import React from "react";
import { Link } from "react-router";
import { CiGlobe } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { FaCar } from "react-icons/fa";
import { BsBoxSeamFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { FaChampagneGlasses } from "react-icons/fa6";
import { TbScooter } from "react-icons/tb";
import { IoBagSharp } from "react-icons/io5";
import { FaTruckFront } from "react-icons/fa6";

// Footer
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Navbar from "../Nav & Footer/ResponsiveNavbar";

function Help() {
  return (
    <>
      <section className="navbar">
        <Navbar />
         
      </section>

      <div className="flex items-center px-4 sm:px-6 lg:px-20 mt-8">
        <h1 className=" text-2xl font-semibold">Help</h1>
      </div>
      {/* HeroSection */}
      <section className=" mt-7">
        <div id="Help-Hero">
          <div className="flex flex-col items-center text-center px-4 ">
            <h1 className="text-4xl font-bold mt-10">
              Welcome to Uber Support
            </h1>
            <p className="text-lg max-w-2xl mt-4">
              We’re here to help. Looking for customer service contact
              information? Explore support resources for the relevant products
              below to find the best way to reach out about your issue.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 m-4 sm:m-10 p-4 sm:p-10 gap-6 sm:gap-8 py-10 sm:py-16">
            <div className="bg-white p-8 flex flex-col justify-center items-center">
              <ul className=" text-4xl">
                <FaCar />
              </ul>
              <h1 className=" text-xl font-semibold mt-2.5">Riders</h1>
            </div>

            <div className="bg-white p-8 flex flex-col justify-center items-center">
              <ul className=" text-4xl">
                <BsBoxSeamFill />
              </ul>
              <h1 className=" text-xl font-semibold mt-2.5">
                Driving & Delivering
              </h1>
            </div>

            <div className="bg-white p-8 flex flex-col justify-center items-center">
              <ul className=" text-4xl">
                <ImSpoonKnife />
              </ul>
              <h1 className=" text-xl font-semibold mt-2.5 text-center">
                Uber Eats
              </h1>
            </div>

            <div className="bg-white p-8 flex flex-col justify-center items-center">
              <ul className=" text-4xl">
                <FaChampagneGlasses />
              </ul>
              <h1 className=" text-xl font-semibold mt-2.5 text-center">
                Merchants & Restaurants
              </h1>
            </div>

            <div className="bg-white p-8 flex flex-col justify-center items-center">
              <ul className=" text-4xl">
                <TbScooter />
              </ul>
              <h1 className=" text-xl font-semibold mt-2.5">
                Bikes & Scooters
              </h1>
            </div>

            <div className="bg-white p-8 flex flex-col justify-center items-center">
              <ul className=" text-4xl">
                <IoBagSharp />
              </ul>
              <h1 className=" text-xl font-semibold mt-2.5">
                Uber for Business
              </h1>
            </div>

            <div className="bg-white p-8 flex flex-col justify-center items-center">
              <ul className=" text-4xl">
                <FaTruckFront />
              </ul>
              <h1 className=" text-xl font-semibold mt-2.5">Freight</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <section className="footer">
        <section className="bg-black text-white p-6 sm:p-10 mt-10">
          <h1 className="text-4xl text-center px-10">Uber</h1>
          <h2 className="capitalize text-xl text-center px-10 mt-8">
            Visit Help Center
          </h2>

          {/* Social Links and Location */}
          <div className="flex flex-col sm:flex-row items-center justify-between px-6 sm:px-20 mt-5">
            <div className="flex gap-6 text-xl">
              <ul className="p-4 hover:bg-gray-900 hover:rounded-xl">
                <FaFacebookSquare />
              </ul>
              <ul className="p-4 hover:bg-gray-900 hover:rounded-xl">
                <FaXTwitter />
              </ul>
              <ul className="p-4 hover:bg-gray-900 hover:rounded-xl">
                <FaYoutube />
              </ul>
              <ul className="p-4 hover:bg-gray-900 hover:rounded-xl">
                <FaLinkedin />
              </ul>
              <ul className="p-4 hover:bg-gray-900 hover:rounded-xl">
                <FaInstagram />
              </ul>
            </div>

            <div className="flex gap-6 mt-6 sm:mt-0">
              <div className="flex text-lg items-center gap-2 px-4 py-3 rounded-full hover:bg-neutral-800 cursor-pointer">
                <span className="-rotate-45 font-bold text-xl">
                  <CiGlobe />
                </span>
                <span>English</span>
              </div>
              <div className="flex text-lg items-center gap-2 px-4 py-3 rounded-full hover:bg-neutral-800 cursor-pointer">
                <span className="font-bold text-xl">
                  <FaLocationDot />
                </span>
                <span>Delhi</span>
              </div>
            </div>
          </div>

          {/* App Store & Google Play Links */}
          <div className="flex gap-5 justify-center px-6 sm:px-20 mt-10">
            <img
              src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg"
              alt="Google Play"
              className="w-32 sm:w-40"
            />
            <img
              src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg"
              alt="App Store"
              className="w-32 sm:w-40"
            />
          </div>
        </section>
      </section>
    </>
  );
}

export default Help;
