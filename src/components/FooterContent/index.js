import React from "react";

const FooterContent = ({ sizeHandler,alignHandler, fontHandler, colorHandler }) => {
  return (
    <>
      {/*  */}
      <div className=" fixed bottom-0 z-20 w-full ">
        <div className="">
          <div className="flex justify-around w-full items-center bg-pink-600 leading-none2 text-white  text-sm">
            <button className="flex-col w-full justify-center p-3 md:p-2 items-center hover:bg-pink-700 space-y-1" onClick={sizeHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 md:h-8 md:w-8"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="5" cy="5" r="2"></circle>
                <circle cx="19" cy="5" r="2"></circle>
                <circle cx="5" cy="19" r="2"></circle>
                <circle cx="19" cy="19" r="2"></circle>
                <path d="M5 7v10"></path>
                <path d="M7 5h10"></path>
                <path d="M7 19h10"></path>
                <path d="M19 7v10"></path>
                <path d="M10 10h4"></path>
                <path d="M12 14v-4"></path>
              </svg>
              <span className="text-xs hidden md:block">Size</span>
            </button>
            <button className="flex-col w-full justify-center p-3 md:p-2 items-center hover:bg-pink-700 space-y-1" onClick={alignHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 md:h-8 md:w-8"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="12" x2="14" y2="12"></line>
                <line x1="4" y1="18" x2="18" y2="18"></line>
              </svg>
              <span className="text-xs hidden md:block">Align</span>
            </button>
            <button className="flex-col w-full justify-center p-3 md:p-2 items-center hover:bg-pink-700 space-y-1" onClick={fontHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 md:h-8 md:w-8"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="4" y1="20" x2="7" y2="20"></line>
                <line x1="14" y1="20" x2="21" y2="20"></line>
                <line x1="6.9" y1="15" x2="13.8" y2="15"></line>
                <line x1="10.2" y1="6.3" x2="16" y2="20"></line>
                <polyline points="5 20 11 4 13 4 20 20"></polyline>
              </svg>
              <span className="text-xs hidden md:block">Font</span>
            </button>
            <button className="flex-col w-full justify-center p-3 md:p-2 items-center hover:bg-pink-700 space-y-1" onClick={colorHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 md:h-8 md:w-8"
                style={{
                  verticalAlign: "middle",
                  fill: "currentColor",
                  overflow: "hidden",
                }}
                viewBox="0 0 1024 1024"
                version="1.1"
              >
                <path d="M512 128C300.802 128 128 300.802 128 512c0 211.208 172.802 384 384 384 36.272 0 64-27.728 64-64 0-17.062-6.396-32-17.062-42.666-10.666-10.668-17.062-25.606-17.062-42.668 0-36.27 27.728-64 64-64l76.792 0c117.334 0 213.334-96 213.334-213.332C896 281.604 723.208 128 512 128zM277.334 512c-36.272 0-64-27.728-64-64s27.728-64 64-64c36.27 0 64 27.728 64 64S313.604 512 277.334 512zM405.334 341.334c-36.272 0-64-27.73-64-64 0-36.272 27.728-64 64-64 36.27 0 64 27.728 64 64C469.334 313.604 441.604 341.334 405.334 341.334zM618.666 341.334c-36.27 0-64-27.73-64-64 0-36.272 27.73-64 64-64 36.272 0 64 27.728 64 64C682.666 313.604 654.938 341.334 618.666 341.334zM746.666 512c-36.27 0-64-27.728-64-64s27.73-64 64-64c36.272 0 64 27.728 64 64S782.938 512 746.666 512z" />
              </svg>
              <span className="text-xs hidden md:block">Color</span>
            </button>
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default FooterContent;
