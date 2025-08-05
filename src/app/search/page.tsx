export default function SearchPage() {
  return (
    <div className="flex gap-10 bg-[#fafafa] w-full p-10">
      <div className="flex bg-white rounded-2xl border-r-2 shadow-2xs border-gray-200 w-1/3 flex-col items-start gap-10 h-screen">
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
            data-lov-id="src/components/FilterSidebar.tsx:171:8"
            data-lov-name="Filter"
            data-component-path="src/components/FilterSidebar.tsx"
            data-component-line="171"
            data-component-file="FilterSidebar.tsx"
            data-component-name="Filter"
            data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-primary%22%7D"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 ml-2">Filters</h2>
        </div>
        <div className="flex flex-col items-start gap-4 w-full px-6">
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-auto"
              viewBox="0 0 256 256"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="none"
                strokeOpacity="1"
                strokeWidth="3"
                fill="currentColor"
                fillOpacity="1"
                className="w-5 h-auto text-yellow-300"
                d="M101.8,141.1H23.1c-7.2,0-13.1,5.9-13.1,13.1v78.7c0,7.3,5.9,13.1,13.1,13.1h78.7c7.2,0,13.1-5.9,13.1-13.1v-78.7C114.9,147,109,141.1,101.8,141.1z M101.8,226.3c0,3.6-2.9,6.5-6.6,6.5H29.7c-3.6,0-6.5-2.9-6.5-6.5v-65.6c0-3.6,2.9-6.6,6.5-6.6h65.6c3.6,0,6.6,2.9,6.6,6.6V226.3z M232.9,141.1h-78.7c-7.2,0-13.1,5.9-13.1,13.1v78.7c0,7.3,5.9,13.1,13.1,13.1h78.7c7.3,0,13.1-5.9,13.1-13.1v-78.7C246,147,240.1,141.1,232.9,141.1z M232.9,226.3c0,3.6-2.9,6.5-6.5,6.5h-65.6c-3.6,0-6.6-2.9-6.6-6.5v-65.6c0-3.6,2.9-6.6,6.6-6.6h65.6c3.6,0,6.5,2.9,6.5,6.6L232.9,226.3L232.9,226.3z M232.9,10h-78.7c-7.2,0-13.1,5.9-13.1,13.1v78.7c0,7.2,5.9,13.1,13.1,13.1h78.7c7.3,0,13.1-5.9,13.1-13.1V23.1C246,15.9,240.1,10,232.9,10z M232.9,95.2c0,3.6-2.9,6.6-6.5,6.6h-65.6c-3.6,0-6.6-2.9-6.6-6.6V29.7c0-3.6,2.9-6.5,6.6-6.5h65.6c3.6,0,6.5,2.9,6.5,6.5L232.9,95.2L232.9,95.2z M101.8,10H23.1C15.9,10,10,15.9,10,23.1v78.7c0,7.2,5.9,13.1,13.1,13.1h78.7c7.2,0,13.1-5.9,13.1-13.1V23.1C114.9,15.9,109,10,101.8,10z M101.8,95.2c0,3.6-2.9,6.6-6.6,6.6H29.7c-3.6,0-6.5-2.9-6.5-6.6V29.7c0-3.6,2.9-6.5,6.5-6.5h65.6c3.6,0,6.6,2.9,6.6,6.5V95.2z"
              ></path>
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
        <div className="flex flex-col items-start w-full px-6">
          <div className="flex justify-center items-center gap-4">
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

          <div></div>
        </div>
        <div className="flex flex-col items-start w-full px-6">
          <label className="text-gray-600 mb-2">Location</label>
          <input
            type="text"
            placeholder="Enter location"
            className="w-full p-2 border rounded-md"
          />
        </div>
        <hr className="w-10/12 border-gray-200" />
        <div className="flex flex-col items-start w-full px-6">
          <label className="text-gray-600 mb-2">Location</label>
          <input
            type="checkbox"
            placeholder="Enter location"
            className="w-full p-2 border rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col w-full bg-teal-300 items-center justify-center h-screen">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
