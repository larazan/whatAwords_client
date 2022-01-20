import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandWord } from "../../actions/words_actions";

const NewsReel = () => {
  const dispatch = useDispatch();
  const wordRand = useSelector((state) => state.wordRand);
  const { loading, error, word, author } = wordRand;

  useEffect(() => {
    dispatch(getRandWord());
  }, [dispatch]);

  console.log(word);

  return (
    <>
      <div className="px-4 py-3 bg-gradient-pink-orange text-white">
        <p className="flex text-xs font-semibold text-center justify-center items-center">
          {loading ? (
            <>
              <div
                style={{ borderTopColor: "transparent" }}
                className="w-3 h-3 border-2 border-white-900 border-solid rounded-full animate-spin"
              ></div>
            </>
          ) : error ? (
            `"Know your enemy and know yourself and you can fight a hundred battles without disaster" - Sun Tzu`
          ) : (
            `"${word.words}" - ${author}`
          )}
        </p>
      </div>
    </>
  );
};

export default NewsReel;
