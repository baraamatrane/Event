"use client";
import Image from "next/image";
import Workshopimg from "@/../public/bootcamp2.jpg";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function EventPage() {
  // Get the event ID from the URL
  const params = useParams();
  const id: any = params.id;
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id || !/^[0-9a-fA-F]{24}$/.test(id)) {
      setError("Invalid Event ID");
      setLoading(false);
      return;
    }
    const fetchEvent = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/event/${id}`
        );
        if (!res.ok) {
          setError("Event Not Found");
          setLoading(false);
          return;
        }
        const data = await res.json();
        setEvent(data.event || data); // adjust according to your API response
      } catch (err) {
        setError("Failed to fetch event");
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
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
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">{error}</h1>
        <p className="text-gray-600">
          {error === "Invalid Event ID"
            ? "Please provide a valid event ID."
            : "404"}
        </p>
      </div>
    );
  }

  // Fallback image if event.image is not present
  const eventImage = Workshopimg;

  return (
    <div className="w-full h-full bg-[#fafafa]">
      <div className="flex flex-col items-center justify-center p-6 m-auto md:max-w-4xl">
        <div className="flex md:flex-row flex-col w-full gap-10">
          <div className="md:w-1/3 w-full space-y-4">
            <Image
              src={eventImage}
              alt="Event Image"
              width={500}
              height={300}
              className="w-full h-auto"
            />
            <div>
              <span className="text-lg font-semibold">Hosted by:</span>
              <p className="text-gray-700">{event?.host || "Unknown"}</p>
            </div>
            <div>
              <span className="text-lg font-semibold">Price:</span>
              <p className="text-gray-700">
                {event?.price !== undefined ? `$${event.price}` : "Free"}
              </p>
            </div>
          </div>
          <div className="md:w-2/3 w-full space-y-4">
            <h1 className="text-5xl font-bold">
              {event?.title || "Event Title"}
            </h1>
            <div className="flex items-center gap-3">
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
                className="tabler-icon tabler-icon-calendar w-7 h-7"
              >
                <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
                <path d="M16 3v4"></path>
                <path d="M8 3v4"></path>
                <path d="M4 11h16"></path>
                <path d="M11 15h1"></path>
                <path d="M12 15v3"></path>
              </svg>
              <span className="text-lg">
                {event?.date
                  ? new Date(event.date).toLocaleDateString()
                  : "Date TBA"}
              </span>
            </div>
            <div className="flex items-center gap-3">
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
                className="tabler-icon tabler-icon-map-pin w-7 h-7"
              >
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
              </svg>
              <span className="text-lg">{event?.place || "Location TBA"}</span>
            </div>
            <div>
              <span className="text-lg font-semibold">Description:</span>
              <p className="text-gray-700">
                {event?.description ||
                  "Join us for an exciting event! Details coming soon."}
              </p>
            </div>
          </div>
        </div>
        <Button variant="default" className="mt-4">
          Register Now
        </Button>
      </div>
      {/* Related Events section can be implemented similarly */}
    </div>
  );
}
