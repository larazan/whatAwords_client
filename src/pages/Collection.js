import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserCollection } from "../actions/user_actions";

import DashboardHead from "../components/DashboardHead";
import Card from "../components/Card";
import Skeleton from "../components/Skeleton";

const Collection = ({ history, match }) => {
  const dispatch = useDispatch();
  const userCollection = useSelector((state) => state.userCollection);
  const { loading, error, words, collections, user } = userCollection;

  useEffect(() => {
    dispatch(getUserCollection(match.params.id));
    window.scrollTo(0, 0);
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

export default Collection;
