import { useState } from "react";
import { Link } from "react-router";
import { CiGlobe } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";

function ResponsiveNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-black text-white p-6 shadow-2xl flex flex-col justify-between z-50"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b border-neutral-800 pb-4">
              <span className="text-2xl font-semibold tracking-wider">
                Uber
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl hover:text-gray-400 focus:outline-none p-1.5 rounded-full hover:bg-neutral-900 transition-colors"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-6 space-y-4">
              <ul className="text-lg py-2 font-medium hover:text-neutral-300">
                <Link to="/ride" onClick={() => setIsMenuOpen(false)}>
                  Ride
                </Link>
              </ul>
              <ul className="text-lg py-2 font-medium hover:text-neutral-300">
                <Link to="/drive" onClick={() => setIsMenuOpen(false)}>
                  Drive
                </Link>
              </ul>
              <ul className="text-lg py-2 font-medium hover:text-neutral-300">
                <Link to="/business" onClick={() => setIsMenuOpen(false)}>
                  Business
                </Link>
              </ul>

              <div className="border-t border-neutral-800 my-4 pt-4">
                <p className="text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  Offerings
                </p>
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
                  <Link to="/help" onClick={() => setIsMenuOpen(false)}>
                    Help
                  </Link>
                </ul>
                <div className="flex items-center gap-2 py-2 text-lg hover:text-neutral-300 cursor-pointer w-fit">
                  <CiGlobe className="-rotate-45 text-xl font-bold" />
                  <span>English (EN)</span>
                </div>
              </div>
            </div>

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

      <section className="w-full bg-black text-white font-semibold">
        <div className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-4 gap-4">
          <div className="flex items-center gap-6 min-w-0">
            <h1 className="text-3xl font-normal cursor-pointer tracking-wider shrink-0">
              <Link to="/">Uber</Link>
            </h1>

            <div className="hidden lg:flex items-center gap-2 min-w-0">
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

          <div className="flex items-center gap-3 shrink-0">
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

            <div className="flex lg:hidden items-center gap-3">
              <Link
                to="/login"
                className="px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200 cursor-pointer text-sm font-semibold transition-colors duration-200"
              >
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
    </>
  );
}

export default ResponsiveNavbar;
