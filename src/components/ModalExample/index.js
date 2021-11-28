import React, { useEffect, useState, useRef } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getWord } from "../../actions/words_actions";

import Message from "../Message";

const ModalExample = () => {
  const modalRef = useRef();
  const history = useHistory();
  let { id } = useParams();

  const [tags, setTags] = useState([]);

  const [showInfo, setShowInfo] = useState(false);
  const clickInfo = () => setShowInfo(true);

  const wordList = useSelector((state) => state.wordList);
  const dispatch = useDispatch();
  const { loading, error, word, authorName, createdBy, tagsList } = wordList;

  useEffect(() => {
    dispatch(getWord(id));
    // if(word.length > 0) {
    //   setTags(word.tags);
    //   setAuthor(word.author.name);
    // }
    setTags(['love', 'strong', 'family']);
  }, [dispatch, id]);

  console.log(id);
  console.log(tags.length);
  console.log(word);
  console.log(authorName);
  console.log(typeof tagsList);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      e.stopPropagation();
      history.goBack();
    }
  };

  React.useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

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
  ];

  const randomFamily = () => {
    let mat = Math.floor(Math.random() * fontFamily.length);
    return fontFamily[mat];
  };

  return (
    <>
      <div
        className="main-modal fixed w-full h-full inset-0 z-20 flex justify-center items-center2 animated2 fadeIn2 faster2 overflow-y-auto"
        onClick={closeModal}
        style={{ background: `rgba(12,15,19,.9)` }}
        ref={modalRef}
      >
        <div className="fixed px-2 py-2 top-3 left-2">
          <button className="h-8 w-8" >
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
        <div className="absolute mt-8 border border-teal-500 modal-container bg-white w-8/12  rounded shadow-lg outline-none">
          <button
            className="h-15 w-15 absolute left-0 opacity-60 hover:opacity-90"
            style={{ top: `450px`, transform: `translateX(-175%)` }}
          >
            <svg
              className="h-10 w-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="h-15 w-15 absolute right-0 opacity-60 hover:opacity-90"
            style={{ top: `450px`, transform: `translateX(175%)` }}
          >
            <svg
              className="h-10 w-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {loading ? (
            <h3>Loading...</h3>
          ) : error ? (
            <Message />
          ) : (
            <>
              <div className="px-5 py-3 flex items-center justify-between">
                <div className="flex inline-flex space-x-4">
                  <div className="flex inline-flex space-x-2 ">
                    <img
                      className="h-12 w-12 rounded-full flex items-center justify-center"
                      src="https://images.pexels.com/users/avatars/23776366/zhanna-fort-433.jpeg?auto=compress&fit=crop&h=60&w=60"
                      alt="user"
                    />
                    <div className="block place-self-center px-2 text-sm text-gray-600 font-semibold capitalize ">
                      {createdBy}
                      <br />
                      <span className="text-sm font-light ">15k follower</span>
                    </div>
                  </div>

                  <div className="relative py-3 left-0 flex-0 inline-flex-0 space-x-2">
                    <button className="inline-flex items-center justify-center px-3 py-1 bg-white rounded border border-gray-300 cursor-pointer hover:bg-gray-300 font-medium">
                      <span className="text-sm">Follow</span>
                    </button>
                    <button className="inline-flex items-center justify-center px-3 py-1 bg-white rounded border border-gray-300 cursor-pointer hover:bg-gray-300 font-medium">
                      <span className="text-sm">Donate</span>
                    </button>
                  </div>
                </div>

                <div className="flex inline-flex space-x-2">
                  <button className="inline-flex items-center justify-center px-4 py-2 bg-white rounded border border-gray-300 cursor-pointer hover:border-blue-700 hover:border-4 hover:text-blue-700 font-medium">
                    <svg
                      className="h-4 w-4"
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
                    <span className="text-sm ml-2">29 Likes</span>
                  </button>
                  <button className="inline-flex items-center justify-center px-4 py-2 bg-white rounded border border-gray-300 cursor-pointer hover:border-blue-700 hover:border-4 hover:text-blue-700 font-medium">
                    <svg
                      className="h-4 w-4"
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
                    <span className="text-sm ml-2">Collect</span>
                  </button>
                  <div className="inline-flex items-center justify-center">
                    <a
                      href=""
                      className="inline-flex bg-green-600 px-6 py-2 justify-center rounded-l boder border-transparent text-sm leading-5 font-medium text-white"
                    >
                      Free Download
                    </a>
                    <a
                      href=""
                      className="inline-flex bg-green-600 px-2 py-2 justify-center rounded-r border-l border-gray-900 text-sm leading-5 font-medium text-white"
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
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="px-5 py-3 flex items-center justify-center">
                <div className="w-1/2 h-1/2 flex items-center justify-center">
                  {/*  */}
                  <div className="p-4 cursor-pointer">
                    <div className="flex rounded-lg h-full bg-pink-500 p-8 flex-col">
                      <div className="flex-grow">
                        <p
                          className="leading-relaxed text-base text-white text-center text-2xl"
                          style={{ fontFamily: `${randomFamily()}` }}
                        >
                          {word.words}
                        </p>
                        <span className="px-4 pt-5 text-sm text-white float-right">
                          - {authorName}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>

              <div className="px-5 py-2 flex items-center justify-center">
                <div className="flex items-center px-2">
                  <button className="h-5 w-5">
                    <svg
                      className="h-5 w-5"
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
                  </button>
                  <span className="ml-2 text-sm font-light">
                    {word.views} views
                  </span>
                </div>
                <div className="flex items-center px-2">
                  <button className="h-5 w-5">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <span className="ml-2 text-sm font-light">Free to use</span>
                </div>
              </div>

              <div className="px-8 py-2">
                <div className="py-3 text-bold text-xl">Related Tags</div>
                <div className="">
                  <div className="flex items-center justify-between pb-4 ">
                    <div className="top-0 py-2 flex">
                      <div className="flex inline-flex space-x-2">
                        {tags.length === 0
                          ? null
                          : tags.map((tag, index) => (
                              <Link
                                to={`/tags/${tag
                                  .replace(/\s+/g, "-")
                                  .toLowerCase()}`}
                              >
                                <button
                                  key={index}
                                  className="inline-flex items-center text-gray-500 justify-center px-2 py-1 bg-gray-100 rounded cursor-pointer hover:bg-gray-200 hover:text-black font-normal"
                                >
                                  <span className="text-sm">{tag}</span>
                                </button>
                              </Link>
                            ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-5 py-1 flex items-center justify-center">
                <div className="relative left-0 flex-0 inline-flex-0 space-x-2">
                  <button className="inline-flex items-center justify-center px-3 py-1 bg-white rounded border border-gray-300 cursor-pointer hover:bg-gray-300 font-medium">
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
                        strokeWidth={1}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                    <span className="text-sm pl-2">Share</span>
                  </button>
                  <button className="inline-flex items-center justify-center px-3 py-1 bg-white rounded border border-gray-300 cursor-pointer hover:bg-gray-300 font-medium">
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
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm pl-2" onClick={clickInfo}>
                      Info
                    </span>
                  </button>
                </div>
              </div>

              <div className="mb-8">
                <div className="px-5 py-3 flex justify-center space-x-4">
                  <div className="space-y-4 w-80">
                    <div className="border rounded px-5 py-3">
                      <div className="text-xs font-light uppercase">
                        Photographer
                      </div>
                      <div className="mt-3 flex inline-flex space-x-2 ">
                        <img
                          className="h-12 w-12 rounded-full flex items-center justify-center"
                          src="https://images.pexels.com/users/avatars/23776366/zhanna-fort-433.jpeg?auto=compress&fit=crop&h=60&w=60"
                          alt="user"
                        />
                        <div className="block place-self-center px-2 text-sm text-gray-600 font-semibold">
                          zara larson
                          <br />
                          <span className="text-sm font-light ">
                            15k follower
                          </span>
                        </div>
                      </div>
                      <div className="relative py-3 left-0 flex-0 inline-flex-0 space-x-2">
                        <button className="inline-flex items-center justify-center px-3 py-1 bg-white rounded border border-gray-300 cursor-pointer hover:bg-gray-300 font-medium">
                          <span className="text-sm">Follow</span>
                        </button>
                      </div>

                      <div className="py-3">
                        <div className="text-xs font-light uppercase">
                          <a href="#">more photos by henry</a>
                        </div>
                        <div className="mt-4 flex items-center space-x-6 md:space-x-2">
                          <span>
                            <a
                              href="#"
                              className="h-15 w-20 bg-gray-200 border  inline-block overflow-hidden"
                            >
                              <img
                                src="https://images.pexels.com/photos/5197322/pexels-photo-5197322.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
                                alt=""
                              />
                            </a>
                          </span>
                          <span>
                            <a
                              href="#"
                              className="h-15 w-20 bg-gray-200 border  inline-block overflow-hidden"
                            >
                              <img
                                src="https://images.pexels.com/photos/5197277/pexels-photo-5197277.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
                                alt=""
                              />
                            </a>
                          </span>

                          <span class="md:flex-1  md:flex">
                            <button
                              type="button"
                              class="h-10 w-10 border2 flex items-center md:aspect-h-1 md:w-full md:rounded-none"
                            >
                              <span class="flex items-center justify-center text-xs font-light">
                                +6 more
                              </span>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 w-80">
                    <div className="border rounded px-5 py-3">
                      <div className="text-xs font-light uppercase">
                        statistic
                      </div>
                      <div className="px-5 py-3 flex justify-between">
                        <div className="flex inline-flex space-x-2 ">
                          <button className="h-6 w-6 md:flex items-center">
                            <svg
                              className="h-6 w-6 text-green-500"
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
                          </button>
                          <span className="flex items-center uppercase text-2xl font-semibold text-green-500">
                            {word.views}
                          </span>
                        </div>
                        <div className="flex inline-flex space-x-4 ">
                          <button className="h-6 w-6 md:flex items-center">
                            <svg
                              className="h-6 w-6"
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
                        </div>
                      </div>
                      <div className="px-5 py-3 flex justify-center">
                        <div className="flex inline-flex space-x-4 ">
                          <button className="inline-flex items-center justify-center">
                            <svg
                              className="h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-sm pl-2">
                              {word.download}
                            </span>
                          </button>
                          <button className="inline-flex items-center justify-center">
                            <svg
                              className="h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-sm pl-2">126</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded px-5 py-3">
                      <div className="text-xs font-light uppercase">
                        license
                      </div>
                      <div className="px-2 py-3 flex flex-col font-light">
                        <small>✓ Free to use.</small>
                        <small>✓ No attribution required.</small>
                      </div>
                      <div className="underline text-sm font-light">
                        <a href="#">Learn more about the license »</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ModalExample;
