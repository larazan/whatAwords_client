import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getWordsBySearch } from "../actions/words_actions";

import Tags from "../components/Tags";
import SkeletonMasonry from "../components/SkeletonMasonry";
import Count from "../components/Count";
import UniPaginate from "../components/UniPaginate";
import Filter from "../components/Filter";
import CardMasonry from "../components/CardMasonry";

const Search = ({ match }) => {
  const { search } = useLocation();
  const paginParams = new URLSearchParams(search);
  const page = paginParams.get("page") || 1;
  const keyword = match.params.keyword;

  const wordsSearch = useSelector((state) => state.wordsSearch);
  const dispatch = useDispatch();
  const { loading, error, words, count, results } = wordsSearch;

  useEffect(() => {
    dispatch(getWordsBySearch(keyword, parseInt(page)));
    window.scrollTo(0, 0);
  }, [dispatch, keyword, page]);

  console.log(words);

  return (
    <>
      <main>
        <Filter />

        <div className="md:hidden">
          <div className="flex items-center justify-between px-8 pt-2 md:px-12 ">
            {/* breadcrumb */}
            <div>
              <div className="text-sm font-bold space-x-1">
                <a
                  href="#"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-red-500 to-orange-600"
                >
                  You search
                </a>
                <span>:</span>
              </div>
              <h1 className="text-lg capitalize font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-red-500 to-orange-600 md:text-xl">
                {keyword}
              </h1>
            </div>

            {/* <div>
                <div className="text-right text-xs font-bold text-gray-900 space-x-1">
                    <div className="">
                        Find
                    </div>
                </div>
                <h1 className="text-right text-sm font-bold text-gray-900 md:text-xl">
                    {count} Quotes
                </h1>
            </div> */}
          </div>
        </div>

        <div className="px-8 z-9 md:container md:mx-auto md:px-8">
          <Tags />
          <div className="hidden md:flex mt-6 leading-none tracking-tight text-gray-900 ">
            <p
              className="text-transparent text-6xl sm:text-2xl md:text-4xl bg-clip-text bg-gradient-to-r from-pink-600 via-red-500 to-orange-600"
              style={{ fontFamily: "Peace" }}
            >
              You search:{" "}
              <span className="text-orange-600 underline">{keyword}</span>
            </p>
          </div>
          <Count page={page} results={results} count={count} />

          <div className="mt-5 mb-20 flex flex-wrap -m-4 ">
            {loading ? (
              <SkeletonMasonry />
            ) : error ? (
              <h2>{error}</h2>
            ) : (
              <CardMasonry contents={words} />
            )}
          </div>

          <UniPaginate
            page={page}
            result={results}
            url={"search"}
            params={match.params.keyword}
          />
        </div>
      </main>
    </>
  );
};

export default Search;
