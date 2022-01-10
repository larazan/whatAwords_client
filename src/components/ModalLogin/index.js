import React, { useRef } from "react";
import {
  Link,
} from "react-router-dom";

const ModalLogin = ({ showModalLogin, setShowModalLogin }) => {
  const modalRef = useRef();

  const closeModalLogin = (e) => {
    if (modalRef.current === e.target) {
      setShowModalLogin(false);
    }
  };

  return (
    <>
      {showModalLogin ? (
        <div
          className="main-modal fixed w-full h-full inset-0 z-20 flex justify-center content-center animated2 fadeIn2 faster2 overflow-y-auto"
          style={{ background: `rgba(12,15,19,.9)` }}
          ref={modalRef}
          onClick={closeModalLogin}
        >
          <div className="fixed px-2 py-2 top-3 left-2">
            <button
              className="h-8 w-8"
              onClick={() => setShowModalLogin((prev) => !prev)}
            >
              <svg
                className="h-8 w-8 text-white font-bold"
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

          <div className="absolute mt-16 lg:mt-28 border border-teal-500 modal-container bg-white w-4/6 md:w-6/12 lg:w-6/8 rounded shadow-lg outline-none">
            <div className="w-full flex flex-col items-center bg-white py-12 md:py-12 px-4">
              <h3 className="mb-4 font-bold text-xl md:text-3xl flex items-center text-blue-500">
                Login
              </h3>
              {/* <p className="items-center text-sm font-thin ">Sign up to like and collect thousands of free quotes</p> */}
              
              <form
                action="#"
                className="px-3 py-6 flex flex-col justify-center items-center w-full gap-3"
              >
                <input
                  type="email"
                  placeholder="email.."
                  className="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-sm md:text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="password"
                  placeholder="password.."
                  className="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-sm md:text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                />
                <button
                type="submit"
                className="w-full mt-4 px-4 py-2 md:py-3 text-base md:text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Log in
              </button>
                {/* <span className="text-xs font-thin">By joining, you agree to our <Link to="/terms"> <span className="text-green-500 hover:text-green-600">Terms of Service</span></Link> and <Link to="/policy"><span className="text-green-500 hover:text-green-600">Privacy Policy</span></Link></span> */}
              </form>
              <p className="text-gray-700 text-xs md:text-sm mt-2">
                Don't have an account? &nbsp; 
                <a
                  href="#"
                  className="text-green-500 hover:text-green-600 mt-3 focus:outline-none font-bold underline"
                >
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalLogin;
