import { eventData } from "@/Contantes";
import Image from "next/image";
export default function Event() {
  return (
    <div className="bg-[#fbfaf2] md:p-14 h-[700px] p-6 flex items-center flex-col gap-8 mt-10">
      <h1 className="md:text-4xl text-4xl font-bold">Featured Events</h1>
      <p className="text-[#737373] text-xl md:w-2xl w-sm text-center">
        Hand-picked opportunities to accelerate your growth
      </p>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-20 grid-cols-1 justify-center items-center">
        {eventData.map((event, index) => (
          <div
            key={index}
            className="rounded-2xl hover:shadow-2xl group transition-shadow relative flex items-start justify-start flex-col overflow-hidden"
          >
            <Image
              src={event.image}
              alt={event.title}
              width={200}
              height={100}
              className="w-full h-auto rounded-t-2xl bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
            />
            <div className="flex bg-white flex-col p-4 px-6 gap-4 rounded-b-2xl h-48">
              <div>
                <h3 className="text-lg font-bold">{event.title}</h3>
                <p className="text-[#737373] text-sm">{event.description}</p>
              </div>

              <div className="space-y-1">
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
                    className="text-[#737373] w-4 h-4"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <p className="text-[#737373] text-sm">Remote </p>
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
                    className="text-[#737373] w-4 h-4"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <p className="text-[#737373] text-sm">{event.location}</p>
                </div>
                <p className="text-yellow-300">{event.price}</p>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-yellow-300 rounded-full p-0.5 px-2">
              {event.location === "Online" ? "Online" : "In-person"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
