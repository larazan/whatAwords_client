import React from "react";

// import Tags from "../components/Tags";
// import Filter from "../components/Filter";

const BlogDetail = ({ match }) => {
  return (
    <>
      <main>
        {/* <Filter /> */}

        <div className="px-8 z-9 md:container md:mx-auto md:px-8">
          {/* <Tags /> */}

          <div className="mt-5 mb-20 flex flex-wrap -m-4">
            <div className="content flex2 py-2 px-4">
              <div className="text-3xl py-2 mb-2">
                Firestore Tutorial for Flutter: Getting Started
              </div>
              <div className="py-4 -mt-8">
                <div>By Admin</div>
                <div className="flex inline-flex items-center space-x-1">
                  <span className="text-sm font-sans text-gray-400">
                    Jun 9 2021
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="sm:w-24 sm:h-24 md:w-48 md:h-48">
                <img
                  className="sm:w-24 sm:h-24 md:w-48 md:h-48 float-left mb-3 mr-6"
                  src="https://koenig-media.raywenderlich.com/uploads/2021/09/CreatingDynamicArtFlutterCanvas-feature.png"
                  alt=""
                />
              </div>
              <div className="item-body px-0 font-sans text-justify2 text-base">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogDetail;
