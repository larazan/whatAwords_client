import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Card = ({ content }) => {
    const location = useLocation();

  const fontFamily = [
    "Aelten",
    "Alphakind",
    "Amellis",
    "Mollusca",
    "Bajurie",
    "Banda-Aceh",
    "Bitcrusher",
    "Blue_highway_cd",
    "Borg",
    "Bright-Dreams",
    "Chandella",
    "Chinese-Rocks",
    "Cokobi",
    "Colombia",
    "ConcreteWall",
    "Coolvetica",
    "Dakwart",
    "DAGOCA",
    "Dealerplate-California",
    "Dream-Orphans",
    "Elliane-Regular",
    "Engebrechtre",
    "ENGINE",
    "Foo",
    "Gnuolane",
    "Gratise",
    "Groomer",
    "Halmera",
    "HappyGarden",
    "Hellohowareyou",
    "Helsinki",
    "Inter-Regular",
    "Jreeng",
    "JustSmile",
    "Kaylafiz",
    "Kimberley",
    "LazySunday",
    "Leorio",
    "Limejuice",
    "Lovetle",
    "Lynoselt",
    "MatSaleh",
    "MelocheBook",
    "MightyKingdom",
    "Monofonto",
    "Morganite-Light",
    "MorningMiow",
    "Mounets",
    "NoVirus",
    "NugoSansLight",
    "Oaklevin",
    "Ontel",
    "Peace",
    "PeachyRose",
    "Pouline",
    "Pretender",
    "QuickCount",
    "Rakesly",
    "Rennoya",
    "ROLAND",
    "Saolice",
    "SimpalaExtended",
    "SingleSleeve",
    "StraightlerRegular",
    "SweetSomeday",
    "Tahu",
    "Thruster-Regular",
    "VirusKiller",
    "WallabysJunior",
    "WanitaCantik",
    "ZZYZX",
    "WhereTheCookies",
    "WKSimple",
    "Arvo-Regular",
    "Cinzel-Regular",
    "Domine-Regular",
    "LiberationSerif-Regular",
    "Lustria-Regular",
    "Mohave-Regular",
    "Montserrat-Regular",
    "NotoSans-Regular",
    "Promesh_Regular",
    "Raleway-Regular",
    "Rubik-Regular",
    "Zaio",
    "Antonio-Regular",
    "Bitter-Regular",
    "COBAISSI",
    "CrimsonText-Roman",
  ];

  const randomFamily = () => {
    let mat = Math.floor(Math.random() * fontFamily.length);
    return fontFamily[mat];
  };
  
    return (
        <>
            <div className="p-4 lg:w-1/4 w-1/2 cursor-pointer">
        <Link
          to={{
            pathname: `/quote/${content._id}`,
            state: { background: location },
          }}
        >
              <div className="flex relative rounded-lg h-full bg-pink-500 p-8 flex-col2 justify-center items-center">
                <div className="flex-grow py-4">
                  <p className="leading-relaxed text-base text-white text-center text-2xl" style={{ fontFamily: `${randomFamily()}` }}>
                  {content.words}
                  </p>
                  <span className="px-4 pt-5 text-sm text-white float-right">
                    - {content.author.name}
                  </span>
                </div>
                <div className="overlay absolute rounded-lg bottom-0 h-full w-full px-4 p-4 pt-3 opacity-0 hover:opacity-90 cursor-pointer">
                  <div className="absolute top-0 left-0 px-5 py-4">
                    <div className=" flex justify-between space-x-6 md:space-x-2">
                      <div className="flex space-x-2 items-center space-x-4 cursor-pointer">
                        <img
                          className="h-8 w-8 rounded-full flex  justify-center"
                          src="https://images.pexels.com/users/avatars/23776366/zhanna-fort-433.jpeg?auto=compress&fit=crop&h=60&w=60"
                          alt="user"
                        />
                        <span className="text-white flex  text-sm font-semibold">
                          Zanna fort
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 px-5 py-3">
                    <div className="mt-4 flex items-center space-x-4 md:space-x-2">
                      <span className="">
                        <button className="h-7 w-7  ">
                          <svg
                            className="h-6 w-6 text-gray-300 hover:text-white"
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
                        </button>
                      </span>
                      <span className="">
                        <button className="h-7 w-7  ">
                          <svg
                            className="h-6 w-6 text-gray-300 hover:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                      </span>

                      <span className="">
                        <button className="h-7 w-7  ">
                          <svg
                            className="h-6 w-6 text-gray-300 hover:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                          </svg>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            </div>
        </>
    )
}


export const Modal = () => {
    return (
        <div>
            
        </div>
    )
}