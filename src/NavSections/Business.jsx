import React from "react";
import { Link } from "react-router";

// Footer
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

function Business() {
  return (
    <>
      {/* Navbar */}
      <section className="first">
        <div className="flex flex-col lg:flex-row justify-between px-4 sm:px-8 lg:px-12 py-4 sm:py-5 bg-black text-white font-semibold gap-3 sm:gap-4">
          {/* Left Side */}
          <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
            <h1 className="text-2xl sm:text-3xl font-normal cursor-pointer">
              <Link to="/">Uber</Link>
            </h1>
            <ul className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-neutral-800 cursor-pointer text-sm sm:text-base">
              <Link to="/ride">Ride</Link>
            </ul>
            <ul className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-neutral-800 cursor-pointer text-sm sm:text-base">
              <Link to="/drive">Drive</Link>
            </ul>
            <ul className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-neutral-800 cursor-pointer text-sm sm:text-base">
              <Link to="/business">Business</Link>
            </ul>
            <select className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-neutral-800 cursor-pointer bg-black border-none text-sm sm:text-base">
              <option value="">About</option>
            </select>
          </div>

          {/* Right Side */}
          <div className="flex flex-wrap gap-2 sm:gap-3 items-center justify-start lg:justify-end">
            <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-neutral-800 cursor-pointer text-sm sm:text-lg">
              <span className="-rotate-45 font-bold text-lg sm:text-xl">
                <CiGlobe />
              </span>
              <span className="text-sm sm:text-base">EN</span>
            </div>
            <ul className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-neutral-800 cursor-pointer text-sm sm:text-base">
              <Link to="/help">Help</Link>
            </ul>
            <ul className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-neutral-800 cursor-pointer text-sm sm:text-base">
              <Link to="/signup">Sign up</Link>
            </ul>
            <ul className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white text-black hover:bg-gray-200 cursor-pointer text-sm sm:text-base">
              <Link to="/login">Log in</Link>
            </ul>
          </div>
        </div>
      </section>

      {/* The best of Uber for your business */}
      <div className="bg-black text-white px-4 sm:px-8 lg:px-20 py-10 lg:py-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
              The best of Uber <br />
              for your business
            </p>
            <p className="mt-6 sm:mt-8 text-sm sm:text-base leading-relaxed">
              Uber for Business gives your organization more control, deeper
              insights, and features built for enterprise users. Manage and
              track business travel, meal programs, and more on one dashboard.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3 sm:gap-6 mt-6">
              <p className="mt-1 text-sm sm:text-base">How to get started</p>
              <p className="mt-1 underline text-sm sm:text-base">
                Check out our solutions
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=558/height=372/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9hNGQzYjg4ZS1jYTQ4LTQ2YWYtOTc4OS1lZTJhMzI4YjFmMmEuanBn"
              alt="uber for business"
              className="w-full max-w-xl h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* A global platform */}
      <div className="bg-black text-white px-4 sm:px-8 lg:px-20 py-10 lg:py-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug text-center lg:text-left">
            A global platform built on the world’s largest <br /> mobility
            network
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-10">
            {/* Card 1 */}
            <div className="shadow-lg rounded-xl p-5 sm:p-6 bg-black/40">
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                Achieve up to 10% cost savings through strengthened compliance
              </h2>
              <p className="text-sm sm:text-base">
                Customers have praised the reduction in travel and meal
                expenses.¹ It is possible to manage expenditures and usage, and
                operate under the established usage rules. For corporate use,
                there are no fees or monthly fixed costs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="shadow-lg rounded-xl p-5 sm:p-6 bg-black/40">
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                Meet sustainability goals with actionable insights
              </h2>
              <p className="text-sm sm:text-base">
                Track CO₂ emissions for every ride on a dashboard exclusive to
                Uber for Business. These insights can help you take action and
                leverage sustainable travel options like Uber Green.²
              </p>
            </div>

            {/* Card 3 */}
            <div className="shadow-lg rounded-xl p-5 sm:p-6 bg-black/40">
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                Provide benefits to employees as well
              </h2>
              <p className="text-sm sm:text-base">
                Offer simplified expense reimbursement and support from a
                dedicated corporate customer team to both administrators and
                employees. In select cities, employees can enjoy a more premium
                ride experience with options like Uber Premium and Business
                Comfort.
              </p>
            </div>

            {/* Card 4 */}
            <div className="shadow-lg rounded-xl p-5 sm:p-6 bg-black/40">
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                Prioritize safety and security for your business
              </h2>
              <p className="text-sm sm:text-base">
                We offer additional crash-alert notifications for business
                users. Our latest US Safety Report shows that 99.9% of Uber
                trips are completed without any reported safety incidents.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How companies leverage Uber */}
      <div className="px-4 sm:px-8 lg:px-20 py-10 lg:py-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center lg:text-left">
            How companies leverage Uber for Business
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-10 md:gap-6 mt-8">
            <div className="flex flex-col items-center">
              <img
                src="https://tb-static.uber.com/prod/udam-assets/a6c383fd-e0a2-4534-9651-40aa6f143f93.svg"
                alt=""
                className="transition-transform duration-300 hover:scale-105 w-40 sm:w-48"
              />
              <p className="mt-4 text-xl sm:text-2xl font-bold text-center">
                Business travel
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://tb-static.uber.com/prod/udam-assets/bdb27aa4-3019-479f-9b41-c9bbc5187d33.svg"
                alt=""
                className="transition-transform duration-300 hover:scale-105 w-40 sm:w-48"
              />
              <p className="mt-4 text-xl sm:text-2xl font-bold text-center">
                Courtesy rides
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://tb-static.uber.com/prod/udam-assets/d9ca79d1-d191-442b-8a19-df7cc125a59c.svg"
                alt=""
                className="transition-transform duration-300 hover:scale-105 w-40 sm:w-48"
              />
              <p className="mt-4 text-xl sm:text-2xl font-bold text-center">
                Meal programs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* No Upfront Cost */}
      <div className="mt-10 px-4 sm:px-8 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center md:text-left mb-6">
            <p className="text-2xl sm:text-3xl font-bold">
              Get started with no upfront costs
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Left Side - Images */}
            <div className="flex flex-row md:flex-col gap-3 sm:gap-4 w-full md:w-1/2 justify-center md:justify-start">
              <img
                src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=360/height=203/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9lMWVkNjY0OS0zMDExLTQxODEtOWRhZC1hMjQxOTYwYzdjNjEucG5n"
                alt=""
                className="w-32 h-20 sm:w-40 sm:h-24 md:w-72 md:h-40 object-cover"
              />
              <img
                src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=360/height=203/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy82MDFmMDdkYi0wNzUxLTRiOTItOTM5OS1hZTRmMDQxNzIxOWQucG5n"
                alt=""
                className="w-32 h-20 sm:w-40 sm:h-24 md:w-72 md:h-40 object-cover"
              />
              <img
                src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=360/height=203/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9lZDVhYjRiNC04ZDdiLTQxZTctOTJiMi0xOTU3YmQxYTc5ZjQucG5n"
                alt=""
                className="w-32 h-20 sm:w-40 sm:h-24 md:w-72 md:h-40 object-cover"
              />
            </div>

            {/* Right Side - Text */}
            <div className="flex flex-col gap-5 w-full md:w-1/2">
              <div>
                <p className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-center md:text-left">
                  Customize your travel and meal programs
                </p>
                <p className="text-sm sm:text-base text-center md:text-left">
                  Set your own policies, help ensure T&E compliance, and get
                  full visibility into every ride and meal. You can easily
                  integrate with the top expensing partners for seamless
                  expensing without paying a service fee.
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-center md:text-left">
                  Onboard people at your own pace
                </p>
                <p className="text-sm sm:text-base text-center md:text-left">
                  Add individuals, specific teams, or your entire organization
                  at once. After your employees are invited, they can add a
                  business profile for work-related rides and meals to their
                  existing Uber account that they know and trust for business
                  rides and meals.
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-xl md:text-2xl font-bold mt-4 mb-2 text-center md:text-left">
                  Set up amenities for customers
                </p>
                <p className="text-sm sm:text-base text-center md:text-left">
                  Send Uber credit in the form of gift cards and vouchers for
                  rides, meals, and more in a snap. You can even request rides
                  for others to make their travel experience practically
                  effortless.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Companies Working with us */}
      <div className="bg-gray-200 py-12 sm:py-16 px-4 sm:px-8 lg:px-20 w-full">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
              Join over 200,000 companies working with us,
              <br />
              including more than half of the Fortune 500
            </p>
          </div>

          {/* Company Logos */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 mb-12">
            <img
              src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=384/height=216/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xMDY2MmEyYi1lODIyLTQxZjMtODJlYS1iZmUwOTZmMTAwMzgucG5n"
              alt="Zoom"
              className="w-48 sm:w-60 lg:w-80 h-auto"
            />
            <img
              src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=384/height=216/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy80Njc0NjdmYy1lNDRhLTRlNjItYTMzMy1kZWNhZTg2NTZlOWYucG5n"
              alt="Coca-Cola"
              className="w-48 sm:w-60 lg:w-80 h-auto"
            />
            <img
              src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=384/height=216/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9kOTc2ZGIxYy0wZjQzLTQyNWUtYmRhOC1hMzlkMTlhYmVjMzIucG5n"
              alt="Samsung"
              className="w-48 sm:w-60 lg:w-80 h-auto"
            />
          </div>

          {/* Testimonial & Video */}
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12">
            {/* Testimonial Text */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <p className="text-sm sm:text-base font-semibold mb-4 leading-relaxed">
                “Pay and basic benefits aren’t the <br /> endgame. You need to
                be actively listening to what employees need and want. One of
                our first added benefits was providing Uber credit for rides, so
                people could safely get a ride for work or for fun. We encourage
                employees to spend the credits however they want.”
              </p>
              <p className="text-base sm:text-lg mt-2">
                <b>Ryan Carter</b>, Founder and CEO, Parachute Media
              </p>
            </div>

            {/* Video */}
            <div className="lg:w-1/2 w-full">
              <iframe
                width="100%"
                height="260"
                src="https://www.youtube.com/embed/38D4KRyvBQY"
                title="Uber Business Testimonial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="bg-[#000080] text-white w-full min-h-[220px] sm:min-h-[260px] flex items-center justify-center px-4 py-8">
        <p className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold leading-snug">
          9 out of 10 customers recommend choosing <br /> Uber for Business³
        </p>
      </div>

      {/* Learn More */}
      <div className="px-4 sm:px-8 lg:px-20 py-10 lg:py-14">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="mb-6 text-center md:text-left">
            <p className="text-2xl sm:text-3xl font-bold">
              Interested in learning more?
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex flex-col items-center md:items-start max-w-xs">
              <img
                src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=384/height=384/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9hNTA1ZTkyYi0xZDIyLTQ1YTAtYjlkNi00MjQyYmIxNDBlZDIucG5n"
                alt=""
                className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 object-cover"
              />
              <p className="font-semibold text-base sm:text-lg mt-4 text-center md:text-left">
                How to reduce the carbon footprint of <br /> business travel
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start max-w-xs">
              <img
                src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=384/height=384/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9jM2M1NzhmNy05MjEwLTQ2ZTYtYmRjMi1jYjM4NDkzMjI1YmEucG5n"
                alt=""
                className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 object-cover"
              />
              <p className="font-semibold text-base sm:text-lg mt-4 text-center md:text-left">
                The perks and benefits your employees <br />
                want now
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start max-w-xs">
              <img
                src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=384/height=384/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy81NmZhNjBkOS01MjFkLTRhOGUtODRiMS04ODk1ODdiNGQ4Y2EucG5n"
                alt=""
                className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 object-cover"
              />
              <p className="font-semibold text-base sm:text-lg mt-4 text-center md:text-left">
                The road to sustainability: executives <br /> discuss their
                efforts toward net zero
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Detail Bottom */}
      <div className="px-4 sm:px-8 lg:px-20 py-8">
        <div className="max-w-4xl mx-auto text-gray-600 text-sm sm:text-base space-y-4">
          <p>
            Product and feature availability may vary by market and location. To
            find out more, get started here.
          </p>
          <p>
            ¹Based on over 275 Uber for Business customers surveyed globally in
            February 2023. Customers agreed that they were able to reduce costs
            on ground transportation and/or meals through better compliance.
          </p>
          <p>
            ²Uber Green is available only in certain cities. In addition,
            availability may be limited outside of downtown areas to start.
          </p>
          <p>
            ³Based on a November 2021 survey commissioned by Uber, in which 323
            Uber for Business customers responded to the question “How likely
            are you to recommend Uber for Business to a colleague or someone in
            your professional network?”
          </p>
        </div>
      </div>

      {/* Footer */}
      <section className="footer">
        <section className="bg-black text-white p-6 sm:p-8 lg:p-10 mt-8">
          <h1 className="text-3xl sm:text-4xl text-center px-4">Uber</h1>
          <h2 className="capitalize text-lg sm:text-xl text-center px-4 mt-5 sm:mt-8">
            Visit Help Center
          </h2>

          {/* Social Links and Location */}
          <div className="flex flex-col sm:flex-row items-center justify-between px-2 sm:px-8 lg:px-20 mt-6 gap-4">
            <div className="flex gap-3 sm:gap-4 text-lg sm:text-xl">
              <ul className="p-3 sm:p-4 hover:bg-gray-900 hover:rounded-xl">
                <a href="https://www.facebook.com/uber?uclick_id=ae27f511-d37f-420c-8c1c-9ff0a1d63bc0">
                  <FaFacebookSquare />
                </a>
              </ul>

              <ul className="p-3 sm:p-4 hover:bg-gray-900 hover:rounded-xl">
                <a href="https://x.com/uber?uclick_id=ae27f511-d37f-420c-8c1c-9ff0a1d63bc0">
                  <FaXTwitter />
                </a>
              </ul>

              <ul className="p-3 sm:p-4 hover:bg-gray-900 hover:rounded-xl">
                <a href="https://www.youtube.com/channel/UCgnxoUwDmmyzeigmmcf0hZA">
                  <FaYoutube />
                </a>
              </ul>

              <ul className="p-3 sm:p-4 hover:bg-gray-900 hover:rounded-xl">
                <a href="https://www.linkedin.com/company/uber-com/">
                  <FaLinkedin />
                </a>
              </ul>

              <ul className="p-3 sm:p-4 hover:bg-gray-900 hover:rounded-xl">
                <a href="https://www.instagram.com/uber/?uclick_id=ae27f511-d37f-420c-8c1c-9ff0a1d63bc0">
                  <FaInstagram />
                </a>
              </ul>
            </div>

            <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-0">
              <div className="flex text-sm sm:text-lg items-center gap-2 px-4 py-2 sm:py-3 rounded-full hover:bg-neutral-800 cursor-pointer">
                <span className="-rotate-45 font-bold text-lg sm:text-xl">
                  <CiGlobe />
                </span>
                <span>English</span>
              </div>
              <div className="flex text-sm sm:text-lg items-center gap-2 px-4 py-2 sm:py-3 rounded-full hover:bg-neutral-800 cursor-pointer">
                <span className="font-bold text-lg sm:text-xl">
                  <FaLocationDot />
                </span>
                <span>Delhi</span>
              </div>
            </div>
          </div>

          {/* App Store & Google Play Links */}
          <div className="flex flex-wrap gap-4 justify-center px-4 sm:px-8 lg:px-20 mt-8">
            <a href="https://play.google.com/store/apps/details?gl=US&hl=en_US&id=com.ubercab&referrer=singular_click_id%3Dd73e8b46-e928-46c7-b7a7-a79b4849093b">
              <img
                src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg"
                alt="Google Play"
                className="w-32 sm:w-36 lg:w-40"
              />
            </a>

            <a href="https://apps.apple.com/us/app/uber-request-a-ride/id368677368?referrer=singular_click_id%3D66e1d411-8835-4234-8cea-71854c235f7d">
              <img
                src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg"
                alt="App Store"
                className="w-32 sm:w-36 lg:w-40"
              />
            </a>
          </div>
        </section>
      </section>
    </>
  );
}

export default Business;
