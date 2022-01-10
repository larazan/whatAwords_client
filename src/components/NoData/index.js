import React from 'react'

const NoData = () => {
    return (
        <>
            <div className="py-8">
              <div class="col-sm-8 offset-sm-2 text-gray-500 text-center">
                <div class="relative">
                  <div class=" text-md text-gray-500 font-semibold -ml-12">
                    Oops!
                  </div>
                  <h1 class="relative text-9xl tracking-tighter-less text-shadow font-sans font-bold -mt-6">
                    <span>4</span>
                    <span>0</span>
                    <span>4</span>
                  </h1>
                </div>
                <h5 class="text-gray-500 font-semibold -mr-10 -mt-2">
                  data not found
                </h5>
                <p class="text-gray-400 mt-2 mb-6">
                  we are sorry, but data you requested was not found
                </p>
              </div>
            </div>
        </>
    )
}

export default NoData
