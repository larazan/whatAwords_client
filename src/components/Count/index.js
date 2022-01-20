import React from 'react'

const Count = ({ page = 0, results = 0, count = 0}) => {
  const res = () => {
    return parseInt(page) * parseInt(results)
  }
    return (
        <>
          <div className="mt-4">
            <div className="flex justify-between">
              <div className="text-sm md:text-base font-light">
                {res()} of {count} results
              </div>
            </div>
          </div>
        </>
    )
}

export default Count
