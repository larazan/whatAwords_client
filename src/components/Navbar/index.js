import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/user_actions";

import SearchBox from "../SearchBox";
import ModalLogin from "../ModalLogin";
import Menu from "../Menu";
import NewsReel from "../NewsReel";

import imgLogo from "../../assets/Fraspi-preview.png";

const Navbar = () => {
  const [catOpen, setCatOpen] = useState(false)
  const [userName, setUserName] = useState('ratri');
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // if (userInfo) {
  //   setUserName(userInfo.user.name);
  // }
  
  const logoutHandler = () => {
    dispatch(logout());
  };

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    console.log("modal open!");
    setShowModal((prev) => !prev);
  };

  const catToggle = () => {
    setCatOpen(!catOpen)
}


  return (
    <>
      <NewsReel />
      <header className="z-10 sticky top-0 px-5 py-3 flex items-center justify-between bg-white shadow border-b">
        {/* <div className="absolute inset-0 shadow-lg opacity-50"></div> */}
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
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex items-center hidden md:flex">
            <Link to="/">
              <div className="text-sm font-semibold text-gray-800 uppercase font-semibold">
                <div>
                  <img className="h-12" src={imgLogo} alt="Allbirds" />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <SearchBox position={'navbar'} />
        <div className="flex inline-flex space-x-8">
          <div className="flex items-center hidden md:flex">
            <Link to="/">
              <span className="text-sm font-semibold text-gray-800 uppercase ">
                Browse Words
              </span>
            </Link>
          </div>
          <div className="flex items-center hidden md:flex">
            <Link to="/authors">
              <span className="text-sm font-semibold text-gray-800 uppercase ">
                Authors
              </span>
            </Link>
          </div>
          {userInfo ? (
            <div className="flex items-center hidden md:flex cursor-pointer" onClick={logoutHandler}>
                <span className="text-sm font-semibold text-gray-800 uppercase">
                  Logout
                </span>
            </div>
          ) : (
            <div className="flex items-center hidden md:flex">
              <Link to="/login">
                <span className="text-sm font-semibold text-gray-800 uppercase">
                  Sign in
                </span>
              </Link>
            </div>
          )}
          
          <button className="h-8 w-8 hidden md:flex items-center">
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
            </svg>
          </button>
          {userInfo ? (
            <Link to={`/${userName}`}>
              <div className="h-8 w-8 items-center">
                <svg
                  className="h-8 w-8 md:h-6 md:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </Link>
          ) : (
            <button
              className="h-8 w-8 items-center"
              onClick={openModal}
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
          )}
          
        </div>
      </header>
      
      <Menu catOpen={catOpen} catToggle={catToggle} />
      <ModalLogin showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Navbar;
