import React from "react";
import Avatar from "react-avatar";

import AudioPlayer from '../AudioNew/AudioPlayer'

import { tracks } from '../../assets/data/tracks'

const ModalAudio = ({ showModal, setShowModal }) => {

    let modal = document.getElementById("my-modal");

    window.onclick = function(e) {
      e.stopPropagation();
        if (e.target == modal) {
          setShowModal((prev) => !prev);
          
        }
      }

    // const closeModal = (e) => {
    //     e.stopPropagation();
    //       setShowModal(false);
    //   };


  return (
    <>
    {showModal ? (
      <div
        className="main-modal fixed w-full h-full inset-0 z-20 flex justify-center items-center2 animated fadeIn faster overflow-y-auto"
        style={{ background: `rgba(12,15,19,.9)` }}
        id="my-modal"
        // onClick={closeModal}
      >
        <div className="fixed md:px-2 md:py-2 lg:px-2 lg:py-2 top-2 md:top-3 lg:top-3 xl:top-3 left-2">
          <button className="h-8 w-8" >
            <svg
              className="h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8 md:text-white lg:text-white font-bold"
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
        <div className="absolute sm:mt-0 md:mt-8 lg:mt-8 xl:mt-12 lg:border lg:border-teal-500 modal-container bg-white w-full lg:w-8/12  md:rounded lg:rounded md:shadow-lg lg:shadow-lg outline-none">
          <div className="flex justify-end py-2 px-2 md:hidden lg:hidden">
            <button className="h-8 w-8">
              <svg
                className="h-8 w-8 font-bold"
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
          <div className="flex-auto md:flex lg:flex flex-wrap -mt-8 md:-mt-0 lg:-mt-0 px-5 py-3 items-center justify-between">
            <div className="flex w-full2 inline-flex space-x-4 py-6 xs:justify-between sm:justify-between md:justify-start lg:justify-start">
              <div className="flex items-center inline-flex space-x-1">
                <Avatar
                  name="Ratri"
                  size="50"
                  round={true}
                  className="flex items-center justify-center shadow-xl rounded-full w-12 h-12 align-middle border-none sm:w-20 lg:w-60"
                />

                <div className="block place-self-center px-2 text-sm text-gray-600 font-light capitalize ">
                  ratri
                  <br />
                  <span className="text-sm font-extralight ">2 follower</span>
                </div>
              </div>

              <div className="relative py-3 left-0  space-x-2">
                <div
                  className="bg-blue-500 px-4 py-1 font-light text-white inline-flex items-center space-x-2 rounded"
                >
                  <span>Follow</span>
                </div>
              </div>
            </div>

            <div className="flex w-full2 space-x-2 justify-between md:justify-end lg:justify-end">
              <div
                className="bg-white px-3 py-1 font-extralight text-gray-500 border-2 border-gray-400 inline-flex items-center space-x-2 rounded hover:border-gray-600 hover:text-gray-800"
                title="Like Quote"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>

                <span className="hidden lg:block">9 Likes</span>
              </div>

              <div
                className="bg-white px-3 py-2 font-extralight text-gray-500 border-2 border-gray-400 inline-flex items-center space-x-2 rounded hover:border-gray-600 hover:text-gray-800"
                title="Add to collection"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="hidden lg:block">Collect</span>
              </div>

              <button className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-400 px-4 py-2 font-extralight text-white inline-flex items-center space-x-2 rounded">
                <span>Free Download</span>
              </button>
            </div>
          </div>

          <div className="px-5 py-3 flex items-center justify-center">
            <div className="w-6/8 md:w-3/4 lg:w-2/2 xl:w-1/2 flex items-center justify-center">
              {/*  */}
              <AudioPlayer tracks={tracks} />
              {/*  */}
            </div>
          </div>

          <div className="px-8 py-2">
            <div className="py-3 text-bold text-xl">Related Tags</div>
            <div className="flex items-center justify-between pb-4 ">
              <div className="top-0 py-2 flex">
                <div className="flex inline-flex space-x-2">
                  <button className="items-center text-gray-500 justify-center px-2 py-1 bg-gray-100 rounded cursor-pointer hover:bg-gray-200 hover:text-black font-normal">
                    <span className="text-sm">tag</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap px-5 py-3  justify-center space-x-0 md:space-x-4 lg:space-x-4 mb-8">
            <div className="space-y-4 w-80">
              <div className="border rounded px-5 py-3">
                <div className="text-xs font-light uppercase">statistic</div>
                <div className="px-5 py-3 flex flex-col justify-between">
                  <div className="flex  items-center justify-center space-x-4 ">
                    <div className="px-4 py-2 font-semibold text-gray-700 inline-flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>7</span>
                    </div>

                    <div className="px-4 py-2 font-semibold text-gray-700 inline-flex items-center space-x-2">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>8</span>
                    </div>

                    <div className="px-4 py-2 font-semibold text-gray-700 inline-flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 w-80">
              <div className="border rounded px-5 py-3">
                <div className="text-xs font-light uppercase">license</div>
                <div className="px-2 py-3 flex flex-col font-light space-y-2">
                  <div className="inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Free to use.</span>
                  </div>
                  <div className="inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>No attribution required.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ) : null}
    </>
  );
};

export default ModalAudio;
