import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-[#fbfaf2] md:p-30 p-16 flex justify-center items-center flex-col gap-8">
      <h1 className="md:text-7xl text-center text-4xl font-bold">
        Find your next <br />
        <span className="text-yellow-300">growth opportunity</span>
      </h1>
      <p className="text-[#737373] text-xl md:w-2xl w-sm text-center">
        Discover hackathons, bootcamps, and workshops that will accelerate your
        learning journey
      </p>
      <Link href="/search">
        <Button
          variant="default"
          className="rounded-md md:text-xl text-sm p-4 flex items-center"
        >
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
            className="h-5 w-5 text-black"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          Explore Events
        </Button>
      </Link>
    </div>
  );
}
