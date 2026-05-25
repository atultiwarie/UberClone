import { IoIosBriefcase } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
import { AiFillCreditCard } from "react-icons/ai";

function Plans() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold px-4 sm:px-6 lg:px-24 mt-10">
          Plans for later
        </h1>

        <div className="flex flex-col lg:flex-row justify-center items-start gap-10 px-4 sm:px-6 lg:px-10 py-10">
          <div
            id="plan_image"
            className="rounded-3xl text-right w-full lg:flex-1 min-h-[420px] p-6 sm:p-10"
          >
            <h1 className="text-3xl sm:text-4xl font-bold max-w-xl ml-auto pt-4 sm:pt-14">
              Get your ride right with Uber Reserve
            </h1>
            <p className="pr-0 sm:pr-10 text-xl sm:text-2xl font-bold mt-10 sm:mt-14">
              Choose date and time
            </p>
            <div className="flex flex-col sm:flex-row justify-end mt-5 gap-4 sm:gap-10">
              <input
                type="date"
                className="bg-white border border-gray-300 px-4 py-2 rounded-md outline-none"
              />
              <input
                type="time"
                className="bg-white border border-gray-300 px-4 py-2 rounded-md outline-none"
              />
            </div>
          </div>

          <div className="border-gray-200 border-2 rounded-xl px-6 sm:px-10 py-5 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Benefits</h2>

            <div className="flex items-center gap-5 mb-5">
              <div className="text-2xl">
                <IoIosBriefcase />
              </div>
              <p className="text-base border-b-2 border-black pb-1">
                Choose your exact pickup time up to 90 days in advance.
              </p>
            </div>

            <div className="flex items-center gap-5 mb-5">
              <div className="text-2xl">
                <LuClock3 />
              </div>
              <p className="text-base border-b-2 border-black pb-1">
                Extra wait time included to meet your ride.
              </p>
            </div>

            <div className="flex items-center gap-5">
              <div className="text-2xl">
                <AiFillCreditCard />
              </div>
              <p className="text-base border-b-2 border-black pb-1">
                Cancel at no charge up to 60 minutes in advance.
              </p>
            </div>
          </div>
        </div>

        <section>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 px-4 sm:px-6 lg:px-20 my-16 sm:my-20">
            <div>
              <img
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_621,w_1104/v1683576635/assets/f7/7aa380-a378-47bf-8b88-aaba1587efdd/original/landing-stops-group-rides.png"
                alt=""
                className="w-full max-w-2xl h-auto rounded-2xl"
              />
            </div>
            <div className="w-full lg:max-w-xl">
              <h1 className="text-3xl sm:text-4xl font-bold max-w-96">
                Ride with friends seamlessly
              </h1>
              <p className="mt-5 w-full max-w-xl text-lg">
                Riding with friends just got easier: set up a group ride in the
                Uber app, invite your friends, and arrive at your destination.
                Friends who ride together save together.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Plans;
