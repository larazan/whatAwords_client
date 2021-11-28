import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWordsByAuthor } from "../../actions/words_actions";
import { getAuthorByName } from "../../actions/authors_actions";

import Skeleton from "../Skeleton";
import Card from "../Card";
import Count from "../Count";
import CardMasonry from "../CardMasonry";
import Filter from "../Filter";

const Author = ({ history, match }) => {
  const [slug, setSlug] = useState("");

  const wordsByAuthor = useSelector((state) => state.wordsByAuthor);
  const dispatch = useDispatch();
  const { loading, error, words, page, results, count } = wordsByAuthor;

  const authorByName = useSelector((state) => state.authorByName);
  const {
    success: successDetailAuthor,
    loading: loadingDetailAuthor,
    error: errorDetailAuthor,
    author,
  } = authorByName;

  useEffect(() => {
    setSlug(match.params.slug);
    dispatch(getWordsByAuthor(match.params.slug));
    dispatch(getAuthorByName(match.params.slug));
    window.scrollTo(0, 0);
  }, [dispatch, match]);

  // console.log(words);
  // console.log(results);
  // console.log(author);

  return (
    <>
      <main>
        <Filter />

        <div className=" px-8 z-9 md:container md:mx-auto md:px-8">

          <div className="relative mt-10 flex flex-col min-w-0 break-words w-full ">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div className="relative">
                  <img
                    alt="..."
                    src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                    className="shadow-xl rounded-full h-auto align-middle border-none sm:w-20 lg:w-60"
                  />
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
            
              <h3 className="text-xl lg:text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                {author.name}
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 font-bold uppercase">
                <i className="mr-2 md:text-lg lg:text-lg text-blueGray-400"></i>
                {author.bio}
              </div>
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-base md:text-lg lg:text-lg leading-relaxed">
                    An artist of considerable range, Jenna the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
                  </p>
                  <a href="#pablo" className="font-normal text-pink-500">
                    Show more
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-10 py-2 border-t"></div>
          </div>

          <Count page={page} results={results} count={count} />

          <div className="mt-5 mb-20 flex flex-wrap -m-4">
            {loading ? (
              <Skeleton />
            ) : error ? (
              <h2>{error}</h2>
            ) : (
              <>
                <CardMasonry contents={words} />
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Author;
