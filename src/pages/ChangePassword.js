import React from 'react'

import imgChangePass from '../assets/undraw_authentication_fsn5.svg'


const ChangePassword = () => {
    return (
       <>
        <div className="flex min-h-screen bg-white">
        <div className="w-1/2 flex items-center justify-center bg-cover md:block2 hidden2">
            <img src={imgChangePass} className="w-4/6 mx-auto" alt="login image" />
        </div>

        <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
        <h3 class="my-4 text-2xl font-semibold text-gray-700">Change Password</h3>
          <form action="#" class="flex flex-col space-y-5">
            
            <div class="flex flex-col space-y-1">
              <div class="flex items-center justify-between">
                <label for="password" class="text-sm font-semibold text-gray-500">New Password</label>
              </div>
              <input
                type="password"
                id="password"
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div class="flex flex-col space-y-1">
              <div class="flex items-center justify-between">
                <label for="password" class="text-sm font-semibold text-gray-500">Confirm New Password</label>
              </div>
              <input
                type="password"
                id="password"
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div class="flex flex-col space-y-1">
              <div class="flex items-center justify-between">
                <label for="number" class="text-sm font-semibold text-gray-500">Authentication number</label>
              </div>
              <input
                type="text"
                id="number"
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div>
              <button
                type="submit"
                class="w-full px-4 py-3 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Change Password
              </button>
            </div>
            <div>
              <button
                type="submit"
                class="w-full px-4 py-3 text-lg font-semibold text-white transition-colors duration-300 bg-gray-500 rounded shadow hover:bg-gray-600 focus:outline-none focus:ring-gray-200 focus:ring-4"
              >
                Cancel
              </button>
            </div>
          </form>
         
        </div>
      </div>
       </>
    )
}

export default ChangePassword
