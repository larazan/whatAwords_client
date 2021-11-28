import React from "react";

const Notification = () => {
  return (
    <>
      <div className="-m-2 fixed bottom-3 left-3">
        <div className="p-2">
          <div className="flex items-center bg-white leading-none text-pink-600 rounded-full p-2 border shadow-xl text-teal text-sm">
            <span className="flex items-center bg-pink-600 text-white text-xs rounded-full px-3 py-2 ">
              Pink
            </span>
            <span className="inline-flex2 px-2 text-xs">
              Donec sit amet neque risus.
              ligula in.
            </span>
          </div>
        </div>

       
      </div>
    </>
  );
};

export default Notification;
