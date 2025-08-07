"use client";
import { Button } from "@/components/ui/button";
import Workshop from "@/../public/workshop-1.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const [Toggle, setToggle] = useState(false);
  const toggleFilters = () => {
    if (Toggle === false) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    setToggle((prev) => !prev);
  };
  const [Categories, setCategories] = useState([]);
  const [Events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [Loading, setLoading] = useState(true);
  const [Paid, setPaid] = useState("");
  const [Location, setLocation] = useState("");
  const search = useSearchParams();
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [Type, setType] = useState([""]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLocation(e.target.value);
  };
  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setType((prev) =>
      prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]
    );
    console.log("Selected Types:", Type);
  };
  const fetchCategories = async () => {
    const res = await fetch("/api/category");
    const data = await res.json();
    setCategories(data.Category || []);
  };
  const fetchEvent = async (query: string) => {
    const res = await fetch(
      `/api/event?search_query=${encodeURIComponent(query)}`
    );
    const data = await res.json();
    setEvents(data.Events || []);
    setLoading(false);
  };
  useEffect(() => {
    const searchQuery = search.get("search");
    if (searchQuery && searchQuery.trim() !== "") {
      fetchEvent(searchQuery);
    } else {
      fetchEvent("");
    }
    if (Categories.length === 0) {
      fetchCategories();
    }
  }, []);
  return (
    <div className={`flex gap-10 w-full bg-[#fafafa] md:p-10 p-5`}>
      <div
        className={`absolute inset-0 bg-black w-full h-full md:hidden block z-50 opacity-75 ${
          Toggle === false ? "hidden" : "block"
        }`}
      ></div>
      <div
        className={`flex bg-white md:rounded-2xl border-r-2 md:p-4 p-0 justify-between shadow-2xs border-gray-200 md:w-1/3 md:sticky absolute md:top-32 top-0 md:z-40 z-50 w-10/12 flex-col items-start md:gap-10 gap-2 md:h-full h-screen ${
          Toggle === false ? "left-[-86%]" : "left-0"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex items-center p-3 justify-between w-full">
          <div className="flex items-center gap-1">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="600px"
            width="600px"
            version="1.1"
            id="Capa_1"
            viewBox="0 0 460.775 460.775"
            className="text-black md:hidden block h-5 w-5 cursor-pointer"
            onClick={() => toggleFilters()}
          >
            <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" />
          </svg>
        </div>
        <div className="flex flex-col items-start gap-2 w-full px-6">
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
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-2 border rounded-md ml-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            <option value="All" className="text-gray-500">
              All Categories
            </option>
            {Categories.length > 0 &&
              Categories.map((category: { _id: number; name: string }) => (
                <option key={category._id} value={category.name}>
                  {category.name}
                </option>
              ))}
          </select>
        </div>
        <div className="flex flex-col items-start w-full gap-2 px-6">
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
          <input
            type="text"
            name="location"
            value={Location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City or Country"
            className="ml-3 border rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>
        <div className="flex flex-col items-start w-full gap-2 px-6">
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
                checked={selectedLocation === "All"}
                onChange={handleChange}
                className="accent-yellow-300"
              />
              <span className="text-sm font-medium">All events</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="location"
                value="Paid"
                checked={selectedLocation === "Paid"}
                onChange={handleChange}
                className="accent-yellow-300"
              />
              <span className="text-sm font-medium">Paid only</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="location"
                checked={selectedLocation === "Free"}
                onChange={handleChange}
                value="Free"
                className="accent-yellow-300"
              />
              <span className="text-sm font-medium">Free Only</span>
            </label>
          </div>
        </div>
        <div className="flex flex-col items-start w-full gap-2 px-6">
          <h2 className="text-xl font-semibold">Event Type</h2>
          <div className="flex flex-col gap-2 px-6">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-yellow-300"
                value="Hackathon"
                onChange={handleTypeChange}
              />
              <span className="text-sm font-medium">🏆 Hackathon</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-yellow-300"
                value="Workshop"
                onChange={handleTypeChange}
              />
              <span className="text-sm font-medium">🛠️ Workshop</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-yellow-300"
                value="Bootcamp"
                onChange={handleTypeChange}
              />
              <span className="text-sm font-medium">🎓 Bootcamp</span>
            </div>
          </div>
        </div>
        <Button
          className="rounded-2xl w-full mb-3"
          disabled={Events.length === 0}
        >
          Apply Filters
        </Button>
      </div>
      <div className="flex flex-col w-full h-full">
        <div className="flex justify-between items-center">
          <div>
            {" "}
            <h1 className="text-2xl font-bold">Search Results</h1>
            <p className="text-gray-600">
              {Events.length === 0
                ? "No events found"
                : `${Events.length} events found`}
            </p>
          </div>
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
            className="text-yellow-300 bg-amber-100 md:hidden block rounded-full p-2 h-auto w-10 cursor-pointer"
            onClick={() => toggleFilters()}
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
        </div>
        {Loading ? (
          // Loader animation
          <div className="flex items-center justify-center h-96 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-20 animate-spin"
              viewBox="0 0 200 200"
            >
              <radialGradient
                id="a8"
                cx=".66"
                fx=".66"
                cy=".3125"
                fy=".3125"
                gradientTransform="scale(1.5)"
              >
                <stop offset="0" stopColor="#f9c623" />
                <stop offset=".3" stopColor="#f9c623" stopOpacity=".9" />
                <stop offset=".6" stopColor="#f9c623" stopOpacity=".6" />
                <stop offset=".8" stopColor="#f9c623" stopOpacity=".3" />
                <stop offset="1" stopColor="#f9c623" stopOpacity="0" />
              </radialGradient>
              <circle
                transformOrigin="center"
                fill="none"
                stroke="url(#a8)"
                strokeWidth="15"
                strokeLinecap="round"
                strokeDasharray="200 1000"
                strokeDashoffset="0"
                cx="100"
                cy="100"
                r="70"
              >
                <animateTransform
                  type="rotate"
                  attributeName="transform"
                  calcMode="spline"
                  dur="2"
                  values="360;0"
                  keyTimes="0;1"
                  keySplines="0 0 1 1"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                transformOrigin="center"
                fill="none"
                opacity=".2"
                stroke="#f9c623"
                strokeWidth="15"
                strokeLinecap="round"
                cx="100"
                cy="100"
                r="70"
              />
            </svg>
          </div>
        ) : (
          // Events grid
          <>
            {Events.length === 0 && Loading ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">
                  No events found for this search.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {Events.map((event: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl max-h-[460px] flex flex-col justify-between space-y-4 border border-gray-200 p-4"
                  >
                    <div className="relative">
                      <div className="absolute top-2 left-2 bg-gray-700 opacity-70 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        {event.type}
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
                    <h2 className="text-xl font-semibold">{event.title}</h2>
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
                          {event.place}
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
                          <rect
                            width="18"
                            height="18"
                            x="3"
                            y="4"
                            rx="2"
                          ></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                        <p className="text-sm text-gray-500 font-medium">
                          {event.date}
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
                          className="text-gray-500 w-5 h-5"
                        >
                          <line x1="12" x2="12" y1="2" y2="22"></line>
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                        <p className="text-sm text-black font-medium">
                          {event.price === 0 ? "Free" : `$${event.price}`}
                        </p>
                      </div>
                    </div>
                    <Button className="rounded-xl w-full">View Details</Button>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
