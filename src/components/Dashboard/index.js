import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getWordsByUser } from "../../actions/words_actions";

import DashboardHead from "../DashboardHead";
import Card from "../Card";
import Skeleton from "../Skeleton";
import UniPaginate from "../UniPaginate";

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



  return (
    <>
      <div className="bg-white pt-6 pb-3 border-b border-gray-200">
        <div className="md:container md:mx-auto md:px-8">
         <DashboardHead slug={match.params.id} />
         </div>
      </div>

      <main className="px-8 z-9 md:container md:mx-auto md:px-8">
        <div className="mb-20">
          <section className="flex flex-row flex-wrap mx-auto">
          {loading ? (
            <Skeleton />
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            words.map((content, index) => (
              <Card content={content} key={index} />
            ))
          )}
          </section>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
