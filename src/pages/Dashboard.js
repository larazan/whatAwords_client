import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getWordsByUser } from "../actions/words_actions";

import DashboardHead from "../components/DashboardHead";
import CardMasonry from "../components/CardMasonry";
import Skeleton from "../components/Skeleton";
import UniPaginate from "../components/UniPaginate";

const Dashboard = ({ history, match }) => {
  const { search } = useLocation()
  const paginParams = new URLSearchParams(search)
  const page = paginParams.get('page') || 1

  const dispatch = useDispatch();
  const wordsByUser = useSelector((state) => state.wordsByUser);
  const {
    loading,
    error,
    words,
    results,
    count,
  } = wordsByUser;

  useEffect(() => {
    dispatch(getWordsByUser(match.params.id));
    window.scrollTo(0, 0)
  }, [dispatch, match]);

  console.log(words);

  return (
    <>
      <div className="bg-white pt-6 pb-3 border-b border-gray-200">
        <div className="md:container md:mx-auto md:px-8">
         <DashboardHead slug={match.params.id} />
         </div>
      </div>

      <main>
        <div className="px-8 z-9 md:container md:mx-auto md:px-8">
          <div className="mt-5 mb-20 flex flex-wrap -m-4">
          {loading ? (
            <Skeleton />
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            <CardMasonry contents={words} />
          )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
