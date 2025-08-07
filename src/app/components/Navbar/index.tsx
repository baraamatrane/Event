"use client";
import Image from "next/image";
import Logo from "@/../public/logo.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
export default function Navbar() {
  const [Search, setSearch] = useState("");
  return (
    <div className="bg-white w-full shadow-2xs md:p-5 p-3 sticky top-0 z-50 flex md:justify-around justify-between items-center">
      <Link href="/" className="flex items-center cursor-pointer">
        <Image
          width={70}
          height={70}
          src={Logo}
          alt="logo"
          className="md:w-18 h-auto w-12"
        />
        <h1 className="font-semibold md:text-4xl text-2xl">Circles</h1>
      </Link>
      <div className="flex items-center space-x-6">
        <div className="flex justify-between items-center w-auto border border-gray-400 rounded-full">
          <div className="md:flex hidden justify-start items-center w-fit flex-1 p-2">
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
              className="h-5 w-5 text-gray-400"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              type="text"
              value={Search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search event or locations..."
              className="focus:outline-none flex-1 px-2"
            />
          </div>
          <Button
            onClick={() => {
              if (Search.trim() !== "") {
                window.location.href = `/search?search=${encodeURIComponent(
                  Search
                )}`;
              }
            }}
            variant="default"
            className="md:block hidden "
          >
            Search
          </Button>
        </div>
        <div className="md:space-x-2 space-x-0 flex items-center">
          <Button variant="ghost"> Sign in</Button>
          <Button> Sign up</Button>
        </div>
      </div>
    </div>
  );
}
