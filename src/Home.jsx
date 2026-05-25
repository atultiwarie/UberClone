import { useState } from "react";
import { Link } from "react-router";
import { CiGlobe } from "react-icons/ci";
import { 
  FaLocationArrow, 
  FaArrowRight, 
  FaFacebookSquare, 
  FaYoutube, 
  FaLinkedin, 
  FaInstagram,
  FaBars,
  FaTimes 
} from "react-icons/fa";
import { FaCircleDot, FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { CgShapeSquare } from "react-icons/cg";
import { IoIosBriefcase } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
import { AiFillCreditCard } from "react-icons/ai";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Drawer Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-black text-white p-6 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex justify-between items-center border-b border-neutral-800 pb-4">
              <span className="text-2xl font-semibold tracking-wider">Uber</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl hover:text-gray-400 focus:outline-none p-1.5 rounded-full hover:bg-neutral-900 transition-colors"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>
            
            {/* Drawer Links */}
            <div className="flex-1 overflow-y-auto py-6 space-y-4">
              <ul className="text-lg py-2 font-medium hover:text-neutral-300">
                <Link to="/ride" onClick={() => setIsMenuOpen(false)}>Ride</Link>
              </ul>
              <ul className="text-lg py-2 font-medium hover:text-neutral-300">
                <Link to="/drive" onClick={() => setIsMenuOpen(false)}>Drive</Link>
              </ul>
              <ul className="text-lg py-2 font-medium hover:text-neutral-300">
                <Link to="/business" onClick={() => setIsMenuOpen(false)}>Business</Link>
              </ul>
              
              <div className="border-t border-neutral-800 my-4 pt-4">
                <p className="text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-2">Offerings</p>
                <select className="w-full px-3 py-2.5 rounded-lg bg-neutral-900 text-white text-sm border border-neutral-800 focus:outline-none">
                  <option>About</option>
                  <option>About us</option>
                  <option>Our offerings</option>
                  <option>How Uber works</option>
                  <option>Sustainability</option>
                  <option>Explore</option>
                  <option>Newsroom</option>
                  <option>Investor relations</option>
                  <option>Autonomous</option>
                  <option>Blog</option>
                  <option>Careers</option>
                </select>
              </div>

              <div className="border-t border-neutral-800 my-4 pt-4 space-y-3">
                <ul className="text-lg py-1.5 font-medium hover:text-neutral-300">
                  <Link to="/help" onClick={() => setIsMenuOpen(false)}>Help</Link>
                </ul>
                <div className="flex items-center gap-2 py-2 text-lg hover:text-neutral-300 cursor-pointer w-fit">
                  <CiGlobe className="-rotate-45 text-xl font-bold" />
                  <span>English (EN)</span>
                </div>
              </div>
            </div>
            
            {/* Drawer Buttons */}
            <div className="border-t border-neutral-800 pt-6 space-y-3">
              <Link 
                to="/signup" 
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center py-3 rounded-xl border border-white hover:bg-neutral-950 text-sm font-semibold transition-colors"
              >
                Sign up
              </Link>
              <Link 
                to="/login" 
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center py-3 rounded-xl bg-white text-black hover:bg-neutral-200 text-sm font-semibold transition-colors"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* NavBar */}
      <section className="nav w-full">
        {/* Top Navigation */}
        <section className="first bg-black text-white font-semibold">
          <div className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-4">
            {/* Left Side (Always Visible Brand and Desktop Links) */}
            <div className="flex items-center gap-6">
              <h1 className="text-3xl font-normal cursor-pointer tracking-wider">
                <Link to="/">Uber</Link>
              </h1>
              
              {/* Desktop Only Nav Links */}
              <div className="hidden lg:flex items-center gap-2">
                <ul className="px-3 py-2 rounded-full hover:bg-neutral-800 cursor-pointer transition-colors duration-200">
                  <Link to="/ride">Ride</Link>
                </ul>
                <ul className="px-3 py-2 rounded-full hover:bg-neutral-800 cursor-pointer transition-colors duration-200">
                  <Link to="/drive">Drive</Link>
                </ul>
                <ul className="px-3 py-2 rounded-full hover:bg-neutral-800 cursor-pointer transition-colors duration-200">
                  <Link to="/business">Business</Link>
                </ul>

                <select className="px-3 py-2 rounded-full bg-black text-white text-sm appearance-none hover:bg-neutral-800 cursor-pointer outline-none border-none">
                  <option>About</option>
                  <option>About us</option>
                  <option>Our offerings</option>
                  <option>How Uber works</option>
                  <option>Sustainability</option>
                  <option>Explore</option>
                  <option>Newsroom</option>
                  <option>Investor relations</option>
                  <option>Autonomous</option>
                  <option>Blog</option>
                  <option>Careers</option>
                </select>
              </div>
            </div>

            {/* Right Side (Desktop Only Actions & Mobile Toggle) */}
            <div className="flex items-center gap-3">
              {/* Desktop Actions */}
              <div className="hidden lg:flex items-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-neutral-800 cursor-pointer text-lg transition-colors duration-200">
                  <span className="-rotate-45 font-bold text-xl">
                    <CiGlobe />
                  </span>
                  <span>EN</span>
                </div>
                <ul className="px-4 py-2 rounded-full hover:bg-neutral-800 cursor-pointer transition-colors duration-200">
                  <Link to="/help">Help</Link>
                </ul>
                <ul className="px-4 py-2 rounded-full hover:bg-neutral-800 cursor-pointer transition-colors duration-200">
                  <Link to="/signup">Sign up</Link>
                </ul>
                <ul className="px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200 cursor-pointer transition-colors duration-200">
                  <Link to="/login">Log in</Link>
                </ul>
              </div>

              {/* Mobile Only: Sign Up and Hamburger Menu */}
              <div className="flex lg:hidden items-center gap-3">
                <Link to="/login" className="px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200 cursor-pointer text-sm font-semibold transition-colors duration-200">
                  Log in
                </Link>
                <button 
                  onClick={() => setIsMenuOpen(true)}
                  className="p-2 text-2xl text-white hover:bg-neutral-800 rounded-full focus:outline-none transition-colors duration-200"
                  aria-label="Toggle Menu"
                >
                  <FaBars />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <section className="second border-t border-gray-200 bg-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 sm:px-6 md:px-10 py-3 gap-3">
            <div>
              <h1 className="text-2xl font-bold text-black">Ride</h1>
            </div>

            <div className="flex items-center gap-4 text-neutral-500 text-sm sm:text-base overflow-x-auto w-full md:w-auto py-1 scrollbar-hide whitespace-nowrap">
              <ul className="hover:text-black font-medium transition-colors cursor-pointer shrink-0">
                <Link to="/RequestRide">Request a ride</Link>
              </ul>
              <ul className="hover:text-black font-medium transition-colors cursor-pointer shrink-0">
                <Link to="/ReserveRide">Reserve a ride</Link>
              </ul>
              <ul className="hover:text-black font-medium transition-colors cursor-pointer shrink-0">
                <Link to="/SeePrices">See prices</Link>
              </ul>
              <ul className="hover:text-black font-medium transition-colors cursor-pointer shrink-0">
                <Link to="/ExploreRideOpt">Explore ride options</Link>
              </ul>
              <ul className="hover:text-black font-medium transition-colors cursor-pointer shrink-0">
                <Link to="/AirportRide">Airport rides</Link>
              </ul>
            </div>
          </div>
        </section>
      </section>

      {/* Ride */}
      <section className="first bg-white">
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-24 py-12 gap-10">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 text-neutral-900 leading-tight">
              Request a ride for <br className="hidden md:block" /> now or later
            </h1>

            <p className="text-base sm:text-lg mb-6 text-neutral-600">
              Add your trip details, hop in, and go.
            </p>

            {/* Input Fields */}
            <div className="relative space-y-4">
              {/* First Input */}
              <div className="flex items-center bg-neutral-100 rounded-xl px-4 py-1 border border-neutral-200 focus-within:border-neutral-400 transition-colors">
                <span className="text-sm text-neutral-850 flex-shrink-0">
                  <FaCircleDot />
                </span>
                <input
                  type="text"
                  placeholder="Enter pickup location"
                  className="flex-1 p-3 bg-transparent outline-none w-full text-neutral-900 placeholder-neutral-500 text-base"
                />
                <span className="text-lg text-neutral-500 cursor-pointer hover:text-black flex-shrink-0">
                  <FaLocationArrow />
                </span>
              </div>

              {/* Vertical Line (only for screens with relative spacing) */}
              <div className="absolute left-[23px] top-[42px] h-[48px] w-[2px] bg-neutral-400 hidden sm:block"></div>

              {/* Second Input */}
              <div className="flex items-center bg-neutral-100 rounded-xl px-4 py-1 border border-neutral-200 focus-within:border-neutral-400 transition-colors">
                <span className="text-lg text-neutral-850 flex-shrink-0">
                  <CgShapeSquare />
                </span>
                <input
                  type="text"
                  placeholder="Enter destination"
                  className="flex-1 p-3 bg-transparent outline-none w-full text-neutral-900 placeholder-neutral-500 text-base"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="bg-black text-white px-6 py-3.5 rounded-xl hover:bg-neutral-800 w-full sm:w-auto text-center font-semibold transition-colors shadow-sm">
                <Link to="/RequestRide">See prices</Link>
              </button>
              <button className="border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 px-6 py-3.5 rounded-xl w-full sm:w-auto text-center font-semibold transition-colors shadow-sm">
                <Link to="/RequestRide">Schedule for later</Link>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=672/height=672/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy80MmEyOTE0Ny1lMDQzLTQyZjktODU0NC1lY2ZmZmUwNTMyZTkucG5n"
              alt="Ride Illustration"
              className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[550px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Suggestion */}
      <section className="second bg-white py-12 border-t border-neutral-100">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 px-4 sm:px-8 lg:px-24 text-neutral-900">
            Suggestions
          </h1>
          <div className="px-4 sm:px-8 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: Intercity */}
              <div className="flex flex-row justify-between bg-neutral-50 hover:bg-neutral-100/80 rounded-2xl p-5 border border-neutral-100 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group min-h-[180px]">
                <div className="flex flex-col justify-between flex-1 pr-3">
                  <div>
                    <h2 className="text-xl font-bold text-neutral-900 group-hover:text-black">Intercity</h2>
                    <p className="text-neutral-500 text-sm mt-2 leading-relaxed">
                      Get convenient, affordable outstation cabs anytime at your door.
                    </p>
                  </div>
                  <button className="bg-white hover:bg-neutral-200 text-neutral-800 font-semibold px-4 py-2 rounded-full text-sm w-fit border border-neutral-200 transition-colors mt-4 shadow-sm">
                    <Link to="/RideSection/Ride">Details</Link>
                  </button>
                </div>
                <img
                  src="https://cn-geo1.uber.com/static/mobile-content/Courier.png"
                  alt="Intercity"
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain self-center flex-shrink-0"
                />
              </div>

              {/* Card 2: Rentals */}
              <div className="flex flex-row justify-between bg-neutral-50 hover:bg-neutral-100/80 rounded-2xl p-5 border border-neutral-100 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group min-h-[180px]">
                <div className="flex flex-col justify-between flex-1 pr-3">
                  <div>
                    <h2 className="text-xl font-bold text-neutral-900 group-hover:text-black">Rentals</h2>
                    <p className="text-neutral-500 text-sm mt-2 leading-relaxed">
                      Request a trip for a block of mind and make multiple stops.
                    </p>
                  </div>
                  <button className="bg-white hover:bg-neutral-200 text-neutral-800 font-semibold px-4 py-2 rounded-full text-sm w-fit border border-neutral-200 transition-colors mt-4 shadow-sm">
                    <Link to="/RideSection/Rentals">Details</Link>
                  </button>
                </div>
                <img
                  src="https://mobile-content.uber.com/launch-experience/Hourly2021.png"
                  alt="Rentals"
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain self-center flex-shrink-0"
                />
              </div>

              {/* Card 3: Reserve */}
              <div className="flex flex-row justify-between bg-neutral-50 hover:bg-neutral-100/80 rounded-2xl p-5 border border-neutral-100 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group min-h-[180px]">
                <div className="flex flex-col justify-between flex-1 pr-3">
                  <div>
                    <h2 className="text-xl font-bold text-neutral-900 group-hover:text-black">Reserve</h2>
                    <p className="text-neutral-500 text-sm mt-2 leading-relaxed">
                      Reserve your ride in advance so you can relax on the day of your trip.
                    </p>
                  </div>
                  <button className="bg-white hover:bg-neutral-200 text-neutral-800 font-semibold px-4 py-2 rounded-full text-sm w-fit border border-neutral-200 transition-colors mt-4 shadow-sm">
                    <Link to="/RideSection/Ride">Details</Link>
                  </button>
                </div>
                <img
                  src="https://mobile-content.uber.com/uber_reserve/reserve_clock.png"
                  alt="Reserve"
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain self-center flex-shrink-0"
                />
              </div>

              {/* Card 4: Ride */}
              <div className="flex flex-row justify-between bg-neutral-50 hover:bg-neutral-100/80 rounded-2xl p-5 border border-neutral-100 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group min-h-[180px]">
                <div className="flex flex-col justify-between flex-1 pr-3">
                  <div>
                    <h2 className="text-xl font-bold text-neutral-900 group-hover:text-black">Ride</h2>
                    <p className="text-neutral-500 text-sm mt-2 leading-relaxed">
                      Go anywhere with Uber. Request a ride, hop in, and go.
                    </p>
                  </div>
                  <button className="bg-white hover:bg-neutral-200 text-neutral-800 font-semibold px-4 py-2 rounded-full text-sm w-fit border border-neutral-200 transition-colors mt-4 shadow-sm">
                    <Link to="/RideSection/Ride">Details</Link>
                  </button>
                </div>
                <img
                  src="https://mobile-content.uber.com/launch-experience/Hourly2021.png"
                  alt="Ride"
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain self-center flex-shrink-0"
                />
              </div>

              {/* Card 5: Shuttle */}
              <div className="flex flex-row justify-between bg-neutral-50 hover:bg-neutral-100/80 rounded-2xl p-5 border border-neutral-100 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group min-h-[180px] md:col-span-2 lg:col-span-1">
                <div className="flex flex-col justify-between flex-1 pr-3">
                  <div>
                    <h2 className="text-xl font-bold text-neutral-900 group-hover:text-black">Shuttle</h2>
                    <p className="text-neutral-500 text-sm mt-2 leading-relaxed">
                      Lower-cost shared rides on professionally driven buses and vans.
                    </p>
                  </div>
                  <button className="bg-white hover:bg-neutral-200 text-neutral-800 font-semibold px-4 py-2 rounded-full text-sm w-fit border border-neutral-200 transition-colors mt-4 shadow-sm">
                    <Link to="/RideSection/Ride">Details</Link>
                  </button>
                </div>
                <img
                  src="https://mobile-content.uber.com/launch-experience/hcv_shuttle.png"
                  alt="Shuttle"
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain self-center flex-shrink-0"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="third bg-white py-12 border-t border-neutral-100">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold px-4 sm:px-8 lg:px-24 mb-8 text-neutral-900">
            Plans for later
          </h1>

          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 px-4 sm:px-8 lg:px-24">
            {/* Left Side: Form */}
            <div
              id="plan_image"
              className="plan-image relative rounded-3xl p-6 sm:p-8 lg:p-10 w-full lg:w-[60%] flex flex-col justify-between overflow-hidden shadow-md text-left lg:text-right"
            >
              {/* Subtle transparent dark overlay to make text highly legible and premium */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent lg:bg-gradient-to-l lg:from-white/95 lg:via-white/75 lg:to-transparent z-0 pointer-events-none"></div>
              
              <div className="z-10">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold max-w-md lg:ml-auto lg:mr-4 text-black drop-shadow-sm leading-tight">
                  Get your ride right with Uber Reserve
                </h1>

                <p className="text-base sm:text-lg font-semibold mt-4 lg:mr-4 text-neutral-800">
                  Choose date and time
                </p>

                <div className="flex flex-col sm:flex-row justify-start lg:justify-end mt-4 gap-3 lg:mr-4">
                  <input
                    type="date"
                    className="bg-white border border-neutral-300 px-4 py-2.5 rounded-xl outline-none w-full sm:w-auto text-neutral-800 shadow-sm focus:border-black transition-colors"
                  />
                  <input
                    type="time"
                    className="bg-white border border-neutral-300 px-4 py-2.5 rounded-xl outline-none w-full sm:w-auto text-neutral-800 shadow-sm focus:border-black transition-colors"
                  />
                </div>
              </div>

              <div className="flex justify-start lg:justify-end mt-6 lg:mr-4 z-10">
                <button className="bg-black hover:bg-neutral-800 text-white text-base font-bold rounded-xl py-3 px-8 w-full sm:w-auto  transition duration-200 shadow-md">
                  Next
                </button>
              </div>
            </div>

            {/* Right Side: Benefits */}
            <div className="border border-neutral-200 rounded-3xl p-6 sm:p-8 w-full lg:w-[40%] bg-white flex flex-col justify-between shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-neutral-900 border-b border-neutral-100 pb-3">Benefits</h2>

              <div className="space-y-6 flex-1 flex flex-col justify-center">
                <div className="flex items-start gap-4">
                  <div className="text-2xl text-neutral-900 pt-0.5">
                    <IoIosBriefcase />
                  </div>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed border-b border-neutral-100 pb-2 flex-1">
                    Choose your exact pickup time up to 90 days in advance.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl text-neutral-900 pt-0.5">
                    <LuClock3 />
                  </div>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed border-b border-neutral-100 pb-2 flex-1">
                    Extra wait time included to meet your ride.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl text-neutral-900 pt-0.5">
                    <AiFillCreditCard />
                  </div>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed pb-2 flex-1">
                    Cancel at no charge up to 60 minutes in advance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ride with friends seamlessly */}
          <section className="mt-16">
            <div className="flex flex-col lg:flex-row items-center gap-10 px-4 sm:px-8 lg:px-24">
              <div className="w-full lg:w-1/2">
                <img
                  src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=576/height=324/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9mNzdhYTM4MC1hMzc4LTQ3YmYtOGI4OC1hYWJhMTU4N2VmZGQucG5n"
                  alt="Ride with friends"
                  className="w-full h-auto rounded-2xl object-cover shadow-sm"
                />
              </div>

              <div className="w-full lg:w-1/2">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-neutral-900 leading-tight">
                  Ride with friends seamlessly
                </h1>
                <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                  Riding with friends just got easier: set up a group ride in
                  the Uber app, invite your friends, and arrive at your
                  destination. Friends who ride together save together.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Travel */}
      <section className="forth bg-white py-16 border-t border-neutral-100">
        <div>
          <h1 className="px-4 sm:px-8 lg:px-24 text-2xl sm:text-3xl lg:text-4xl font-bold text-center lg:text-left text-neutral-900 mb-10 leading-tight">
            Use the Uber app to help you travel your way
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-24">
            {/* Card 1 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left group">
              <div className="overflow-hidden rounded-2xl w-full max-w-[384px] aspect-square shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=384/height=384/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy81NGY2MDE2MS1jZjZiLTQ0MDEtYTMwOS04YmIxOTZjMDAxNGMuanBn"
                  alt="Ride Options"
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <h2 className="text-xl font-bold mt-5 text-neutral-900">Ride Options</h2>
              <p className="text-neutral-600 text-sm sm:text-base mt-2.5 leading-relaxed max-w-sm">
                There’s more than one way to move with Uber, no matter where you
                are or where you’re headed next.
              </p>
              <button className="bg-black hover:bg-neutral-800 text-white text-sm sm:text-base font-bold mt-6 py-3 px-6 rounded-xl transition-colors shadow-sm w-full sm:w-auto">
                <Link to="ExploreRideOpt">Search ride options</Link>
              </button>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left group">
              <div className="overflow-hidden rounded-2xl w-full max-w-[384px] aspect-square shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=384/height=384/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9mOWJhMjdjNC02NjVjLTRjY2EtODE2MS05ZTNmODdmNDk5OTQucG5n"
                  alt="Airports"
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <h2 className="text-xl font-bold mt-5 text-neutral-900">700+ airports</h2>
              <p className="text-neutral-600 text-sm sm:text-base mt-2.5 leading-relaxed max-w-sm">
                You can request a ride to and from most major airports. Schedule
                a ride to the airport for one less thing to worry about.
              </p>
              <button className="bg-black hover:bg-neutral-800 text-white text-sm sm:text-base font-bold mt-6 py-3 px-6 rounded-xl transition-colors shadow-sm w-full sm:w-auto">
                <Link to="AirportRide">Search Airports</Link>
              </button>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left group">
              <div className="overflow-hidden rounded-2xl w-full max-w-[384px] aspect-square shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=384/height=384/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9iOGMzOWRlMC02ZTEzLTQ4NWItYmE0NS02NjUxMTE3MGM2MmEuanBn"
                  alt="Cities"
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <h2 className="text-xl font-bold mt-5 text-neutral-900">10,000+ cities</h2>
              <p className="text-neutral-600 text-sm sm:text-base mt-2.5 leading-relaxed max-w-sm">
                The app is available in thousands of cities worldwide, so you
                can request a ride even when you’re far from home.
              </p>
              <button className="bg-black hover:bg-neutral-800 text-white text-sm sm:text-base font-bold mt-6 py-3 px-6 rounded-xl transition-colors shadow-sm w-full sm:w-auto">
                <Link to="/Cities">Search Cities</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BusinessSolution */}
      <section className="fifth bg-black text-white py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 px-4 sm:px-8 lg:px-24">
          <div className="flex-1 w-full">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Looking for business solutions?
            </h1>
            <p className="text-neutral-400 text-base sm:text-lg lg:text-xl mt-5 max-w-xl">
              Get information about how companies leverage
              <span className="underline underline-offset-4 ml-2 text-white hover:text-gray-300">
                <Link to="/business">Uber for Business:</Link>{" "}
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center mt-8 sm:mt-12 gap-6">
              <button className="bg-white hover:bg-gray-200 text-black text-base sm:text-lg font-semibold px-8 py-3.5 rounded-xl transition-colors w-full sm:w-auto text-center shadow-md">
                <Link to="/Business/2Way">Get started</Link>
              </button>
              <p className="cursor-pointer group text-base sm:text-lg font-medium">
                <span className="underline underline-offset-4 inline-block relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-500 group-hover:after:w-full">
                  <Link to="/business">Check out our solutions</Link>
                </span>
              </p>
            </div>
          </div>

          <div className="flex-1 w-full">
            <img
              src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=576/height=324/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9kNjQ4ZjViNi1iYjVmLTQ1MGUtODczMy05MGFlZmVjYmQwOWUuanBn"
              alt="Business Solution"
              className="w-full h-auto max-h-96 object-cover rounded-2xl shadow-lg border border-neutral-900"
            />
          </div>
        </div>
      </section>

      {/* DownloadApp */}
      <section className="sixth bg-white py-16">
        <div className="bg-neutral-100 rounded-3xl px-6 sm:px-12 py-12 mx-4 sm:mx-8 lg:mx-24 shadow-sm">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-8 px-2">
            Do more in the app
          </h1>

          <div className="flex flex-col lg:flex-row gap-6 px-2">
            {/* Card 1 */}
            <div className="group flex flex-col sm:flex-row items-center gap-5 bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-neutral-100 transition-all duration-300 hover:shadow-md hover:border-neutral-200 cursor-pointer flex-1">
              <img
                src="https://logodownload.org/wp-content/uploads/2015/05/uber-logo-5-1.png"
                alt="Uber Icon"
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl flex-shrink-0 object-contain"
              />
              <div className="flex-1 text-center sm:text-left">
                <h1 className="text-lg sm:text-xl font-bold text-neutral-900 leading-tight">
                  <a href="https://www.uber.com/global/en/ride/app/?referrer=singular_click_id%3Dde675c57-5e03-4c4d-be06-5b61ee54befb" className="hover:underline">
                    Download the Uber app
                  </a>
                </h1>
              </div>
              <div className="text-xl text-neutral-400 group-hover:text-neutral-950 transform transition-transform duration-300 group-hover:translate-x-2 hidden sm:block">
                <FaArrowRight />
              </div>
            </div>

            {/* Card 2 */}
            <div className="group flex flex-col sm:flex-row items-center gap-5 bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-neutral-100 transition-all duration-300 hover:shadow-md hover:border-neutral-200 cursor-pointer flex-1">
              <img
                src="https://logodownload.org/wp-content/uploads/2015/05/uber-logo-5-1.png"
                alt="Uber Icon"
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl flex-shrink-0 object-contain"
              />
              <div className="flex-1 text-center sm:text-left">
                <h1 className="text-lg sm:text-xl font-bold text-neutral-900 leading-tight">
                  <Link to="/signup" className="hover:underline">Sign up to ride</Link>{" "}
                </h1>
              </div>
              <div className="text-xl text-neutral-400 group-hover:text-neutral-950 transform transition-transform duration-300 group-hover:translate-x-2 hidden sm:block">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 sm:px-12 lg:px-24 mt-8">
          <h2 className="text-sm text-neutral-500 text-center lg:text-left leading-relaxed">
            Certain requirements and features vary by country, region, and city.
          </h2>
        </div>
      </section>

      {/* Footer */}
      <section className="footer bg-black text-white pt-16 pb-12">
        <div className="px-6 sm:px-12 lg:px-24">
          <h1 className="text-4xl font-semibold tracking-wider text-center lg:text-left">Uber</h1>
          <h2 className="capitalize text-lg text-neutral-400 hover:text-white cursor-pointer w-fit mx-auto lg:mx-0 mt-6 transition-colors">
            Visit Help Center
          </h2>

          {/* Social Links and Location */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-6 border-b border-neutral-800 pb-8">
            <div className="flex flex-wrap gap-4 text-xl justify-center">
              <a href="https://www.facebook.com/uber?uclick_id=ae27f511-d37f-420c-8c1c-9ff0a1d63bc0" className="p-3 bg-neutral-900 rounded-xl hover:bg-neutral-800 transition-colors text-white">
                <FaFacebookSquare />
              </a>

              <a href="https://x.com/uber?uclick_id=ae27f511-d37f-420c-8c1c-9ff0a1d63bc0" className="p-3 bg-neutral-900 rounded-xl hover:bg-neutral-800 transition-colors text-white">
                <FaXTwitter />
              </a>

              <a href="https://www.youtube.com/channel/UCgnxoUwDmmyzeigmmcf0hZA" className="p-3 bg-neutral-900 rounded-xl hover:bg-neutral-800 transition-colors text-white">
                <FaYoutube />
              </a>

              <a href="https://www.linkedin.com/company/uber-com/" className="p-3 bg-neutral-900 rounded-xl hover:bg-neutral-800 transition-colors text-white">
                <FaLinkedin />
              </a>

              <a href="https://www.instagram.com/uber/?uclick_id=ae27f511-d37f-420c-8c1c-9ff0a1d63bc0" className="p-3 bg-neutral-900 rounded-xl hover:bg-neutral-800 transition-colors text-white">
                <FaInstagram />
              </a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex text-base items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 cursor-pointer transition-colors text-white">
                <CiGlobe className="-rotate-45 font-bold text-lg" />
                <span>English</span>
              </div>
              <div className="flex text-base items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 cursor-pointer transition-colors text-white">
                <FaLocationDot className="text-lg" />
                <span>Delhi</span>
              </div>
            </div>
          </div>

          {/* App Store & Google Play Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <a href="https://play.google.com/store/apps/details?gl=US&hl=en_US&id=com.ubercab&referrer=singular_click_id%3Dd73e8b46-e928-46c7-b7a7-a79b4849093b" className="transition-transform hover:scale-[1.02]">
              <img
                src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg"
                alt="Google Play"
                className="w-36 sm:w-40"
              />
            </a>

            <a href="https://apps.apple.com/us/app/uber-request-a-ride/id368677368?referrer=singular_click_id%3D66e1d411-8835-4234-8cea-71854c235f7d" className="transition-transform hover:scale-[1.02]">
              <img
                src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg"
                alt="App Store"
                className="w-36 sm:w-40"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
