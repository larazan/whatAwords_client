import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/user_actions";
import { getCategories } from "../../actions/category_actions";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";


import SearchBox from "../SearchBox";
import ModalLogin from "../ModalLogin";
import Menu from "../Menu";
import NewsReel from "../NewsReel";

import imgLogo from "../../assets/Fraspi-preview.png";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [showDrop, setShowDrop] = useState(false);
  const [showCatDrop, setShowCatDrop] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [userName, setUserName] = useState("ratri");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const categoriesList = useSelector((state) => state.categoriesList);
  const { loading, error, categories } = categoriesList;

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const openDrop = () => {
    console.log("open drop");
    setShowDrop((prev) => !prev);
  };

  const ref = useRef();
  useOnClickOutside(ref, () => setShowCatDrop(false));

  const openCatDrop = () => {
    console.log("open drop");
    setShowCatDrop((prev) => !prev);
  };

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
    setCatOpen(!catOpen);
  };

  return (
    <>
      <NewsReel />
      <header className="navbar z-10 sticky top-0 px-5 py-3 flex items-center justify-between shadow2 border-b2" id="header">
        {/* <div className="absolute inset-0 shadow-lg opacity-50"></div> */}
        <div className="flex inline-flex space-x-4">
          <button className="h-8 w-8 md:hidden text-white" onClick={catToggle}>
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
                  <img className="h-12" src={logo} alt="Allbirds" />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <SearchBox position={"navbar"} />
        <div className="flex inline-flex space-x-8">
          <div className="flex items-center hidden md:flex">
            <button onClick={openCatDrop}>
              <span className="text-sm font-semibold text-white uppercase ">
                Explore
              </span>
            </button>
            <div
              ref={ref}
                className={`sm:w-44 md:w-44 ${
                  showCatDrop === false ? "hidden" : ""
                } top-14 md:top-13 right-40 absolute font-normal bg-white shadow-md rounded border`}
              >
                <div className="py-0">
                  <ul className="flex-col font-semilight items-center justify-center text-sm">
                  {categories.map((category, index) => (
                    <Link to={`/cat/${category.slug}`} onClick={openCatDrop}>
                      <li className="sm:py-1 md:py-2 px-3 pl-6 hover:bg-gray-200 text-md font-semibold capitalize" key={index}>
                        <span>{category.name}</span>
                      </li>
                    </Link>
                  ))}
                  </ul>
                </div>
              </div>
          </div>
          <div className="flex items-center hidden md:flex">
            <Link to="/authors">
              <span className="text-sm font-semibold text-white uppercase ">
                Authors
              </span>
            </Link>
          </div>

          {/* <button className="pr-4 hidden md:flex text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button> */}
          
          {/* <div className="flex items-center hidden md:flex">
            
              <span className="text-sm font-semibold text-gray-800 uppercase ">
                Categories
              </span>
           
          </div> */}
          
          {userInfo ? (
            <>
              <button onClick={openDrop}>
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
              </button>
              <div
                className={`sm:w-60 md:w-64 ${
                  showDrop === false ? "hidden" : ""
                } top-14 md:top-16 right-1 absolute font-normal bg-white shadow-md rounded-sm overflow-hidden border`}
              >
                <div className="py-2">
                  <ul className="flex-col font-sans items-center justify-center text-sm">
                    <Link to={`/${userName}`}>
                      <li className="sm:py-1 md:py-2 px-6 hover:bg-gray-200">
                        <span>Your Profile</span>
                      </li>
                    </Link>
                    <Link to={`/${userName}`}>
                      <li className="sm:py-1 md:py-2 px-6 hover:bg-gray-200">
                        <span>Your Collections</span>
                      </li>
                    </Link>
                    <Link to={`/${userName}`}>
                      <li className="sm:py-1 md:py-2 px-6 hover:bg-gray-200">
                        <span>Settings</span>
                      </li>
                    </Link>
                    <Link to={`/${userName}`}>
                      <li className="sm:py-1 md:py-2 px-6 hover:bg-gray-200">
                        <span>Change Language</span>
                      </li>
                    </Link>
                    <Link to="" onClick={logoutHandler}>
                      <li className="sm:py-1 md:py-2 px-6 hover:bg-gray-200">
                        <span>Logout</span>
                      </li>
                    </Link>
                  </ul>
                </div>
                <hr></hr>
                <div className="py-2">
                  <ul className="flex-col font-sans items-center justify-center text-sm">
                    <Link to="">
                      <li className="sm:py-1 md:py-2 px-6 hover:bg-gray-200">
                        <span>Image & Video API</span>
                      </li>
                    </Link>
                    <Link to="">
                      <li className="sm:py-1 md:py-2 px-6 hover:bg-gray-200">
                        <span>Apps & Plugins</span>
                      </li>
                    </Link>
                    <Link to="/faq" onClick={openDrop}>
                      <li className="sm:py-1 md:py-2 px-6 hover:bg-gray-200">
                        <span>FAQ</span>
                      </li>
                    </Link>
                    <Link to="">
                      <li className="sm:py-1 md:py-2 px-6 hover:bg-gray-200">
                        <span>Partnerships</span>
                      </li>
                    </Link>
                    <Link to="">
                      <li className="sm:py-1 md:py-2 px-6 hover:bg-gray-200">
                        <span>Imprint & Terms</span>
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="">
                    <div className="items-center min-w-full">
                      <div className="">
                        <ul className="flex justify-between">
                          <Link to="" className="w-1/4 h-10 md:h-14 hover:bg-blue-300 flex items-center justify-center">
                            <span className="">
                              <img className="h-6 w-6 md:h-8 md:w-8" src="https://img.icons8.com/ios-filled/50/000000/facebook.png" />
                            </span>
                          </Link>
                          <Link to="" className="w-1/4 h-10 md:h-14 hover:bg-green-300 flex items-center justify-center">
                            <span className="h-6 w-6 md:h-7 md:w-7">
                              <img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" />
                            </span>
                          </Link>
                          <Link to="" className="w-1/4 h-10 md:h-14 hover:bg-orange-300 flex items-center justify-center">
                            <span className="h-6 w-6 md:h-7 md:w-7">
                              <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" />
                            </span>
                          </Link>
                          <Link to="" className="w-1/4 h-10 md:h-14 hover:bg-red-300 flex items-center justify-center">
                            <span className="h-7 w-7 md:h-8 md:w-8">
                              <img src="https://img.icons8.com/ios-filled/50/000000/youtube-play.png" />
                            </span>
                          </Link>
                        </ul>
                      </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <button className="pr-4 hidden md:flex text-white" onClick={openModal}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
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
