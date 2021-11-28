import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
} from "react-router-dom";
import { getTags } from "../../actions/tags_actions";

const Tags = () => {
  const tagList = useSelector((state) => state.tagList);
  const dispatch = useDispatch();
  const { loading, error, tags } = tagList;

  useEffect(() => {
    dispatch(getTags());
  }, [dispatch]);

  // console.log(tags);

  return (
    <>
      <div className="hidden lg:block ">
        <div className="flex items-center justify-between pt-4 ">
          <div className="top-0 py-3 flex overflow-x-auto scrollbars-hidden">
            <div className="flex inline-flex justify-center space-x-4">
              {loading ? (
                <h3>Loading...</h3>
              ) : error ? (
                <p>{error}</p>
              ) : (
                <>
                  {tags.map((tag, index) => (
                    <Link to={`/tags/${tag.slug}`}>
                      <a
                        className="bg-gradient-jams hover:bg-gradient-pink-orange items-center justify-center px-4 py-2 rounded-full text-white cursor-pointer font-light"
                        key={index}
                      >
                        <span className="text-sm">{tag.name}</span>
                      </a>
                    </Link>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tags;
