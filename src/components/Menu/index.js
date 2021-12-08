import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ catOpen, catToggle }) => {
  return (
    <>
      <aside
        className={`px-0 transform top-0 left-0 w-full bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          catOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <header className="z-10 sticky top-0 px-5 py-3 flex items-center justify-between bg-white border-b">
          <div className="flex inline-flex space-x-4">
            <button className="h-8 w-8 md:hidden" onClick={catToggle}>
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <Link to="/">
            <div className="flex">
              {/* <img
                className="h-9"
                src="https://cdn.allbirds.com/image/upload/v1571355713/icons/allbirds-logo.svg"
                alt="Allbirds"
              /> */}
            </div>
          </Link>
          <div className="flex inline-flex space-x-4">
          <button
              className="h-8 w-8"
              
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 md:h-6 md:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        </header>
        <div>
          <div className="flex-none">
            <div className="">
              <div className="">
                <Link to="/" onClick={catToggle}>
                  <div className="flex justify-between px-8 py-4 border-b">
                    <div className="flex">
                      <div
                        className="block text-sm font-semibold text-gray-800 uppercase whitespace-nowrap "
                      >
                        Discover Words
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/authors" onClick={catToggle}>
                  <div className="flex justify-between px-8 py-4 border-b">
                    <div className="flex">
                      <div
                        className="block text-sm font-semibold text-gray-800 uppercase whitespace-nowrap "
                      >
                        Authors
                      </div>
                    </div>
                  </div>
                </Link>
                <a
                  href="#"
                  className="block text-sm font-semibold text-gray-800 uppercase whitespace-nowrap px-8 py-4 border-b"
                >
                  Popular Searches
                </a>
                <Link to="/blogs" onClick={catToggle}>
                  <div className="flex justify-between px-8 py-4 border-b">
                    <div className="flex">
                      <div
                        className="block text-sm font-semibold text-gray-800 uppercase whitespace-nowrap "
                      >
                        Blog
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/faq" onClick={catToggle}>
                  <div className="flex justify-between px-8 py-4 border-b">
                    <div className="flex">
                      <div
                        className="block text-sm font-semibold text-gray-800 uppercase whitespace-nowrap "
                      >
                        FAQ
                      </div>
                    </div>
                  </div>
                </Link>
                
                <a
                  href="#"
                  className="block text-sm font-light whitespace-nowrap px-8 py-4 border-b"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block text-sm font-light whitespace-nowrap px-8 py-4 border-b"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="block text-sm font-light whitespace-nowrap px-8 py-4 border-b"
                >
                  Help
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Menu;
