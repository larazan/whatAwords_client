import React from 'react'

const Message = () => {
    return (
      <>
        <div className="flex gap-4 bg-red-500 p-4 rounded-md">
          <div className="w-max">
            <div className="h-10 w-10 flex rounded-full bg-gradient-to-b from-red-100 to-red-300 text-red-700">
              <span
                className="material-icons material-icons-outlined m-auto"
                style={{ fontSize: '20px' }}
              >
                gpp_bad
              </span>
            </div>
          </div>
          <div className="space-y-1 text-sm">
            <h6 className="font-medium text-white">Fatal error</h6>
            <p className="text-red-100 leading-tight">
              Your internet connection was lost, we can't upload your photo.
            </p>
          </div>
        </div>
      </>
    );
}

export default Message
