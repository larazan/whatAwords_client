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
        <p className="text-xs font-semibold text-center">
          {loading ? (
                <>Loading...</>
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
