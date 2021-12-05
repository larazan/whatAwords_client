import React from "react";
import Masonry from "react-masonry-css";
import { Link, useLocation } from "react-router-dom";

import { fontFamilies } from '../../assets/data/fontFamilies';
import { gradients } from '../../assets/data/gradients';

const CardMasonry = ({ contents }) => {
  const location = useLocation();

  const randomGrad = () => {
    let mat = Math.floor(Math.random() * gradients.length);
    return gradients[mat]['tail'];
  };

  const randomFamily = () => {
    let mat = Math.floor(Math.random() * fontFamilies.length);
    return fontFamilies[mat];
  };

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
        {
        contents.map((content, index) => (
         
          <div className={`flex rounded-lg ${randomGrad()} p-6 md:p-8 lg:p-8 justify-center items-center cursor-zoom-in`} key={index}>
           <Link
          to={{
            pathname: `/detail/${content._id}`,
            state: { background: location },
            // pathname: `/detail/${content._id}`,
          }}
          className="cursor-zoom-in"
        >
          <div className="flex-grow py-2 lg:py-4 md:py-4">
            <p className="leading-relaxed text-black text-center text-xl md:text-xl lg:text-2xl" style={{ fontFamily: `${randomFamily()}` }}>
              {content.words}
            </p>
            {content.author.name && (
              <span className="px-0 md:px-2 lg:px-4 pt-4 text-xs md:text-sm lg:text-sm text-black float-right">
                - {content.author.name}
              </span>
            )}
            
          </div>
          </Link>
        </div>
       
        ))}
        
      </Masonry>
    </>
  );
};

export default CardMasonry;
