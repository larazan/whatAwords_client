import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-300 py-12">
        <div className="mt-10 max-w-screen-lg xl:max-w-screen-xl mx-auto divide-y px-4 sm:px-6 md:px-8 ">
          <ul className="text-xs pb-14 sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-10 gap-x-10 text-center ">
            <li className="space-y-5 md:text-left">
              <h2 className="text-lg font-semibold uppercase">
                FOLLOW THE FLOCK
              </h2>
              <p className="text-base leading-relaxed">
                Exclusive offers, a heads up on new things, and sightings of
                Allbirds in the wild. Oh, we have cute sheep, too.
                #weareallbirds
              </p>

              <div className="items-center min-w-full">
                <div className="flex-auto">
                  <ul className="inline-flex space-x-5 ">
                    <li>
                      <a className="" href="#">
                        <img
                          src="https://cdn.allbirds.com/image/upload/q_auto/production/anchorLink/en-US/images/7ALf4NFNH4VStmrXU0qSKK/1"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a className="" href="#">
                        <img
                          src="https://cdn.allbirds.com/image/upload/q_auto/production/anchorLink/en-US/images/7jsrb2oMQypD1kO6iZLXZN/1"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a className="" href="#">
                        <img
                          src="https://cdn.allbirds.com/image/upload/q_auto/production/anchorLink/en-US/images/55ZLXdMQu728huA78Qlfkb/1"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a className="" href="#">
                        <img
                          src="https://cdn.allbirds.com/image/upload/q_auto/production/anchorLink/en-US/images/5VBkylibm5XkgzjDP153Mo/1"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="space-y-5 row-span-2 md:text-left">
              <h2 className="text-base font-semibold uppercase">Help</h2>
              <ul className="space-y-4 font-semibold">
                <li>
                  <a className="" href="#">
                    1-888-963-8944
                  </a>
                </li>
                <li>
                  <a href="#">1-814-251-9966</a>
                </li>
                <li>
                  <a href="#">help@allbirds.com</a>
                </li>
              </ul>
            </li>

            <li className="space-y-5 row-span-2 md:text-left">
              <h2 className="text-base font-semibold uppercase">Company</h2>
              <ul className="space-y-4 font-semibold">
                <li>
                  <a href="#">Our Stores</a>
                </li>
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Our Materials</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="container mx-auto px-3">
          <div className="">
            <p className="text-sm font-semibold leading-relaxed text-center">
              © 2021 Allbirds, Inc. All Rights Reserved. Terms, Privacy &
              Accessibility
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
