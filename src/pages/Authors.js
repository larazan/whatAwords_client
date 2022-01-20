import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthorByAlphabet } from "../actions/authors_actions";

import Filter from "../components/Filter";
import Spinner from "../components/Spinner";

const Authors = ({ history, match }) => {
  const [alpha, setAlpha] = useState("a");

  const authorByAlphabet = useSelector((state) => state.authorByAlphabet);
  const dispatch = useDispatch();
  const { loading, error, authors } = authorByAlphabet;

  useEffect(() => {
    if (match.params.id) {
      setAlpha(match.params.id);
    }
    
    dispatch(getAuthorByAlphabet(match.params.id));
    window.scrollTo(0, 0)
  }, [dispatch, match]);

  console.log(authors);
  console.log(alpha);

  const abjad = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  
  return (
    <>
      <main>
        <Filter />

        <div className="px-8 z-9 md:container md:mx-auto md:px-8">
          <div>
          <div className="flex items-center justify-between pt-2 ">
            <div className="top-0 py-3 flex overflow-x-auto scrollbars-hidden">
              <div className="flex inline-flex space-x-3">
                {abjad.map((huruf) => (
                  <Link to={`/authors/${huruf}`}>
                    <div className={` px-4 py-2 bg-white  border border-gray-300 cursor-pointer ${match.params.id === huruf || alpha === huruf ? 'bg-blue-600 text-white border-blue-700' : 'hover:bg-gray-200'}  font-normal`}>
                      <span className="text-sm font-semibold uppercase">
                        {huruf}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold uppercase">{alpha}</h1>
          </div>
        </div>

        <div className="">
          <section className="flex flex-row flex-wrap justify-between mb-10">
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8">
              {
              loading ? (<Spinner width={10} height={10} />) : error ? <h2>{error}</h2> :
              authors.map((author, index) => (
                <Link to={`/author/${author.slug}`}>
                  <div
                    className="relative bg-white py-4 px-6 rounded-3xl min-w-32 my-2 shadow-xl bg-gray-200 md:hover:shadow-xl md:hover:bg-gray-200"
                    key={index}
                  >
                    <div className="">
                      <div className="flex items-center justify-center ">
                        <div className="text-white rounded-full py-4 px-4 shadow-xl bg-pink-500">
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
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-center font-normal">
                          {author.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
        </div>
      </main>
    </>
  );
};

export default Authors;
