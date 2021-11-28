import React, { useState } from "react";

import Sidebar from "../Sidebar";
import SearchBox from "../SearchBox";

const Filter = () => {
    const [isSideOpen, setIsSideOpen] = useState(false);

    const toggleSide = () => {
        setIsSideOpen(!isSideOpen);
    };

    return (
        <>
            <div className="md:hidden">
          <div className="flex items-center justify-between space-x-3 px-6 pt-4 pb-3 md:px-12 ">
              <SearchBox />
            <div>
              <button className="block h-6 w-6" onClick={toggleSide}>
                <svg
                  className="transform rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </button>
            </div>
            <Sidebar isSideOpen={isSideOpen} toggleSide={toggleSide} />
          </div>
        </div>
        </>
    )
}

export default Filter
