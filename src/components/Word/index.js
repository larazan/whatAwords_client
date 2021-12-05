import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthors } from "../../actions/authors_actions";
import Select from 'react-select'

import TagsInput from "../tagsInput";

import "./createContent.css";

const Word = () => {
  const authorsList = useSelector((state) => state.authorsList);
  const dispatch = useDispatch();
  const { loading, error, authors } = authorsList;

  const [selected, setSelected] = useState([])

  useEffect(() => {
    dispatch(getAuthors());
  }, [dispatch]);

  console.log(authors);

  const options = loading ? loading : authors.map((d) => ({"label": d.name, "value": d._id}))
  console.log(options);

  const [showAudio, setShowAudio] = useState(false)
  const [showText, setShowText] = useState(true)

  const openAudio = () => {
    setShowAudio((prev) => !prev)
    setShowText(false)
  }

  const openText = () => {
    setShowText(true)
    setShowAudio(false)
  }

  const colors = [
    {
      name: "Blue",
      color: "#49607c",
    },
    {
      name: "Black",
      color: "#3b3b3b",
    },
    {
      name: "Red",
      color: "#b14754",
    },
    {
      name: "Pink",
      color: "#dfabb5",
    },
    {
      name: "Brown",
      color: "#bd9474",
    },
    {
      name: "Yellow",
      color: "#ead99a",
    },
  ];

  const [tags, setTags] = useState([]);
  const [errors, setErrors] = useState({});

  const changeHandler = (name, value) => {
    if (name === "tags") {
      setTags(value);
      if (value.length > 0 && errors.tags) {
        setErrors((prev) => {
          const prevErrors = { ...prev };
          delete prevErrors.tags;
          return prevErrors;
        });
      }
    }
  };

  const handleChange = (e) => {
    console.log(e);
    setSelected(e.value)
  }

  // console.log(selected);

  return (
    <>
      <main className="px-8 z-9 md:container md:mx-auto md:px-8">
        <div className="flex justify-center">
          <div className="sm:max-w-7xl w-full p-10 bg-white rounded-xl ">
            <div className="text-center">
              <h2 className="mt-5 text-3xl font-bold text-gray-900">
                Post Something
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Lorem ipsum is placeholder text.
              </p>
            </div>

            <div className="flex justify-center space-x-10 p-10 items-center">
              <button onClick={openText}>
                <div className={ `font-bold text-gray-400 hover:text-gray-800 ${showText === true ? `text-gray-900 text-xl border-b-4 border-black py-4` : null}` }>
                  Text
                </div>
              </button>
              <button onClick={openAudio}>
                <div className={`font-bold text-gray-400 hover:text-gray-800 ${showAudio === true ? `text-gray-900 text-xl border-b-4 border-black py-4` : null}`}>
                  Audio
                </div>
              </button>
            </div>

            {showAudio ? 
            <div className="flex justify-center" >
              <div className="w-1/3">
                <div className="">
                  <form className="mt-8 space-y-3" action="#" method="POST">
                    <div className="grid grid-cols-1 space-y-2">
                      <label className="text-sm font-bold text-gray-500 tracking-wide">
                        Author
                      </label>
                      <input
                        className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                        type=""
                        placeholder="author name"
                      />
                    </div>
                    <div className="grid grid-cols-1 space-y-2">
                      <label className="text-sm font-bold text-gray-500 tracking-wide">
                        Author
                      </label>
                      <Select options={options} onChange={handleChange} />
                    </div>
                    <div className="grid grid-cols-1 space-y-2">
                      <label className="text-sm font-bold text-gray-500 tracking-wide">
                        Tags
                      </label>
                      <TagsInput
                        label="Tags"
                        id="tags"
                        name="tags"
                        placeholder="Add tag"
                        onChange={changeHandler}
                        error={errors.tags}
                        defaultTags={tags}
                      />
                    </div>
                    <div className="grid grid-cols-1 space-y-2">
                      <label className="text-sm font-bold text-gray-500 tracking-wide">
                        Attach Document
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                          <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              />
                            </svg>
                            <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                              <img
                                className="has-mask h-36 object-center"
                                src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                                alt="freepik image"
                              />
                            </div>
                            <p className="pointer-none text-gray-500 ">
                              <span className="text-sm">Drag and drop</span> files
                              here <br /> or{" "}
                              <a
                                href=""
                                id=""
                                className="text-blue-600 hover:underline"
                              >
                                select a file
                              </a>{" "}
                              from your computer
                            </p>
                          </div>
                          <input type="file" className="hidden" />
                        </label>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">
                      <span>File type: doc,pdf,types of images</span>
                    </p>
                    <div>
                      <button
                        type="submit"
                        className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                      >
                        Upload
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            : null}

            {showText ? 
            <div className="flex justify-between space-x-8" >
              <div className="w-1/2">
                <div className="mt-8">
                  <div className="flex  w-full h-screen">
                    <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-5/6 p-2 text-center">
                      <div className="h-full w-full rounded-lg text-center bg-purple-700 flex flex-col items-center justify-center items-center  ">
                        <p className="text-xl font-bold text-white p-10">
                          Bukankah hidup ini sebetulnya mudah? Jika rindu,
                          datangi. Jika tidak senang, ungkapkan. Jika cemburu,
                          tekankan. Jika lapar, makan. Jika mulas, buang air.
                          Jika salah, betulkan. Jika suka, nyatakan. Jika
                          sayang, tunjukkan. Manusianya yang sering kali
                          mempersulit segala sesuatu. Ego mencegah seseorang
                          mengucap "Aku membutuhkanmu".
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <form className="mt-8 space-y-8 pl-4" action="#" method="POST">
                  <div className="grid grid-cols-1 space-y-2">
                    <label className="text-sm font-bold text-gray-500 tracking-wide">
                      Font
                    </label>
                    <div className="flex justify-between space-x-4">
                      <button>
                        <div className="flex items-center justify-center ">
                          <div className="">
                            <img src="https://img.icons8.com/ios/40/000000/text.png" alt="text" />
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm font-normal">font awesome</p>
                        </div>
                      </button>
                      <button>
                        <div className="flex items-center justify-center ">
                          <div className="">
                            <img src="https://img.icons8.com/ios/40/000000/sentence-case.png" alt="text" />
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm font-normal">font awesome</p>
                        </div>
                      </button>
                      <button>
                        <div className="flex items-center justify-center ">
                          <div className="">
                            <img src="https://img.icons8.com/ios/40/000000/text.png" alt="text" />
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm font-normal">font awesome</p>
                        </div>
                      </button>
                      <button>
                        <div className="flex items-center justify-center ">
                          <div className="">
                            <img src="https://img.icons8.com/ios/40/000000/sentence-case.png" alt="text" />
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm font-normal">font awesome</p>
                        </div>
                      </button>
                      <button>
                        <div className="flex items-center justify-center ">
                          <div className="">
                            <img src="https://img.icons8.com/ios/40/000000/text.png" alt="text" />
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm font-normal">font awesome</p>
                        </div>
                      </button>
                      <button>
                        <div className="flex items-center justify-center ">
                          <div className="">
                            <img src="https://img.icons8.com/ios/40/000000/sentence-case.png" alt="text" />
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm font-normal">font awesome</p>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 space-y-2">
                    <label className="text-sm font-bold text-gray-500 tracking-wide">
                      Align
                    </label>
                    <div className="flex justify-center space-x-6">
                      <button>
                        <div className="flex items-center justify-center ">
                          <div className="">
                            <img src="https://img.icons8.com/ios-glyphs/30/000000/align-right.png" alt="text" />
                          </div>
                        </div>
                      </button>
                      <button>
                        <div className="flex items-center justify-center ">
                          <div className="">
                            <img src="https://img.icons8.com/ios-glyphs/30/000000/align-justify.png" alt="text" />
                          </div>
                        </div>
                      </button>
                      <button>
                        <div className="flex items-center justify-center ">
                          <div className="">
                            <img src="https://img.icons8.com/ios-glyphs/30/000000/align-center.png" alt="text" />
                          </div>
                        </div>
                      </button>
                      <button>
                        <div className="flex items-center justify-center ">
                          <div className="">
                            <img src="https://img.icons8.com/ios-glyphs/30/000000/align-left.png" alt="text" />
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 space-y-2">
                    <label className="text-sm font-bold text-gray-500 tracking-wide">
                      Color
                    </label>
                    <div className="flex justify-center space-x-4">
                      {colors.map((color) => (
                        <div className="flex inline py-1.5">
                          <button className="h-10 w-10 flex flex-col border border-gray-300 rounded-full overflow-hidden focus:ring-2 focus:ring-offset-1 focus:ring-gray-900 focus:outline-none">
                            <span className="h-full w-full flex flex-col transform">
                              <span
                                className="h-10 w-10"
                                style={{ backgroundColor: color.color }}
                              ></span>
                            </span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 space-y-2">
                    <label className="text-sm font-bold text-gray-500 tracking-wide">
                      Author
                    </label>
                    <input
                      className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                      type=""
                      placeholder="author name"
                    />
                  </div>
                  <div className="grid grid-cols-1 space-y-2">
                    <label className="text-sm font-bold text-gray-500 tracking-wide">
                      Tags
                    </label>
                    <TagsInput
                      label="Tags"
                      id="tags"
                      name="tags"
                      placeholder="Add tag"
                      onChange={changeHandler}
                      error={errors.tags}
                      defaultTags={tags}
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            : null}
          </div>
        </div>
      </main>
    </>
  );
};

export default Word;
