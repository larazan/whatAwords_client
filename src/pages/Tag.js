import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getWordsByTag } from "../actions/words_actions";

import Tags from "../components/Tags";
import Skeleton from "../components/Skeleton";
import Count from "../components/Count";
import Filter from "../components/Filter";
import UniPaginate from "../components/UniPaginate";
import CardMasonry from "../components/CardMasonry";

const Tag = ({ history, match }) => {
  const { search } = useLocation();
  const paginParams = new URLSearchParams(search);
  const page = paginParams.get("page") || 1;

  const dispatch = useDispatch();
  
  const wordsByTag = useSelector((state) => state.wordsByTag);
  const { loading, error, words, count, results } = wordsByTag;

  useEffect(() => {
    dispatch(getWordsByTag(match.params.tag, parseInt(page)));
    window.scrollTo(0, 0);
  }, [dispatch, match, page]);

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
                  Tag
                </a>
                <span>:</span>
              </div>
              <h1 className="text-lg capitalize font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-red-500 to-orange-600 md:text-xl">
                {match.params.tag}
              </h1>
            </div>
          </div>
        </div>

        <div className="px-8 z-9 md:container md:mx-auto md:px-8">
          <Tags />

          <div className="hidden md:flex mt-6 leading-none tracking-tight text-gray-900 ">
            <p
              className="text-transparent text-6xl sm:text-2xl md:text-4xl bg-clip-text bg-gradient-to-r from-pink-600 via-red-500 to-orange-600"
              style={{ fontFamily: "Peace" }}
            >
              Tag:{" "}
              <span className="text-orange-600 underline">{match.params.tag}</span>
            </p>
          </div>

          <Count page={page} results={results} count={count} />

          <div className="mt-5 mb-20 flex flex-wrap -m-4 ">
            {loading ? (
              <Skeleton />
            ) : error ? (
              <h2>{error}</h2>
            ) : (
              <CardMasonry contents={words} />
            )}
          </div>

          <UniPaginate
            page={page}
            result={results}
            url={"tags"}
            params={match.params.tag}
          />
        </div>
      </main>
    </>
  );
};

export default Tag;
