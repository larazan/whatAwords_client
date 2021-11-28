import React from 'react'

const Count = ({ page, results, count}) => {
    return (
        <>
            <div className="mt-4">
          <div className="flex justify-between">
            <div className="text-sm md:text-base font-light">
              {parseInt(page) * parseInt(results)} of {count} results
            </div>
          </div>
        </div>
        </>
    )
}

export default Count
