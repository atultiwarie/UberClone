import React from "react";
import Navbar from "../Nav & Footer/ResponsiveNavbar";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

const Cities = () => {
  const countries = [
    "Andorra",
    "United Arab Emirates (UAE)",
    "Argentina",
    "Austria",
    "Australia",
    "Bangladesh",
    "Belgium",
    "Bahrain",
    "Bolivia",
    "Brazil",
    "Canada",
    "Switzerland",
    "Ivory Coast",
    "Chile",
    "Colombia",
    "Costa Rica",
    "Czech Rep",
    "Germany",
    "Denmark",
    "Dominican Rep",
    "Ecuador",
    "Estonia",
    "Egypt",
    "Spain",
    "Finland",
    "France",
  ];

  return (
    <>
      <Navbar />

      <div className="p-4 sm:p-8 font-sans mt-10 sm:mt-15 px-4 sm:px-6 lg:px-10">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 leading-tight">
            Use Uber in cities around the world
          </h1>
          <p className="text-base sm:text-lg mb-4 mt-6 sm:mt-10 max-w-3xl">
            Get to your destination in more than 10,000 cities. If you’re going
            to an airport, see all airports where Uber is available.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[180px_minmax(0,1fr)]">
          <div className="sticky top-20 h-fit text-xl font-bold">Global</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-8 font-medium">
            {countries.map((country) => (
              <div key={country} className="underline">
                {country}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="footer">
        <section className="bg-black text-white p-6 sm:p-10 mt-10">
          <h1 className="text-4xl text-center px-10">Uber</h1>
          <h2 className="capitalize text-xl text-center px-10 mt-8">
            Visit Help Center
          </h2>

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
};

export default Cities;
