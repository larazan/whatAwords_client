import React, { useState } from "react";
import Masonry from "react-masonry-css";

import ModalAudio from "../ModalAudio";

const CardAudio = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    console.log("modal open!");
    setShowModal((prev) => !prev);
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  let songs = [
    { "artist": "Zedd & Jasmine", "song": "Funny"},
    { "artist": "Miwa", "song": "Dont Cry Anymore"},
    { "artist": "Aimer", "song": "Stand Alone"},
    { "artist": "Milet", "song": "Inside You"},
    { "artist": "The Chainsmoker", "song": "Closer"},
    { "artist": "Clean Bandit", "song": "Symphony"},
    { "artist": "Lisa", "song": "Gurenge"},
    { "artist": "Miwa", "song": "Hikarie"},
    { "artist": "Aimer", "song": "Black Bird"},
    { "artist": "One Ok Rock", "song": "Renegades"},
  ];

  let colors = [
    "purple",
    "orange",
    "teal",
    "green",
    "blue",
    "red",
    "indigo",
    "pink",
  ];

  const randomColor = () => {
    let mat = Math.floor(Math.random() * colors.length);
    return colors[mat];
  };

  
  return (
    <>
      <main>
        <div className="px-8 z-9 md:container md:mx-auto md:px-8">
          <div className="mt-5 mb-20 flex flex-wrap -m-4 ">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
             {
               songs.map((song, index) => {
                 let colorPick = randomColor()
                 return <div 
                 className={`flex md:flex-shrink-0 p-6 md:p-2 relative overflow-hidden bg-${colorPick}-500 rounded-lg shadow-lg  cursor-zoom-in`}
                  key={index}
                  onClick={openModal}
                 >
                 <svg
                   className="absolute bottom-0 left-0 mb-8"
                   viewBox="0 0 375 283"
                   fill="none"
                   style={{ transform: "scale(1.5)", opacity: 0.1 }}
                 >
                   <rect
                     x="159.52"
                     y="175"
                     width="152"
                     height="152"
                     rx="8"
                     transform="rotate(-45 159.52 175)"
                     fill="white"
                   />
                   <rect
                     y="107.48"
                     width="152"
                     height="152"
                     rx="8"
                     transform="rotate(-45 0 107.48)"
                     fill="white"
                   />
                 </svg>
                 <div className="relative pt-6 pb-6 md:pb-0 px-3 md:px-10 flex md:flex-col items-center justify-center">
                   <div className={`rounded-full shadow-lg border-full bg-${colorPick}-300 ring-4 ring-${colorPick}-200`}>
                     <div className="w-full">
                       <svg
                         xmlns="http://www.w3.org/2000/svg"
                         className="h-32 w-32 text-white"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                       >
                         <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={1}
                           d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                         />
                         <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={1}
                           d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                         />
                       </svg>
                     </div>
                   </div>
                   <div className="relative text-white px-0 ml-6 md:ml-0 pb-6 mt-6">
                     <span className="block opacity-75 -mb-1">
                       {song.artist}
                     </span>
                     <div className="">
                       <span className="block font-semibold text-xl">{song.song}</span>
                     </div>
                   </div>
                 </div>
               </div>
               })
             } 
              {/* <div className={`flex md:flex-shrink-0 p-6 md:p-2 relative overflow-hidden bg-${randomColor()}-500 rounded-lg shadow-lg  cursor-zoom-in`}>
                <svg
                  className="absolute bottom-0 left-0 mb-8"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: 0.1 }}
                >
                  <rect
                    x="159.52"
                    y="175"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="relative pt-6 pb-6 md:pb-0 px-3 md:px-10 flex md:flex-col items-center justify-center">
                  <div className={`rounded-full shadow-lg border-full bg-${randomColor()}-300 ring-4 ring-${randomColor()}-200`}>
                    <div className="w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-32 w-32 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="relative text-white px-0 ml-6 md:ml-0 pb-6 mt-6">
                    <span className="block opacity-75 -mb-1">
                      Zedd & Jasmine Zedd & Jasmine
                    </span>
                    <div className="">
                      <span className="block font-semibold text-xl">Funny</span>
                    </div>
                  </div>
                </div>
              </div>

              

              <div className="flex md:flex-shrink-0 p-6 md:p-2 relative overflow-hidden bg-teal-500 rounded-lg shadow-lg  cursor-zoom-in">
                <svg
                  className="absolute bottom-0 left-0 mb-8"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: 0.1 }}
                >
                  <rect
                    x="159.52"
                    y="175"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="relative pt-6 pb-6 md:pb-0 px-3 md:px-10 flex md:flex-col items-center justify-center">
                  <div className="rounded-full shadow-lg border-full bg-teal-300">
                    <div className="w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-32 w-32 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="relative text-white px-0 ml-6 md:ml-0 pb-6 mt-6">
                    <span className="block opacity-75 -mb-1">
                      Zedd & Jasmine Zedd & Jasmine
                    </span>
                    <div className="">
                      <span className="block font-semibold text-xl">Funny</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex md:flex-shrink-0 p-6 md:p-2 relative overflow-hidden bg-purple-500 rounded-lg shadow-lg  cursor-zoom-in">
                <svg
                  className="absolute bottom-0 left-0 mb-8"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: 0.1 }}
                >
                  <rect
                    x="159.52"
                    y="175"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="relative pt-6 pb-6 md:pb-0 px-3 md:px-10 flex md:flex-col items-center justify-center">
                  <div className="rounded-full shadow-lg border-full bg-purple-300">
                    <div className="w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-32 w-32 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="relative text-white px-0 ml-6 md:ml-0 pb-6 mt-6">
                    <span className="block opacity-75 -mb-1">
                      Zedd & Jasmine Zedd & Jasmine
                    </span>
                    <div className="">
                      <span className="block font-semibold text-xl">Funny</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex md:flex-shrink-0 p-6 md:p-2 relative overflow-hidden bg-green-500 rounded-lg shadow-lg  cursor-zoom-in">
                <svg
                  className="absolute bottom-0 left-0 mb-8"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: 0.1 }}
                >
                  <rect
                    x="159.52"
                    y="175"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="relative pt-6 pb-6 md:pb-0 px-3 md:px-10 flex md:flex-col items-center justify-center">
                  <div className="rounded-full shadow-lg border-full bg-green-300">
                    <div className="w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-32 w-32 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="relative text-white px-0 ml-6 md:ml-0 pb-6 mt-6">
                    <span className="block opacity-75 -mb-1">
                      Zedd & Jasmine Zedd & Jasmine
                    </span>
                    <div className="">
                      <span className="block font-semibold text-xl">Funny</span>
                    </div>
                  </div>
                </div>
              </div> */}

              
            </Masonry>
          </div>
        </div>
      </main>

      <ModalAudio showModal={showModal} closeModal={setShowModal} />
    </>
  );
};

export default CardAudio;
