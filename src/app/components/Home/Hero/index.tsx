import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="bg-[#fbfaf2] md:h-[700px] h-[520px] flex justify-center items-center flex-col gap-6">
      <h1 className="md:text-7xl text-center text-4xl font-bold">
        Find your next <br />
        <span className="text-yellow-300">growth opportunity</span>
      </h1>
      <p className="text-[#737373] text-xl md:w-2xl w-sm text-center">
        Discover hackathons, bootcamps, and workshops that will accelerate your
        learning journey
      </p>
      <Button variant="default" className="rounded-md md:text-xl text-sm p-4">
        Explore Events
      </Button>
    </div>
  );
}
