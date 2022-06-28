import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTags } from "../../actions/tags_actions";

const Sidebar = ({ isSideOpen, toggleSide }) => {
  const dispatch = useDispatch();

  const tagList = useSelector((state) => state.tagList);
  const { loading, error, tags } = tagList;

  useEffect(() => {
    dispatch(getTags());
  }, [dispatch]);

  return (
    <>
      <aside
        className={`px-8 transform top-0 right-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          isSideOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="mt-4">
            <button className="h-8 w-8" onClick={toggleSide}>
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
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="bg-white mt-6">
          <div>
            <div className="mt-4">
              <div className="font-semibold text-base">
                <p>Tags By:</p>
              </div>
              <div className="border-t mt-4"></div>
              <div className="mt-2 flex flex-wrap space-2">
                {loading ? (
                  <h3>Loading...</h3>
                ) : error ? (
                  <p>{error}</p>
                ) : (
                  <>
                    {tags.map((tag, index) => (
                      <Link to={`/tags/${tag.slug}`}>
                        <a
                          className="m-1 bg-gradient-jams2 hover:bg-gradient-pink-orange2 bg-gray-200 inline-flex items-center justify-center px-3 py-1 rounded-full border text-gray-500 cursor-pointer font-light"
                          key={index}
                        >
                          <span className="text-xs">{tag.name}</span>
                        </a>
                      </Link>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
