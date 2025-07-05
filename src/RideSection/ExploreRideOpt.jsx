import React from 'react'
import { CiGlobe } from "react-icons/ci";
import { Link } from "react-router";

// HeroSection
import { FaCircleDot } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import { CgShapeSquare } from "react-icons/cg";

// Footer
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function ExploreRideOpt() {
  return (
    <>
      {/* NavBar */}

      <section className="first">
        <div className="flex flex-col lg:flex-row justify-between px-6 sm:px-10 py-5 bg-black text-white font-semibold gap-4">

          {/* Left Side */}
          <div className="flex flex-wrap gap-3 items-center">
            <h1 className="text-3xl font-normal cursor-pointer"><Link to='/'>Uber</Link> </h1>
            <ul className="px-4 py-2 rounded-full hover:bg-neutral-800 cursor-pointer"><Link to='/ride'>Ride</Link> </ul>
            <ul className="px-4 py-2 rounded-full hover:bg-neutral-800 cursor-pointer"><Link to='/drive'>Drive</Link> </ul>
            <ul className="px-4 py-2 rounded-full hover:bg-neutral-800 cursor-pointer"><Link to='/business'>Business</Link> </ul>
            <select className="px-4 py-2 rounded-full hover:bg-neutral-800 cursor-pointer bg-black border-none">
              <option value="">About</option>
            </select>
          </div>

          {/* Right Side */}
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-neutral-800 cursor-pointer text-lg">
              <span className="-rotate-45 font-bold text-xl">
                <CiGlobe />
              </span>
              <span>EN</span>
            </div>
            <ul className="px-4 py-2 rounded-full hover:bg-neutral-800 cursor-pointer"><Link to='/help'>Help</Link> </ul>
            <ul className="px-4 py-2 rounded-full hover:bg-neutral-800 cursor-pointer"><Link to='/signup'>Sign up</Link> </ul>
            <ul className="px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200 cursor-pointer"><Link to='/login'>Log in</Link> </ul>
          </div>
        </div>
      </section>

      <section className="second">
        <div className="flex flex-col sm:flex-row justify-between px-6 sm:px-10 py-5 gap-4">

          <div>
            <h1 className="text-2xl font-bold">Ride</h1>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 text-gray-500 text-base sm:text-lg">
            <ul className="hover:text-black cursor-pointer"><Link to='/RequestRide'> Request a ride</Link></ul>
            <ul className="hover:text-black cursor-pointer"><Link to='/ReserveRide'>Reserve a ride</Link> </ul>
            <ul className="hover:text-black cursor-pointer"><Link to='/SeePrices'>See prices</Link> </ul>
            <ul className="hover:text-black cursor-pointer"><Link to='/ExploreRideOpt'>Explore ride options</Link> </ul>
            <ul className="hover:text-black cursor-pointer"><Link to='/AirportRide'> Airport rides</Link></ul>
          </div>
        </div>
      </section>

      {/* HeroSections */}
      <div className="flex items-center justify-between p-12">
        <div className="ml-20">
          <div>
            <h1 className="text-6xl font-bold mb-4 p-2 w-[500px]">
              Go with Uber
            </h1>
          </div>
          <div>
            <p className="text-lg  p-2 w-[500px]">
              Find a ride for every road with access in more than 10,000 cities worldwide.
            </p>

            <p className="text-lg  p-2 w-[500px]">
              Because the best adventures come to you.
            </p>



            <div className="relative ">
              <div className=" flex items-center bg-gray-200 rounded-xl text-center px-2">
                <ul className=" ml-2.5"><FaCircleDot /></ul>
                <input
                  type="text"
                  placeholder="Enter location"
                  className="w-96 p-4 rounded-2xl bg-gray-200 mt-2 outline-0"
                />
                <ul className=" text-lg  ml-10"><FaLocationArrow /></ul>

              </div>



              <div className="absolute left-[23px] top-[43px] h-[65px] w-[2px] bg-black"></div>

              <div className=" flex items-center bg-gray-200 rounded-xl text-center px-2 mt-5">
                <ul className=" text-lg mt-2 ml-2.5"><CgShapeSquare /></ul>
                <input
                  type="text"
                  placeholder="Enter location"
                  className="w-96 p-4 rounded-2xl bg-gray-200 mt-2 outline-0"
                />


              </div>
            </div>

            <div className="flex items-center space-x-7 mt-3.5 pt-2">
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
                See prices
              </button>
              <p className="text-xl">
                <a
                  href="https://www.uber.com/global/en/ride/app/?referrer=singular_click_id%3Dad62b5ad-c873-4fe4-a5cd-9dd1fe3cca30"
                  className="underline underline-offset-6  hover:text-gray-600"
                >
                  Download the Uber app
                </a>
              </p>

            </div>
          </div>
        </div>
        <div className="w-fit flex justify-cente mr-14">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1072,w_1072/v1631136074/assets/1d/837fde-e40e-4a8d-81c4-1b43776d0395/original/ride-options-hero.png"
            alt=""
            srcset=""
            className="w-[600px] h-auto"
          />
        </div>
      </div>

      {/* Suggetions */}

      <div className="py-10 bg-white">
        <h1 className="text-4xl font-bold mb-10 px-4 lg:px-20">Suggestion</h1>
        <div className="px-4 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">

            {/* Card-1 */}
            <div className="flex flex-col md:flex-row bg-neutral-100 rounded-xl shadow-md overflow-hidden w-full h-full">
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Courier</h2>
                  <p className="text-gray-600 mb-4">
                    Uber makes same-day item delivery easier than ever.
                  </p>
                </div>
                <button className="bg-white px-4 py-2 rounded-full hover:bg-gray-200 transition w-fit">
                  Details
                </button>
              </div>
              <img
                src="https://cn-geo1.uber.com/static/mobile-content/Courier.png"
                alt="Courier"
                className=" h-32 w-32  self-center"
              />
            </div>

            {/* Card-2 */}
            <div className="flex flex-col md:flex-row bg-neutral-100 rounded-xl shadow-md overflow-hidden w-full h-full">
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Intercity</h2>
                  <p className="text-gray-600 mb-4">
                    Get convenient, affordable outstation cabs anytime at your door.
                  </p>
                </div>
                <button className="bg-white px-4 py-2 rounded-full hover:bg-gray-200 transition w-fit">
                  Details
                </button>
              </div>
              <img
                src="https://mobile-content.uber.com/launch-experience/intercity.png"
                alt="Intercity"
                className=" h-32 w-32  self-center"
              />
            </div>

            {/* Card-3 */}
            <div className="flex flex-col md:flex-row bg-neutral-100 rounded-xl shadow-md overflow-hidden w-full h-full">
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Rentals</h2>
                  <p className="text-gray-600 mb-4">
                    Request a trip for a block of time and make multiple stops.
                  </p>
                </div>
                <button className="bg-white px-4 py-2 rounded-full hover:bg-gray-200 transition w-fit">
                  Details
                </button>
              </div>
              <img
                src="https://mobile-content.uber.com/launch-experience/Hourly2021.png"
                alt="Rentals"
                className=" h-32 w-32  self-center"
              />
            </div>

            {/* Card-4 */}
            <div className="flex flex-col md:flex-row bg-neutral-100 rounded-xl shadow-md overflow-hidden w-full h-full">
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Reserve</h2>
                  <p className="text-gray-600 mb-4">
                    Reserve your ride in advance so you can relax on the day of your trip.
                  </p>
                </div>
                <button className="bg-white px-4 py-2 rounded-full hover:bg-gray-200 transition w-fit">
                  Details
                </button>
              </div>
              <img
                src="https://mobile-content.uber.com/uber_reserve/reserve_clock.png"
                alt="Reserve"
                className=" h-32 w-32  self-center"
              />
            </div>

            {/* Card-5 */}
            <div className="flex flex-col md:flex-row bg-neutral-100 rounded-xl shadow-md overflow-hidden w-full h-full">
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Ride</h2>
                  <p className="text-gray-600 mb-4">
                    Go anywhere with Uber. Request a ride, hop in, and go.
                  </p>
                </div>
                <button className="bg-white px-4 py-2 rounded-full hover:bg-gray-200 transition w-fit">
                  Details
                </button>
              </div>
              <img
                src="https://mobile-content.uber.com/launch-experience/Hourly2021.png"
                alt="Ride"
                className=" h-32 w-32  self-center"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Uber Shuttle */}

      <div className=' flex px-32 py-20 gap-20'>
        <div className=' w-[700px] mt-10'>
          <h1 className=' text-4xl font-bold text-gray-800'>Commute in Comfort with Uber Shuttle</h1>
          <p className=' text-lg text-gray-800 mt-14'>
            Uber Shuttle is a new way to enjoy a comfortable, safe, and convenient commute in Delhi. There’s no need to wait to hail down and squeeze onto a crowded bus, spend hours in the metro or drive in peak traffic.
          </p>
        </div>

        <div>
          <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_715,w_1072/v1685144200/assets/98/b5dfcc-edfc-4515-9643-5e4ba0143f64/original/uber-shuttle-delhi.png" alt="" />
        </div>

      </div>

      {/* Explore with uber */}
      <div className=' px-24 py-10'>
        <h1 className=' text-4xl text-gray-700 font-bold'>Explore the globe with Uber</h1>

        {/* Part-1 */}
        <div className='grid grid-cols-2 mt-14 gap-10'>
          <div>
            <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_357,w_536/v1630533096/assets/76/adedf3-6c48-4a3c-89cd-cc33a209a706/original/explore-left.png"
              alt=""
              className=' w-full' />
            <h2 className=' text-xl font-semibold mt-5'>Ride with Uber in 10,000+ cities</h2>
            <p className=' text-lg text-gray-600 mt-2.5 '>
              Travel around cities worldwide, with access to rides almost everywhere.
            </p>
          </div>

          <div>
            <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_357,w_536/v1630533248/assets/a4/7c98e3-19c8-4d27-a0a3-ad0a3dde2886/original/explore-right.png"
              alt=""
              className=' w-full' />
            <h2 className=' text-xl font-semibold mt-5'>Get a ride at 700+ airports</h2>
            <p className=' text-lg text-gray-600 mt-2.5'>
              The world is ready for your arrival. Start your travels with a ride to the airport. In most regions you’ll also have the option to schedule an airport pickup or dropoff in advance.
            </p>
          </div>

        </div>

        {/* Part-2 */}
        <div className='grid grid-cols-3 mt-14 gap-10'>

          {/* Part-1 */}
          <div>
            <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_336,w_598/v1630545468/assets/f3/921166-0b84-4800-8d6f-92decc6ca092/original/go-green-image.png" alt="" />
            <h2 className=' text-xl font-semibold mt-5'>Go green</h2>
            <p className=' text-lg text-gray-600 mt-2.5 '>
              Move toward a greener future with eco-friendly ride options. It’s the perfect way to be a more conscious traveler.
            </p>
          </div>

          {/* Part-2 */}
          <div>
            <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_336,w_598/v1630545915/assets/86/16c006-e642-43b5-9c08-8312517b1e83/original/safety-image.png" alt="" />
            <h2 className=' text-xl font-semibold mt-5'>Our Door-to-Door Safety Standard</h2>
            <p className=' text-lg text-gray-600 mt-2.5'>
              We’ve introduced new policies and features to help keep everyone safe, including a mandatory mask policy and free disinfectant supplies for drivers.
            </p>
          </div>

          {/* Part-3 */}
          <div>
            <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_336,w_598/v1630546204/assets/80/315da2-7c25-4eaa-881d-b6ed42823802/original/uberpass-image.png" alt="" />
            <h2 className=' text-xl font-semibold mt-5'>Go further, get more with Uber One</h2>
            <p className=' text-lg text-gray-600 mt-2.5'>
              See and do it all with one membership that lets you save on all your rides and eats
            </p>
          </div>

        </div>

      </div>

      {/* Footer */}

       <section className="footer">
                <section className="bg-black text-white p-6 sm:p-10 mt-10">
                    <h1 className="text-4xl text-center px-10">Uber</h1>
                    <h2 className="capitalize text-xl text-center px-10 mt-8">Visit Help Center</h2>

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
  )
}

export default ExploreRideOpt