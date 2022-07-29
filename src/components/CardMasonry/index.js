import React from "react";
import Masonry from "react-masonry-css";
import { Link, useLocation } from "react-router-dom";
import Avatar from "react-avatar";

import { fontFamilies } from "../../assets/data/fontFamilies";
import { gradients } from "../../assets/data/gradients";

const CardMasonry = ({ contents }) => {
  const location = useLocation();

  const randomGrad = () => {
    let mat = Math.floor(Math.random() * gradients.length);
    return gradients[mat]["tail"];
  };

  const randomFamily = () => {
    let mat = Math.floor(Math.random() * fontFamilies.length);
    return fontFamilies[mat];
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const truncate = (str, noWord) => {
    return str.split(" ").splice(0,noWord).join(" ");
  }

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {contents.map((content, index) => (
          <div className="relative">
            <div
              className={`flex rounded-md ${randomGrad()} p-6 md:p-8 lg:p-8 justify-center shadow-md items-center cursor-zoom-in`}
              key={index}
            >
              <Link
                to={{
                  pathname: `${content.category === '6199f8067f44992140ebdd00' ? '/riddle/'+content._id : '/detail/'+content._id }`,
                  // search: `${content.category === '6199f8067f44992140ebdd00' ? `id=${content._id}`: null}`,
                }}
                className="cursor-zoom-in"
              >
                <div className="flex-grow py-2 lg:py-4 md:py-4">
                  <p
                    className="leading-relaxed text-black text-center text-xl md:text-xl lg:text-2xl"
                    style={{ fontFamily: `${randomFamily()}` }}
                  >
                    {content.words}
                  </p>
                  {/* {content.author && (
                    <span className="px-0 md:px-2 lg:px-4 pt-4 text-xs md:text-sm lg:text-sm text-black float-right">
                      - {content.author.name}
                    </span>
                  )} */}

                  {/* {content.answer && (
                <div className="px-0 md:px-2 lg:px-4 pt-4 text-xs font-sans md:text-sm lg:text-sm text-black text-center">
                  <div className="font-semibold">Answer:</div>
                <span>{content.answer}</span>
                </div>
              )} */}
                </div>
              </Link>
            </div>
            <Link
              to={{
                pathname: `/detail/${content._id}`,
                state: { background: location },
                // pathname: `/detail/${content._id}`,
              }}
              className="cursor-zoom-in"
            >
              {content.author && (
              <div class="overlay absolute rounded-b bottom-0 h-full w-full px-4 pt-3 opacity-0 hover:opacity-100">
                <div class="absolute top-0 left-0 px-5 py-4">
                  <button class=" flex justify-between space-x-6 md:space-x-2">
                    <div class="flex space-x-2 ">
                      <Avatar
                        name={truncate(content.author.name, 2)}
                        size="30"
                        round={true}
                        className="flex items-center justify-center shadow-xl rounded-full w-12 h-12 align-middle border-none sm:w-20 lg:w-60"
                      />
                      <span class="flex items-center justify-center text-xs font-light text-white">
                        {content.author.name}
                      </span>
                    </div>
                  </button>
                </div>

                <div class="absolute bottom-0 right-0 px-5 py-3 mb-2">
                  <div class="flex inline-flex2 flex-col space-y-2 ">
                    <button class="h-6 w-6 md:flex items-center">
                      <svg
                        class="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                      </svg>
                    </button>
                    <button class="h-6 w-6 md:flex items-center">
                      <svg
                        class="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </button>
                    <button class="h-6 w-6 md:flex items-center">
                      <svg
                        class="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
               )}
            </Link>
          </div>
        ))}
      </Masonry>
    </>
  );
};

export default CardMasonry;
