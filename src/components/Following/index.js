import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserFollowing } from "../../actions/user_actions";

import DashboardHead from "../DashboardHead";
import Skeleton from "../Skeleton";

const Following = ({ history, match }) => {
  const dispatch = useDispatch();
  const userFollowing = useSelector((state) => state.userFollowing);
  const { loading, error, user, following } = userFollowing;

  useEffect(() => {
    dispatch(getUserFollowing(match.params.id));
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
            <h1>Following</h1>
          </section>
        </div>
      </main>
    </>
  );
};

export default Following;
