import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import Matrix from '../Matrix'

const Nav = ({
    next,
    prev,
    riddId,
    // onClick,
    toggleAnswer,
    // updatePosition
}) => {
    // const [showMatrix, setShowMatrix] = useState(false)

    const arrows = [
      {
        arrow: "left",
        svg: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
        url: prev
      },
      // {
      //   arrow: "down",
      //   svg: "M1 12 L16 26 L31 12 L27 8 L16 18 L5 8 z",
      // },
      // {
      //   arrow: "up",
      //   svg: "M1 20 L16 6 L31 20 L27 24 L16 14 L5 24 z",
      // },
      {
        arrow: "right",
        svg: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
        url: next
      },
    ];

    // const clickHandler = (btn, e) => {
    //     onClick(btn)
    // }

    const answerClick = () => {
        toggleAnswer()
    }

    // const matrixClick = () => {
    //     setShowMatrix((prev) => !prev)
    // }

    // const movability = (pos) => {
    //     var x = pos[0],
    //         y = pos[1],
    //         move = {up: true, down: true, left: true, right: true};

    //     if (x === 0) move.left = false;
    //     if (x >= 12) move.right = false;
    //     if (y === 0) move.up = false;
    //     if (y >= 4 || (x === 12 && y === 0)) move.down = false;

    //     return move;
    // }

    // let move = movability(pos);

  return (
    <>
        <div className="absolute riddle bottom-0 px-6 py-3 w-full ">
            <div className="">
              {/* <Matrix  
                pos={pos}
                updatePosition={updatePosition}
                showing={showMatrix}
              /> */}
              <div className="flex justify-end space-x-2 w-full items-center leading-none text-white text-base">
                <button className="p-3 tombol hover:bg-blue-900" onClick={answerClick}>
                  <span className="font-semibold">Answer</span>
                </button>
                {arrows.map((a) => (
                  <Link 
                    to={{
                      pathname: `${a.url === undefined ? '/riddle/'+riddId : '/riddle/'+a.url } `,
                      // search: `id=${a.url}`
                    }}
                    key={a.arrow}
                  > 
                    <div 
                        // key={a.arrow}
                        // type="button"
                        className={`p-2 tombol ${a.url === undefined ? '' : 'hover:bg-blue-900'} `}
                        // onClick={clickHandler(a.arrow)}
                        // disabled={!move[a.arrow]}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path 
                          d={a.svg}
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                ))}
                {/* <button className="p-2 tombol">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button className="p-2 tombol">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button className="p-2 tombol">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button className="p-2 tombol">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button> */}
                {/* <button className="p-2 tombol" onClick={matrixClick}>
                  <svg
                    className="h-6 w-6"
                    data-icon="grid"
                    viewBox="0 0 32 32"
                    fill="#fff"
                    data-reactid=".0.3.1.3.0"
                  >
                    <path
                      d="M2 2 L10 2 L10 10 L2 10z M12 2 L20 2 L20 10 L12 10z M22 2 L30 2  L30 10 L22 10z M2 12 L10 12 L10 20 L2 20z M12 12 L20 12 L20 20 L12  20z M22 12 L30 12 L30 20 L22 20z M2 22 L10 22 L10 30 L2 30z M12 22  L20 22 L20 30 L12 30z M22 22 L30 22 L30 30 L22 30z"
                      data-reactid=".0.3.1.3.0.0"
                    ></path>
                  </svg>
                </button> */}
              </div>
            </div>
          </div>
    </>
  )
}

export default Nav