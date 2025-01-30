import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64 bg-[#dfdbe5]">
      <div className="w-full h-16 md:h-20 flex items-center justify-between ">
        <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
          {/* <Image src="logo.jpg" alt="Logo" w={64} h={64} /> */}
          <img src="../../public/logo.jpg" alt="Logo" className="h-16 w-16" />
          <span>DevUp</span>
        </Link>
        <div className="md:hidden">
          <div
            className="cursor-pointer text-4xl"
            onClick={() => setOpen((prev) => !prev)}
          >
            {/* {open ? "X" : "☰"} */}
            <div className="flex flex-col gap-[5.4px]">
              <div
                className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${
                  open && "rotate-45"
                }`}
              ></div>
              <div
                className={`h-[3px] rounded-md w-6 bg-black transition-all ease-in-out ${
                  open && "opacity-0"
                }`}
              ></div>
              <div
                className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${
                  open && "-rotate-45"
                }`}
              ></div>
            </div>
          </div>
          <div
            className={`w-full h-screen bg-[#dfdbe5] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out z-50
             ${open ? "-right-0" : "-right-[100%]"}
          `}
          >
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/posts?sort=trending" onClick={() => setOpen(false)}>
              Trending
            </Link>
            <Link to="/posts?sort=popular" onClick={() => setOpen(false)}>
              Most Popular
            </Link>
            <Link to="/" onClick={() => setOpen(false)}>
              About
            </Link>
            <SignedOut>
              <Link to="/login">
                <button className="py-2 px-4 rounded-3xl bg-violet-900 text-white">
                  Login 👋
                </button>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
          <Link to="/">Home</Link>
          <Link to="/posts?sort=trending">Trending</Link>
          <Link to="/posts?sort=popular">Most Popular</Link>
          <Link to="/">About</Link>
          <SignedOut>
            <Link to="/login">
              <button className="py-2 px-4 rounded-3xl bg-violet-900 text-white">
                Login 👋
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
