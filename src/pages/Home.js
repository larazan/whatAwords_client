import React, { useState, useEffect, useRef } from "react";
// import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from "react-redux";
import { getWords, getWordsInfinite } from "../actions/words_actions";

import Tags from "../components/Tags";
import Skeleton from "../components/Skeleton";
import Paginate from "../components/Paginate";
import Count from "../components/Count";
import Filter from "../components/Filter";
import CardMasonry from "../components/CardMasonry";

const Home = ({ match }) => {
  // const [page,setPage] = useState(1)

  const pageNumber = match.params.pageNumber || 1;

  const wordsList = useSelector((state) => state.wordsList);
  const dispatch = useDispatch();
  const { loading, error, words, results, count } = wordsList;

  useEffect(() => {
    dispatch(getWords(pageNumber));
    // dispatch(getWordsInfinite(page, words))
    // setPage(prevState => prevState + 1)
    window.scrollTo(0, 0);
  }, [dispatch, pageNumber]);

  console.log(words);

  // const fetchWords = () => {
  //   setPage(prevState => prevState + 1)
  //   setTimeout(() => {
  //       if(hasMore){
  //           // dispatch(getWords(page))
  //           dispatch(getWordsInfinite(page, words))
  //       }
  //   },1000)
  // }

  return (
    <>
      <main>
        <Filter />

        <div className="px-8 z-9 md:container md:mx-auto md:px-8">
          <Tags />

          <Count page={pageNumber} results={results} count={count} />

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
          <Paginate page={pageNumber} results={results} />
        </div>
      </main>
    </>
  );
};

export default Home;
