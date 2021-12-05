import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as htmlToImage from "html-to-image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  getWord,
  viewWord,
  likeWord,
  unlikeWord,
  collectWord,
} from "../actions/words_actions";
import { followUser, unfollowUser } from "../actions/user_actions";

import Message from "../components/Message";
import ModalLogin from "../components/ModalLogin";

const Detail = ({ match }) => {
  const quoId = match.params.id;
  
  const [isCopied, setIsCopied] = useState(false);
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [collected, setCollected] = useState(false);
  const [followed, setFollowed] = useState(false);

  const wordList = useSelector((state) => state.wordList);
  const dispatch = useDispatch();
  const {
    loading,
    error,
    word,
    authorName,
    createdBy,
    tagsList,
    bgColor,
    fontFamily,
    creatorId,
    likeTot,
    likes,
    followersTot,
    followers,
    collects,
  } = wordList;

  const wordLike = useSelector((state) => state.wordLike);
  const {
    success: successWordLike,
    loading: loadingWordLike,
    eror: errorWordLike,
  } = wordLike;

  const wordView = useSelector((state) => state.wordView);
  const {
    success: successWordView,
    loading: loadingWordView,
    eror: errorWordView,
  } = wordView;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(viewWord(match.params.id));
    if (successWordLike) {
      setLike(true);
    }
    dispatch(getWord(match.params.id));

    window.scrollTo(0, 0);
  }, [dispatch, match, successWordLike]);

  const grads = [
    "bg-gradient-card-sunrise",
    "bg-gradient-card-blue",
    "bg-gradient-card-seafoam",
    "bg-gradient-card-gold",
  ];

  const randomGrad = () => {
    let mat = Math.floor(Math.random() * grads.length);
    return grads[mat];
  };

  const fontFamilies = [
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
    let mat = Math.floor(Math.random() * fontFamilies.length);
    return fontFamilies[mat];
  };

  const likeHandler = (e) => {
    console.log("you was liked!");
    e.preventDefault();
    if (isLiked) {
      dispatch(unlikeWord(match.params.id));
    } else {
      dispatch(likeWord(match.params.id));
    }

    // setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const followHandler = async (e) => {
    console.log("you was followed");
    e.preventDefault();
    if (followed) {
      dispatch(unfollowUser(creatorId));
    } else {
      dispatch(followUser(creatorId));
    }
    setFollowed(!followed);
  };

  const collectHandler = async (e) => {
    console.log("you was collected");
    e.preventDefault();
    if (collected) {
      dispatch(collectWord(match.params.id));
    }
    setCollected(!collected);
  };

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    console.log("modal open!");
    setShowModal((prev) => !prev);
  };

  const saveAs = (blob, fileName) => {
    var elem = window.document.createElement("a");
    elem.href = blob;
    elem.download = fileName;
    elem.style = "display:none;";
    (document.body || document.documentElement).appendChild(elem);
    if (typeof elem.click === "function") {
      elem.click();
    } else {
      elem.target = "_blank";
      elem.dispatchEvent(
        new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true,
        })
      );
    }
    URL.revokeObjectURL(elem.href);
    elem.remove();
  };

  const downloadHandler = () => {
    var data = document.getElementById("target-donlot");
    htmlToImage.toPng(data).then((dataUrl) => {
      saveAs(dataUrl, `${quoId}.png`);
    });
  };

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <>
      <div className="mt-8">
        {loading ? (
          <h3>Loading...</h3>
        ) : error ? (
          <Message />
        ) : (
          <>
            <div className="flex flex-wrap -mt-8 md:-mt-0 lg:-mt-0 px-5 py-3 items-center justify-between">
              <div className="flex inline-flex2 space-x-4 py-6">
                <div className="flex items-center inline-flex space-x-1 ">
                  <img
                    className="h-12 w-12 rounded-full flex items-center justify-center"
                    src="https://images.unsplash.com/profile-1637914159560-54b148d8e45eimage?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff 1x, https://images.unsplash.com/profile-1637914159560-54b148d8e45eimage?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff 2x"
                    alt="user"
                  />
                  <div className="block place-self-center px-2 text-sm text-gray-600 font-light capitalize ">
                    {createdBy}
                    <br />
                    <span className="text-sm font-extralight ">
                      {followersTot} follower
                    </span>
                  </div>
                </div>

                <div className="relative py-3 left-0  space-x-2">
                  {userInfo ? (
                    <button
                      className="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                      onClick={followHandler}
                    >
                      <span>Follow</span>
                    </button>
                  ) : (
                    <button
                      className="bg-blue-500 px-4 py-1 font-light text-white inline-flex items-center space-x-2 rounded"
                      onClick={followHandler}
                    >
                      <span>Follow</span>
                    </button>
                  )}
                </div>
              </div>

              <div className="flex inline-flex space-x-2">
                {userInfo ? (
                  <button
                    className="bg-white px-3 py-1 font-extralight text-gray-500 border-2 border-gray-400 inline-flex items-center space-x-2 rounded hover:border-gray-600 hover:text-gray-800"
                    onClick={likeHandler}
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
                    <span className="hidden lg:block">{likeTot} Likes</span>
                  </button>
                ) : (
                  <button
                    className="bg-white px-3 py-1 font-extralight text-gray-500 border-2 border-gray-400 inline-flex items-center space-x-2 rounded hover:border-gray-600 hover:text-gray-800"
                    onClick={openModal}
                    title="Like Quote"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="hidden lg:block">{likeTot} Likes</span>
                  </button>
                )}

                {userInfo ? (
                  <button
                    className="bg-white px-3 py-2 font-extralight text-gray-500 border-2 border-gray-400 inline-flex items-center space-x-2 rounded hover:border-gray-600 hover:text-gray-800"
                    onClick={collectHandler}
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
                  </button>
                ) : (
                  <button
                    className="bg-white px-3 py-2 font-extralight text-gray-500 border-2 border-gray-400 inline-flex items-center space-x-2 rounded hover:border-gray-600 hover:text-gray-800"
                    onClick={openModal}
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
                  </button>
                )}
                <CopyToClipboard text={word.words} onCopy={onCopyText}>
                <button
                  className="bg-white px-3 py-2 font-extralight text-gray-500 border-2 border-gray-400 inline-flex items-center space-x-2 rounded hover:border-gray-600 hover:text-gray-800"
                  title="Copy to clipboard"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                    <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                  </svg>
                  <span className="hidden lg:block">Copy</span>
                </button>
                </CopyToClipboard>
                <button
                  className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-400 px-4 py-2 font-extralight text-white inline-flex items-center space-x-2 rounded"
                  onClick={downloadHandler}
                >
                  <span>Free Download</span>
                </button>
              </div>
            </div>
            {loading ? (
              <h3>Loading...</h3>
            ) : error ? (
              <Message />
            ) : (
              <div className="px-5 py-3 flex items-center justify-center">
                <div className="w-2/3 md:w-3/4 lg:w-1/2 flex items-center justify-center">
                  {/*  */}
                  <div className="p-4 cursor-pointer">
                    <div
                      className={`flex rounded-lg w-full h-3/6 bg-gradient-to-b ${randomGrad()} p-10 md:p-12 lg:p-16 flex-col`}
                      id="target-donlot"
                    >
                      <div className="flex-grow w-full">
                        <p
                          className="leading-relaxed text-base text-black text-center sm:text-2xl md:text-3xl lg:text-4xl"
                          style={{ fontFamily: `${randomFamily()}` }}
                        >
                          {word.words}
                        </p>
                        <span className="px-4 pt-5 text-sm text-black float-right">
                          - {authorName}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>
            )}

            {loading ? (
              <h3>Loading...</h3>
            ) : error ? (
              <Message />
            ) : (
              <div className="px-8 py-2">
                <div className="py-3 text-bold text-xl">Related Tags</div>
                <div className="flex items-center justify-between pb-4 ">
                  <div className="top-0 py-2 flex">
                    <div className="flex inline-flex space-x-2">
                      {tagsList === undefined
                        ? null
                        : tagsList.map((tag, index) => (
                            <Link
                              to={`/tags/${tag
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`}
                            >
                              <button
                                key={index}
                                className="items-center text-gray-500 justify-center px-2 py-1 bg-gray-100 rounded cursor-pointer hover:bg-gray-200 hover:text-black font-normal"
                              >
                                <span className="text-sm">{tag}</span>
                              </button>
                            </Link>
                          ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

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
                        <span>{word.views}</span>
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
                        <span>{word.views}</span>
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
                        <span>{word.download}</span>
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
                  {/* <div className="underline text-sm font-light">
                      <a href="#">Learn more about the license »</a>
                    </div> */}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <ModalLogin showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Detail;
