import React from 'react'
import { Link, useLocation } from "react-router-dom";

const UniPaginate = ({ page, results, url, params}) => {
    return (
        <>
            <div className="flex justify-center mb-20">
        {parseInt(page) - 1 === 0 ? null : (
        <Link to={parseInt(page) - 1 === 0 ? `/${url}/${params}` : `/${url}/${params}?page=${parseInt(page) - 1}`}>
          <button className={`border border-green-500 text-green-500 block rounded-sm font-bold py-4 px-6 mr-2 flex items-center ${parseInt(page) - 1 === 0 ? `` : `hover:bg-green-500 hover:text-white`}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Previous page
          </button>
          </Link>
          )}
          <button className="border border-green-500 bg-green-500 text-white block rounded-sm font-bold py-4 px-6  mr-2 flex items-center">
            {parseInt(page)}
          </button>
          {parseInt(results) < 50 ? null : (
          <Link to={`/${url}/${params}?page=${parseInt(page) + 1}`}>
          <button className="border border-green-500 text-green-500 block rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-green-500 hover:text-white">
            Next page
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
          </Link>
          )}
        </div>
        </>
    )
}

export default UniPaginate
