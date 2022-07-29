import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import qs from "qs"
import useDebounce from "../hooks/useDebounce";
import { useDispatch, useSelector } from "react-redux";
import { getRiddles, getRiddle, getRiddleNext, getRiddlePrev } from "../actions/words_actions";

import Nav from "../components/Nav";
import Message from "../components/Message";

const Riddle = ({ match }) => {
  const riddId = match.params.id;

  // const [id, setId] = useState(null);
  // const [questions, setQuestions] = useState([]);
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  // const [params, setParams] = useState(null)
  const [hScreen, setHScreen] = useState(0)
  const [hHeader, setHHeader] = useState(0)
  const [hReel, setHReel] = useState(0)
  const [hContent, setHContent] = useState(400)
  
  const dispatch = useDispatch();

  // const wordsRiddle = useSelector((state) => state.wordsRiddle);
  // const { loading: loadingRiddles, error: errorRiddles, words } = wordsRiddle;
  
  const wordRiddleNext = useSelector((state) => state.wordRiddleNext);
  const { loading: loadingNextRiddle, error: errorNextRiddle, wordNext, idNext } = wordRiddleNext;

  const wordRiddlePrev = useSelector((state) => state.wordRiddlePrev);
  const { loading: loadingPrevRiddle, error: errorPrevRiddle, wordPrev, idPrev } = wordRiddlePrev;

  const wordRiddle = useSelector((state) => state.wordRiddle);
  const { loading, error, word } = wordRiddle;

  useEffect(() => {
    // dispatch(getRiddles());
    dispatch(getRiddleNext(match.params.id))
    dispatch(getRiddlePrev(match.params.id))
    dispatch(getRiddle(match.params.id))
    setHScreen(window.innerHeight)
    setHHeader(document.getElementById('header').clientHeight)
    setHReel(document.getElementById('reel').clientHeight)
    setHContent(hScreen - hHeader - hReel)
    window.scrollTo(0, 0);
    setShowAnswer(false)
  }, [dispatch, match, hScreen, hHeader, hReel]);

  // console.log(words);
  console.log(word);
  
  const history = useHistory()
  const location = useLocation()

  // const debouncedUpdateUrl = useDebounce(updateUrl, 200);

  // useEffect(() => {
  //   const queryParams = new URLSearchParams(location.search)
  //   const qid = queryParams.get('id')
  //   const qx = queryParams.get('x')
  //   const qy = queryParams.get('y')
  //   setId(qid)
  //   setParams(qs.stringify({ id:qid, x:qx, y:qy }))
  // }, [])
  
  // console.log(params);

  // const updateUrl = () => {
  //   const queryParams = new URLSearchParams(location.search)
  //   const qid = queryParams.get('id')
  //   const qx = queryParams.get('x')
  //   const qy = queryParams.get('y')
    
  //   var newParams = qs.stringify({
  //     id: qid,
  //     x: qx,
  //     y: qy,
  //   });

  //   // window.history.pushState('/riddle', "", "?" + newParams);
  //   history.push({
  //     pathname: '/riddle',
  //     search: "?"+newParams
  //   })
    
  // };

  // const parseUrl = () => {
  //   var params = window.location.search.replace(/^\?|\/$/g, ""),
  //     params_obj = qs.parse(params),
  //     cleaned = {};

  //   _.forEach(params_obj, function (val, key) {
  //     var num = parseInt(val);
  //     if (_.isFinite(num) && _.includes(["x", "y", "id"], key)) {
  //       cleaned[key] = num;
  //     }
  //   });

  //   return cleaned;
  // };

  // const fetchGame = (params) => {
  //   if (!params) params = {};

  //       var id = params.id || $('#show-num').data('id'),
  //           url = '/data?id=' + id;

  //       var self = this;
  //       $.get(url, function(data) {
  //           self.setState(_.assign(params, {
  //               id: id,
  //               questions: data.questions
  //           }), self.updateUrl);
  //       });
  // };

  // const keyPress = (e) => {
  //   var whitelist = {
  //     38: "up",
  //     40: "down",
  //     37: "left",
  //     39: "right",
  //     32: "space",
  //   };

  //   var key = whitelist[e.keyCode];

  //   if (!key) return;
  //   if (key == "space") return this.toggleAnswer();
  //   else return this.navClick(key);
  // };

  const toggleAnswer = () => {
    setShowAnswer((prev) => !prev);
  };

  // const navClick = (id) => {
  //   // var questions = questions,
  //   var pos = getNewPosition(id);

  //   if (
  //     questions[pos.x] === undefined ||
  //     questions[pos.x][pos.y] === undefined
  //   ) {
  //     return;
  //   }

  //   updatePosition(pos);
  // };

  // const getNewPosition = (direction) => {
  //   // var questions = questions,
  //   //   x = x,
  //   //   y = y;

  //   if (direction == "up") y -= 1;
  //   if (direction == "down") y += 1;
  //   if (direction == "left") x -= 1;

  //   // special case (if navigating to final jep)
  //   if (direction == "right") {
  //     x += 1;
  //     if (x == questions.length - 1) y = 0;
  //   }

  //   return {
  //     x: x,
  //     y: y,
  //   };
  // };

  // const updatePosition = (pos) => {
  //   setX(pos.x);
  //   setY(pos.y);
  //   setShowAnswer(false);
  //   // updateUrl();
  // };

  // let pos = [x, y];

  return (
    <>
      <main className="riddle" style={{ height : `${hContent}px`}}>
        <div className=" flex w-full relative2 py-6 md:py-12">
        {loading ? (
                <div className='flex items-center justify-center'>
                <div className=" w-4 h-4 border-2 border-dashed rounded-full border-slate-500 animate-spin"></div>
            </div>
              ) : error ? (
                <Message />
              ) : (
          <div className="flex-col md:py-5 px-6 md:px-16 space-y-6 md:space-y-10">
            <div className="text-lg md:text-4xl font-bold text-white leading-loose">
              {word.words}
            </div>
            <div className={`answer text-lg md:text-4xl font-bold ${showAnswer === false ? 'hidden' : ''}`}>
              {word.answer}
            </div>
          </div>
          )}
          <Nav 
            next={idNext}
            prev={idPrev}
            riddId={riddId}
            // onClick={navClick}
            toggleAnswer={toggleAnswer} 
            // updatePosition={updatePosition}
          />
        </div>
      </main>
    </>
  );
};

export default Riddle;
