import React from 'react'
import { FaCar } from "react-icons/fa";
import { MdOutlineCarRental } from "react-icons/md";
import { BsBoxSeamFill } from "react-icons/bs";
import { Link } from 'react-router';
import { SiGoogleforms } from "react-icons/si";
import { FaDotCircle } from "react-icons/fa";
import { CgShapeSquare } from "react-icons/cg";

// Map
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

function Courier() {
  return (
    <>
      <section>
        <div className='flex justify-between px-10 mt-2.5'>

          <div className='flex gap-20 items-center text-center'>

            <div className="flex flex-wrap gap-3 items-center">
              <h1 className="text-3xl font-semibold cursor-pointer">
                <Link to='/'>Uber</Link>
              </h1>
            </div>

            <div className="flex gap-10 mt-5">

              {/* Ride */}
              <div className="flex items-center gap-2.5  cursor-pointer">
                <FaCar className="text-2xl" />
                <h3 className="text-xl font-semibold"><Link to='/RideSection/Ride'>Ride</Link> </h3>
              </div>

              {/* Rentals  */}
              <div className="flex items-center gap-2.5 cursor-pointer">
                <MdOutlineCarRental className="text-2xl" />
                <h3 className="text-xl font-semibold"><Link to='/RideSection/Rentals'>Rentals</Link> </h3>
              </div>

              {/* Courier (with underline)*/}
              <div className="flex items-center gap-2.5 border-b-4 border-black pb-1  cursor-pointer">
                <BsBoxSeamFill className="text-2xl" />
                <h3 className="text-xl font-semibold"><Link to='/RideSection/Courier'>Courier</Link></h3>
              </div>

            </div>

          </div>


          <div>
            <div className='flex items-center gap-3  bg-gray-100 p-2 rounded-full'>
              <ul className='text-xl'><SiGoogleforms /></ul>
              <h3 className='text-lg font-semibold'>Activity</h3>
            </div>

          </div>

        </div>
      </section>
      <hr className="border-4 border-gray-300 " />

      <div className="flex flex-col lg:flex-row gap-6 p-6">

        {/* Ride Request Form */}
        <div className="flex flex-col lg:flex-row gap-6 p-6">

          {/* Ride Request Card */}
          <div className="w-80 rounded-xl border-2 border-gray-100 overflow-hidden">
            <img
              src="https://d3i4yxtzktqr9n.cloudfront.net/web-plan/c824e49b7d43abd5.jpg"
              alt="Ride"
              className="w-full h-auto"
            />

            <div className="p-4 space-y-3 mt-5 h-52 overflow-scroll">
              <h1 className="text-2xl font-bold">Courier</h1>

              <div >
                <p className=' text-lg text-gray-600'>
                  Have a courier deliver something for you. Get packages delivered in the time it takes to drive there.
                </p>
              </div>

              <div className=' flex items-center gap-3.5 bg-gray-200 px-5 py-2.5 rounded-xl'>
                <ul className=' text-xl'><FaDotCircle /></ul>
                <input type="text"
                  name=""
                  id=""
                  placeholder='Pickup Location'
                  className=' text-lg font-semibold text-gray-700 outline-0' />
              </div>

              <div className=' flex items-center gap-3.5 bg-gray-200 px-5 py-2.5 rounded-xl'>
                <ul className=' text-xl'><CgShapeSquare /></ul>
                <input type="text"
                  name=""
                  id=""
                  placeholder='Dropoff Location'
                  className=' text-lg font-semibold text-gray-700 outline-0' />
              </div>


            </div>
            <button className=' bg-gray-200 text-gray-400 text-xl px-5 w-full rounded-xl font-semibold py-2.5 mt-2.5 cursor-pointer hover:bg-black hover:text-white '> Search</button>
          </div>

        </div>


        {/* Google Map */}
        <div className="flex-1 min-w-[700px]">
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
  )
}

export default Courier