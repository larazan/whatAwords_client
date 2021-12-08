import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../actions/user_actions";
import Avatar from "react-avatar";

const DashboardHead = ({ slug }) => {
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.userDetail);
  const {
    loading,
    error,
    user,
    userId,
    quoteTot,
    followingTot,
    followerTot,
    collectTot,
  } = userDetail;

  useEffect(() => {
    dispatch(getUserInfo(slug));
  }, [dispatch, slug]);

  console.log(user);

  const location = useLocation().pathname;
  const getLastPath = () => {
    const path = location.split("/");
    console.log(path[path.length - 1]);
    return path[path.length - 1];
  };

  return (
    <>
      <section className="h-48 sm:h-32 w-full bg-white2 bg-teal-500 md:bg-white2 -mt-6"></section>
      <section className="container px-4 py-10 mx-auto -mt-28">
        <div className="flex flex-col items-center">
          <Avatar
            name={user.name}
            size="100"
            round={"20px"}
            className="object-cover w-32 h-32 bg-white border-2 border-white2 rounded-lg dark:bg-gray-900 dark:border-gray-900"
          />

          <div className="flex flex-col items-center mt-4 px-4">
            <h3 className="text-xl font-semibold text-center text-gray-800 sm:text-3xl dark:text-gray-200 capitalize">
              {user.name}
            </h3>

          <div className="flex flex-col py-2 space-y-1 items-center">
            <div className="flex flex-inline items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="ml-2 font-sans">Aveiro, Portugal</span>
            </div>

            <div className="flex flex-inline items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="0"
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                ></path>
              </svg>
              <span className="ml-2 font-sans">ayanajihye</span>
            </div>

            <div className="flex flex-inline items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              <span className="ml-2 font-sans">www.behance.net/joaojesusdesign</span>
            </div>

            </div>

            <p className="max-w-lg mx-auto font-sans  mt-2 sm:text-base md:text-lg text-center text-gray-500 description-link">
              Co-founder and CEO at Themesberg. Contributor to open source.
              Indie hacker, web developer, and an authentic optimist.
            </p>

            {/* <div className="hidden mt-4 sm:space-y-0 sm:flex sm:items-center sm:space-x-3">
              <a
                href="http://twitter.com/zoltanszogyenyi"
                className="flex items-center justify-center px-4 py-2 space-x-3 text-sm text-gray-600 transition-colors duration-200 transform border rounded-lg dark:text-gray-200 dark:border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              >
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 612 612"
                  className="w-4 h-4 text-blue-500 fill-current"
                >
                  <g>
                    <path d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411 c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513 c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101 c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104 c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194 c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485 c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z"></path>
                  </g>
                </svg>{" "}
                <span>zoltanszogyenyi</span>
              </a>
            </div> */}

            <div className="flex pt-4 space-x-6">
              <Link href="#">
                <a className=" inline-flex rounded border border-gray-200 bg-white px-6 py-2 text-sm items-center leading-5 text-gray-500 font-medium">
                  <svg
                    className="h-4 w-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                  </svg>
                  Follow
                </a>
              </Link>
              <Link href="#">
                <a className=" inline-flex rounded border border-transparent bg-green-600 px-6 py-2 text-sm leading-5 text-white items-center">
                  <svg
                    className="h-4 w-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Message
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-x-auto scrollbars-hidden">
        <div className="flex inline-flex px-10  md:px-12 ">
          <div className="max-w-5xl mx-auto">
            <nav className="-mb-px flex space-x-6 text-sm leading-5">
              <Link to={`/${slug}`}>
                <div
                  className={`inline-flex border-b-2 ${
                    getLastPath() === slug
                      ? "border-b-2 border-black text-black"
                      : "border-transparent text-gray-500"
                  } px-0.5 py-4  hover:text-black transition ease-in-out duration-150 items-center`}
                >
                  <svg
                    className="h-4 w-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                  <span className="mr-1">{quoteTot}</span>
                  Contents
                </div>
              </Link>

              <Link to={`/${slug}/collections`}>
                <div
                  className={`inline-flex border-b-2 ${
                    getLastPath() === "collections"
                      ? "border-b-2 border-black text-black"
                      : "border-transparent text-gray-500"
                  } px-0.5 py-4  hover:text-black transition ease-in-out duration-150 items-center`}
                >
                  <svg
                    className="h-4 w-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  <span className="mr-1">{collectTot}</span>
                  Collections
                </div>
              </Link>
              <Link to={`/${slug}/followers`}>
                <div
                  className={`inline-flex border-b-2 ${
                    getLastPath() === "followers"
                      ? "border-b-2 border-black text-black"
                      : "border-transparent text-gray-500"
                  } px-0.5 py-4  hover:text-black transition ease-in-out duration-150 items-center`}
                >
                  <svg
                    className="h-4 w-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <span className="mr-1">{followerTot}</span>
                  Followers
                </div>
              </Link>
              <Link to={`/${slug}/following`}>
                <div
                  className={`inline-flex border-b-2 ${
                    getLastPath() === "following"
                      ? "border-b-2 border-black text-black"
                      : "border-transparent text-gray-500"
                  } px-0.5 py-4  hover:text-black transition ease-in-out duration-150 items-center`}
                >
                  <svg
                    className="h-4 w-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <span className="mr-1">{followingTot}</span>
                  Followings
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHead;
