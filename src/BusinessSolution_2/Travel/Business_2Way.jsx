import React from 'react'
import { IoBookOutline } from "react-icons/io5";
import { TbRoad } from "react-icons/tb";
import { TbLeaf } from "react-icons/tb";
import { Link } from "react-router";

// Footer
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

function Business_2Way() {
    return (
        <>

            {/* Navbar */}
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


            <div className="bg-sky-50 py-12 px-4">
                {/* Heading */}
                <div className="flex justify-center w-full mb-12">
                    <h1 className="max-w-5xl font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-700 text-center leading-tight">
                        2 ways to get started with Uber for Business
                    </h1>
                </div>

                {/* Two-column section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">


                    <div className="  p-6 flex flex-col items-center text-center">
                        <img
                            src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_311,w_552/v1676485664/assets/a8/dc747f-3aa3-4cdb-8474-9b3727e44d72/original/ub4-gettingstarted-selfserve.svg"
                            alt="Self-serve"
                            className="mb-6  max-w-md"
                        />
                        <h2 className="text-xl font-bold mb-4 text-gray-800">A self-serve approach to get set up in minutes</h2>
                        <ul className="list-disc pl-5 text-left text-lg space-y-2 text-gray-600 max-w-md">
                            <li >The fastest way to sign up for companies of all sizes</li>
                            <li>Streamlined expensing, and the ability to pay with one credit card with no signup fees</li>
                            <li>
                                Access to dashboard features, including integrations with leading expense platforms, sustainability metrics,
                                and customer support
                            </li>
                        </ul>
                    </div>


                    <div className="   p-6 flex flex-col items-center text-center">
                        <img
                            src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_311,w_552/v1676485955/assets/1a/5eb943-771c-4ac2-8cb3-e9cb65a8a408/original/ub4-gettingstarted-assistance.svg"
                            alt="Tailored experience"
                            className="mb-6  max-w-md"
                        />
                        <h2 className="text-xl font-bold mb-4 text-gray-800">A tailored experience to fit your company’s needs</h2>
                        <ul className="list-disc pl-5 text-left text-lg space-y-2 text-gray-600 max-w-md">
                            <li>For companies with more than 250 employees</li>
                            <li>
                                Streamlined expensing, ability to manage multiple payment methods, invoicing support, and no signup fees
                            </li>
                            <li>
                                Access to dashboard features, including integrations, sustainability metrics, and a dedicated support team
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Section-2 */}

            <div className=' mt-20'>
                <div className=' px-32 space-y-3'>
                    <h1 className=' text-4xl font-bold text-gray-800'>Not quite ready to get started?</h1>
                    <p className=' w-[900px] text-xl text-gray-500 font-semibold'>Check out these resources to learn more about how Uber for Business can help support your employees and customers.</p>
                </div>

                <div className=" py-12 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

                        {/* Card 1 */}
                        <div className="  p-6 hover:shadow-lg transition duration-300">
                            <div className="text-4xl mb-4">
                                <IoBookOutline />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Our official product guide</h2>
                            <p className="text-gray-600">
                                Learn more about the power of Uber for Business in everyday business and how our global platform can offer custom solutions.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className=" p-6 hover:shadow-lg transition duration-300">
                            <div className="text-4xl  mb-4">
                                <TbRoad />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Built for global travel</h2>
                            <p className="text-gray-600">
                                Discover how Uber for Business supports employee mobility and business travel worldwide with scalable tools and insights.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="  p-6 hover:shadow-lg transition duration-300">
                            <div className="text-4xl  mb-4">
                                <TbLeaf />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Sustainability insights</h2>
                            <p className="text-gray-600">
                                Learn how your company can track and reduce its carbon footprint using Uber’s platform and sustainability tools.
                            </p>
                        </div>

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

export default Business_2Way