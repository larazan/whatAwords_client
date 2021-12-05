import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserFollower } from "../actions/user_actions";

import DashboardHead from "../components/DashboardHead";
import Skeleton from "../components/Skeleton";

const Follower = ({ history, match }) => {
  const dispatch = useDispatch();
  const userFollower = useSelector((state) => state.userFollower);
  const { loading, error, user, followers } = userFollower;

  useEffect(() => {
    dispatch(getUserFollower(match.params.id));
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
            <h1>Follower</h1>
          </section>
        </div>
      </main>
    </>
  );
};

export default Follower;
