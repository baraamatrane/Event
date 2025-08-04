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
        <div className="flex flex-col items-start w-full px-6">
          <label className="text-gray-600 mb-2">Category</label>
          <select className="w-full p-2 border rounded-md">
            <option value="">All Categories</option>
            <option value="music">Music</option>
            <option value="art">Art</option>
            <option value="technology">Technology</option>
          </select>
        </div>
        <div className="flex flex-col items-start w-full px-6">
          <button className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Apply Filters
          </button>
          <label className="text-gray-600 mb-2">Location</label>
        </div>
      </div>
      <div className="flex flex-col w-full bg-teal-300 items-center justify-center h-screen">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
