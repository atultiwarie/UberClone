import React from "react";
import { FaArrowRight } from "react-icons/fa";

function DownloadApp() {
  return (
    <>
      <div className="bg-stone-200 px-4 sm:px-6 lg:px-20 py-12 sm:py-16 my-12 sm:my-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10">
          Do more in the app
        </h1>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-white px-6 sm:px-8 py-5 transition-all duration-300 w-full">
            <img
              src="https://static-00.iconduck.com/assets.00/uber-icon-1024x1024-4icncyyo.png"
              alt="Uber_Icon"
              className="h-24 w-24 sm:h-32 sm:w-32"
            />
            <h1 className="flex items-center text-xl sm:text-2xl font-bold flex-1">
              Download the Uber app
            </h1>
            <ul className="flex items-center mt-3 text-3xl transform transition-transform duration-300 group-hover:translate-x-2">
              <FaArrowRight />
            </ul>
          </div>

          <div className="w-full">
            <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-white px-6 sm:px-8 py-5 w-full transition-all duration-300">
              <img
                src="https://static-00.iconduck.com/assets.00/uber-icon-1024x1024-4icncyyo.png"
                alt="Uber_Icon"
                className="h-24 w-24 sm:h-32 sm:w-32"
              />
              <h1 className="flex items-center text-xl sm:text-2xl font-bold flex-1">
                Sign up to ride
              </h1>
              <span className="flex items-center mt-3 text-3xl transform transition-transform duration-300 group-hover:translate-x-2">
                <FaArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-20">
        <h2>
          Certain requirements and features vary by country, region, and city.
        </h2>
      </div>
    </>
  );
}

export default DownloadApp;
