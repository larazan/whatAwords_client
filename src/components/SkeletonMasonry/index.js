import React from "react";
import Masonry from "react-masonry-css";

const SkeletonMasonry = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
    
    
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <div className="flex p-6 md:p-8 lg:p-8 rounded-lg bg-gray-100 justify-center items-center animate-pulse p-6 shadow-xl">
            <div className="px-0">
              <div className="space-y-3">
                <div className="w-full h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
              </div>
            </div>
        </div>

        <div className="flex p-6 md:p-8 lg:p-8 rounded-lg bg-gray-100 justify-center items-center animate-pulse p-6 shadow-xl">
            <div className="px-0">
              <div className="space-y-3">
                <div className="w-full h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
              </div>
            </div>
        </div>
        
        <div className="flex p-6 md:p-8 lg:p-8 rounded-lg bg-gray-100 justify-center items-center animate-pulse p-6 shadow-xl">
            <div className="px-0">
              <div className="space-y-3">
                <div className="w-full h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
              </div>
            </div>
        </div>

        <div className="flex p-6 md:p-8 lg:p-8 rounded-lg bg-gray-100 justify-center items-center animate-pulse p-6 shadow-xl">
            <div className="px-0">
              <div className="space-y-3">
                <div className="w-full h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
              </div>
            </div>
        </div>

        <div className="flex p-6 md:p-8 lg:p-8 rounded-lg bg-gray-100 justify-center items-center animate-pulse p-6 shadow-xl">
            <div className="px-0">
              <div className="space-y-3">
                <div className="w-full h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
              </div>
            </div>
        </div>
        
        <div className="flex p-6 md:p-8 lg:p-8 rounded-lg bg-gray-100 justify-center items-center animate-pulse p-6 shadow-xl">
            <div className="px-0">
              <div className="space-y-3">
                <div className="w-full h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
                <div className="w-36 h-5 rounded-sm bg-gray-200 animate-pulse"></div>
              </div>
            </div>
        </div>

      </Masonry>
      
    </>
  );
};

export default SkeletonMasonry;
