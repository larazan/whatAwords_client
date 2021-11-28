import React from "react";
import Masonry from "react-masonry-css";
import { Link, useLocation } from "react-router-dom";

const CardMasonry = ({ contents }) => {
  const grads = [
    "bg-gradient-card-sunrise",
    "bg-gradient-card-blue",
    "bg-gradient-card-seafoam",
    "bg-gradient-card-gold",
  ];

  const randomGrad = () => {
    let mat = Math.floor(Math.random() * grads.length);
    return grads[mat];
  };

  const fontFamily = [
    "Aelten",
    "Alphakind",
    "Amellis",
    "Mollusca",
    "Bajurie",
    "Banda-Aceh",
    "Bitcrusher",
    "Blue_highway_cd",
    "Borg",
    "Bright-Dreams",
    "Chandella",
    "Chinese-Rocks",
    "Cokobi",
    "Colombia",
    "ConcreteWall",
    "Coolvetica",
    "Dakwart",
    "DAGOCA",
    "Dealerplate-California",
    "Dream-Orphans",
    "Elliane-Regular",
    "Engebrechtre",
    "ENGINE",
    "Foo",
    "Gnuolane",
    "Gratise",
    "Groomer",
    "Halmera",
    "HappyGarden",
    "Hellohowareyou",
    "Helsinki",
    "Inter-Regular",
    "Jreeng",
    "JustSmile",
    "Kaylafiz",
    "Kimberley",
    "LazySunday",
    "Leorio",
    "Limejuice",
    "Lovetle",
    "Lynoselt",
    "MatSaleh",
    "MelocheBook",
    "MightyKingdom",
    "Monofonto",
    "Morganite-Light",
    "MorningMiow",
    "Mounets",
    "NoVirus",
    "NugoSansLight",
    "Oaklevin",
    "Ontel",
    "Peace",
    "PeachyRose",
    "Pouline",
    "Pretender",
    "QuickCount",
    "Rakesly",
    "Rennoya",
    "ROLAND",
    "Saolice",
    "SimpalaExtended",
    "SingleSleeve",
    "StraightlerRegular",
    "SweetSomeday",
    "Tahu",
    "Thruster-Regular",
    "VirusKiller",
    "WallabysJunior",
    "WanitaCantik",
    "ZZYZX",
    "WhereTheCookies",
    "WKSimple",
    "Arvo-Regular",
    "Cinzel-Regular",
    "Domine-Regular",
    "LiberationSerif-Regular",
    "Lustria-Regular",
    "Mohave-Regular",
    "Montserrat-Regular",
    "NotoSans-Regular",
    "Promesh_Regular",
    "Raleway-Regular",
    "Rubik-Regular",
    "Zaio",
    "Antonio-Regular",
    "Bitter-Regular",
    "COBAISSI",
    "CrimsonText-Roman",
  ];

  const randomFamily = () => {
    let mat = Math.floor(Math.random() * fontFamily.length);
    return fontFamily[mat];
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
         
          <div className={`flex rounded-lg bg-gradient-to-b ${randomGrad()} p-8 justify-center items-center cursor-zoom-in`} key={index}>
           <Link
          to={{
            pathname: `/detail/${content._id}`,
          }}
          className="cursor-zoom-in"
        >
          <div className="flex-grow py-2 lg:py-4 md:py-4">
            <p className="leading-relaxed text-base text-black text-center text-xs md:text-xl lg:text-2xl" style={{ fontFamily: `${randomFamily()}` }}>
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
