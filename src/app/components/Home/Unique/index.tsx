export default function Unique() {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-10">
      <div className="flex flex-col justify-center items-center gap-4 p-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="text-yellow-300 bg-yellow-50 rounded-full p-4 w-18 h-18"
        >
          <path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z" />
        </svg>
        <h2 className="text-2xl font-bold">Find Events</h2>
        <p className="text-[#737373] text-xl text-center">
          Discover upcoming hackathons, bootcamps, and workshops in your area or
          online.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 p-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          className="text-yellow-300 bg-yellow-50 rounded-full p-4 w-18 h-18"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
        <h2 className="text-2xl font-bold">Connect</h2>
        <p className="text-[#737373] text-xl text-center">
          Meet fellow developers, designers, and entrepreneurs who share your
          passion.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 p-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          className="text-yellow-300 bg-yellow-50 rounded-full p-4 w-18 h-18"
        >
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
        </svg>
        <h2 className="text-2xl font-bold">Level Up</h2>
        <p className="text-[#737373] text-xl text-center">
          Gain new skills, build projects, and advance your career through
          hands-on learning.
        </p>
      </div>
    </div>
  );
}
