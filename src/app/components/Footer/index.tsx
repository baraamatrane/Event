import Image from "next/image";
import Logo from "@/../public/logo.png";

export default function Footer() {
  return (
    <div className="bg-[#333333] p-10 w-full space-y-4">
      <div className="flex justify-around gap-10">
        <div className="space-y-6 w-1/3">
          <div className="flex items-center">
            <Image
              width={70}
              height={70}
              src={Logo}
              alt="logo"
              className="md:w-18 h-auto w-12"
            />
            <h1 className="font-semibold text-white md:text-4xl text-2xl">
              Circles
            </h1>
          </div>
          <p className="text-gray-400">
            Your gateway to growth opportunities. Discover events that will
            accelerate your learning journey and connect you with like-minded
            individuals.
          </p>
        </div>
        <div className="space-y-6 w-auto">
          <h2 className="font-semibold text-white md:text-3xl text-xl w-auto">
            Quick Links
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-6 w-1/3">
          <h2 className="font-semibold text-white md:text-3xl text-xl">
            Stay Connected
          </h2>
          <p className="text-gray-400">
            Follow us on our social media channels to stay updated on the latest
            news and events.
          </p>
        </div>
      </div>
      <hr className="border-gray-600" />
      <div className="text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Circles. All rights reserved.</p>
        <p>
          Made with 💛 by{" "}
          <a
            href="https://github.com/baraamatrane"
            className="text-yellow-300 hover:underline"
          >
            Barae Matarane
          </a>
        </p>
      </div>
    </div>
  );
}
