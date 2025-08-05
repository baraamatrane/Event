import { Button } from "@/components/ui/button";
import Workshop from "@/../public/workshop-1.jpg";
import Image from "next/image";

export default function SearchPage() {
  return (
    <div className="flex gap-10 bg-[#fafafa] w-full p-10">
      <div className="flex bg-white rounded-2xl border-r-2 p-4 justify-between shadow-2xs border-gray-200 w-1/3 flex-col items-start gap-5 h-screen">
        <div className="flex items-center p-6 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-filter text-yellow-300 h-5 w-5"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 ml-2">Filters</h2>
        </div>
        <div className="flex flex-col items-start gap-4 w-full px-6">
          <div className="flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-auto text-yellow-300"
              viewBox="0 0 256 256"
              fill="currentColor"
            >
              <path d="M101.8,141.1H23.1c-7.2,0-13.1,5.9-13.1,13.1v78.7c0,7.3,5.9,13.1,13.1,13.1h78.7c7.2,0,13.1-5.9,13.1-13.1v-78.7C114.9,147,109,141.1,101.8,141.1z M101.8,226.3c0,3.6-2.9,6.5-6.6,6.5H29.7c-3.6,0-6.5-2.9-6.5-6.5v-65.6c0-3.6,2.9-6.6,6.5-6.6h65.6c3.6,0,6.6,2.9,6.6,6.6V226.3z M232.9,141.1h-78.7c-7.2,0-13.1,5.9-13.1,13.1v78.7c0,7.3,5.9,13.1,13.1,13.1h78.7c7.3,0,13.1-5.9,13.1-13.1v-78.7C246,147,240.1,141.1,232.9,141.1z M232.9,226.3c0,3.6-2.9,6.5-6.5,6.5h-65.6c-3.6,0-6.6-2.9-6.6-6.5v-65.6c0-3.6,2.9-6.6,6.6-6.6h65.6c3.6,0,6.5,2.9,6.5,6.6L232.9,226.3L232.9,226.3z M232.9,10h-78.7c-7.2,0-13.1,5.9-13.1,13.1v78.7c0,7.2,5.9,13.1,13.1,13.1h78.7c7.3,0,13.1-5.9,13.1-13.1V23.1C246,15.9,240.1,10,232.9,10z M232.9,95.2c0,3.6-2.9,6.6-6.5,6.6h-65.6c-3.6,0-6.6-2.9-6.6-6.6V29.7c0-3.6,2.9-6.5,6.6-6.5h65.6c3.6,0,6.5,2.9,6.5,6.5L232.9,95.2L232.9,95.2z M101.8,10H23.1C15.9,10,10,15.9,10,23.1v78.7c0,7.2,5.9,13.1,13.1,13.1h78.7c7.2,0,13.1-5.9,13.1-13.1V23.1C114.9,15.9,109,10,101.8,10z M101.8,95.2c0,3.6-2.9,6.6-6.6,6.6H29.7c-3.6,0-6.5-2.9-6.5-6.6V29.7c0-3.6,2.9-6.5,6.5-6.5h65.6c3.6,0,6.6,2.9,6.6,6.5V95.2z" />
            </svg>
            <label className="text-gray-600">Category</label>
          </div>
          <select className="w-full p-2 border rounded-md">
            <option value="">All Categories</option>
            <option value="music">Music</option>
            <option value="art">Art</option>
            <option value="technology">Technology</option>
          </select>
        </div>
        <div className="flex flex-col items-start w-full gap-4 px-6">
          <div className="flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-yellow-300 w-5 h-5"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <label className="text-gray-600">Location</label>
          </div>
          <div className="flex flex-col gap-2 px-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="location"
                value="both"
                className="accent-yellow-300"
              />
              <span className="text-sm font-medium">All events</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="location"
                value="online"
                className="accent-yellow-300"
                defaultChecked
              />
              <span className="text-sm font-medium">Online</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="location"
                value="on-site"
                className="accent-yellow-300"
              />
              <span className="text-sm font-medium">On-site</span>
            </label>
          </div>
        </div>
        <div className="flex flex-col items-start w-full gap-4 px-6">
          <div className="flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-yellow-300 w-5 h-5"
            >
              <line x1="12" x2="12" y1="2" y2="22"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            <label className="text-gray-600">Price</label>
          </div>
          <div className="flex flex-col gap-2 px-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="location"
                value="All"
                className="accent-yellow-300"
              />
              <span className="text-sm font-medium">All events</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="location"
                value="Paid"
                className="accent-yellow-300"
                defaultChecked
              />
              <span className="text-sm font-medium">Paid only</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="location"
                value="Free"
                className="accent-yellow-300"
              />
              <span className="text-sm font-medium">Free Only</span>
            </label>
          </div>
          <div className="flex flex-col items-start w-full gap-4">
            <h2 className="text-xl font-semibold">Event Type</h2>
            <div className="flex flex-col gap-2 px-6">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-yellow-300" />
                <span className="text-sm font-medium">🏆 Hackathon</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-yellow-300" />
                <span className="text-sm font-medium">🛠️ Workshop</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-yellow-300" />
                <span className="text-sm font-medium">🎓 Bootcamp</span>
              </div>
            </div>
          </div>
        </div>
        <Button className="rounded-2xl w-full">Apply Filters</Button>
      </div>
      <div className="flex flex-col w-full h-screen">
        <div>
          <h1 className="text-2xl font-bold">Search Results</h1>
          <p className="text-gray-600">6 events found</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl max-h-[460px] space-y-4 border border-gray-200 p-4"
            >
              <div className="relative">
                <div className="absolute top-2 left-2 bg-gray-700 opacity-70 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Workshop
                </div>
                <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full">
                  Online
                </div>
                <Image
                  src={Workshop}
                  alt="Workshop"
                  width={300}
                  height={200}
                  className="rounded-2xl"
                />
              </div>
              <h2 className="text-xl font-semibold">
                React Advanced Workshoh2: Building Scalable Applications
              </h2>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-500 w-5 h-5"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <p className="text-sm text-gray-500 font-medium">
                    San Francisco, CA
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-calendar text-gray-500 h-5 w-5"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <p className="text-sm text-gray-500 font-medium">Dec 20-21</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-500 w-5 h-5"
                  >
                    <line x1="12" x2="12" y1="2" y2="22"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                  <p className="text-sm text-black font-medium">Free</p>
                </div>
              </div>
              <Button className="rounded-xl w-full">View Details</Button>
            </div>
          ))}
        </div>
        <div> </div>
      </div>
    </div>
  );
}
