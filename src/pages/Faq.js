import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFaqs } from "../actions/faq_actions";

const Faq = () => {
  const dispatch = useDispatch();

  const faqsList = useSelector((state) => state.faqsList);
  const { loading, error, faqs } = faqsList;

  useEffect(() => {
    dispatch(getFaqs());
  }, [dispatch]);

  console.log(faqs);

  return (
    <>
      <main>
        <div className="px-8 z-9 md:container md:mx-auto md:px-8">
          <div className="mt-5 mb-20 flex flex-wrap -m-4">
            <section className="md:bg-gray-100 md:p-6 md:mt-8">
              <div className="flex items-center justify-center text-center font-sans font-extrabold text-2xl md:text-3xl ">
                Frequently Asked Questions
              </div>
              <div className="py-4 md:mt-8">
                <div className="space-y-8">
                  {loading ? (
                    <h4>loading...</h4>
                  ) : error ? (
                    <h2>{error}</h2>
                  ) : (
                    <>
                      {faqs.map((faq, index) => (
                        <div className="space-y-4" key={index}>
                          <div className="flex items-center space-x-4">
                            <div className="flex h-10 w-10 px-2 bg-gray-400 items-center justify-center rounded">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                            <div className="font-sans font-extrabold text-xl">
                              {faq.question}
                            </div>
                          </div>
                          <div className="flex space-x-4">
                            <div className="flex h-auto w-10 px-2 items-start ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-400 transform rotate-180"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                />
                              </svg>
                            </div>
                            <div className="font-sans">{faq.answer}</div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Faq;
