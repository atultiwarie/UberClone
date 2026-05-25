import React from "react";

function BusinessSolution() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-black text-white px-4 sm:px-8 lg:px-20 py-12 sm:py-16">
        <div className="w-full lg:max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Looking for business solutions?
          </h1>
          <p className="text-lg sm:text-xl mt-5">
            Get information about how companies leverage
            <span className=" underline underline-offset-4 ml-2.5">
              Uber for Business:{" "}
            </span>
          </p>
          <ul className="list-disc ps-10 mt-5">
            <li className="underline underline-offset-4 text-base sm:text-xl">
              Business travel
            </li>
            <li className="underline underline-offset-4 text-base sm:text-xl mt-5">
              Courtesy rides
            </li>
            <li className="underline underline-offset-4 text-base sm:text-xl mt-5">
              Meal programs
            </li>
            <li className="underline underline-offset-4 text-base sm:text-xl mt-5">
              Item delivery
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row mt-10 gap-4 sm:gap-14">
            <button className=" bg-white text-black text-lg sm:text-xl font-mono px-8 py-2 rounded-xl cursor-pointer hover:bg-gray-200">
              Get started
            </button>
            <p className="cursor-pointer group inline-block">
              <span className=" underline underline-offset-4 text-lg sm:text-xl inline-block relative  after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-500 group-hover:after:w-full">
                Check out our solutions
              </span>
            </p>
          </div>
        </div>

        <div className="w-full lg:max-w-xl">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_603,w_1072/v1691776332/assets/d6/48f5b6-bb5f-450e-8733-90aefecbd09e/original/U4B_Spot_U4BWebsite.jpg"
            alt="Business Solution"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </>
  );
}

export default BusinessSolution;
