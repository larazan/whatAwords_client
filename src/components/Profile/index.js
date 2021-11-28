import React from "react";

const Profile = () => {
  return (
    <div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-lg mx-auto my-10 bg-white p-5 rounded shadow-sm">
          <div className="text-center">
            <h4 className="my-3 text-2xl font-bold text-gray-700 dark:text-gray-200">
              Edit Your Profile
            </h4>
            
          </div>
          <div className="m-7">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              id="form"
            >
              <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE" />
              <input
                type="hidden"
                name="subject"
                value="New Submission from Web3Forms"
              />
              <input
                type="checkbox"
                name="botcheck"
                id=""
                style={{ display: "none" }}
              />

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-xs font-bold text-gray-600 dark:text-gray-400"
                >
                  Avatar
                </label>
                <div className="flex items-center">
                  <img className="rounded-full h-16 w-16" src="https://www.gravatar.com/avatar/3de1623fb7eab4ef32b519c7c91d17aa?s=256&d=mm" alt="" />
                  <a href="" class="inline-flex bg-green-600 px-3 ml-3 py-1 justify-center rounded boder border-transparent text-xs leading-5 font-medium text-white">choose file</a>
                </div>
                <input accept="image/jpg, image/jpeg, image/png" class="js-avatar-input hidden" type="file" name="user[avatar]" id="user_avatar"></input>
              </div>
              <div className="mb-6 flex space-x-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 text-xs font-bold text-gray-600 dark:text-gray-400"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John"
                    required
                    className="w-full text-sm px-3 py-2 placeholder-gray-300 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-100 focus:border-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className=" mb-2 text-xs font-bold text-gray-600 dark:text-gray-400"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" Doe"
                    required
                    className="w-full text-sm px-3 py-2 placeholder-gray-300 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-100 focus:border-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-xs font-bold text-gray-600 dark:text-gray-400"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  required
                  className="w-full text-sm px-3 py-2 placeholder-gray-300 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-100 focus:border-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="text-xs font-bold text-gray-600 dark:text-gray-400"
                >
                  Short Bio
                </label>
                <input
                  type="text"
                  name="bio"
                  id="bio"
                  placeholder=""
                  required
                  className="w-full text-sm px-3 py-2 placeholder-gray-300 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-100 focus:border-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="text-xs font-bold text-gray-600 dark:text-gray-400"
                >
                  Website <span className="text-xs font-extralight">(e.g. Portfolio, Facebook, Dribbble, …)</span>
                </label>
                <input
                  type="text"
                  name="web"
                  id="web"
                  placeholder=""
                  required
                  className="w-full text-sm px-3 py-2 placeholder-gray-300 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-100 focus:border-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="text-xs font-bold text-gray-600 dark:text-gray-400"
                >
                  Instagram username
                </label>
                <input
                  type="text"
                  name="insta"
                  id="insta"
                  placeholder=""
                  required
                  className="w-full text-sm px-3 py-2 placeholder-gray-300 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-100 focus:border-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="text-xs font-bold text-gray-600 dark:text-gray-400"
                >
                  Messaging
                </label>
                <div className="py-2">
                  <input type="checkbox" name="" id="" className="mr-1 bg-white shadow " />
                  <span class="ml-2 text-sm text-gray-700 pt-1">Display "Message" button on my profile (Pexels reviews all messages to protect against spam)</span>
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="text-xs font-bold text-gray-600 dark:text-gray-400"
                >
                  Photo and Video Uses
                </label>
                <div className="py-2">
                  <input type="checkbox" name="" id="" className="mr-1 bg-white shadow " />
                  <span class="ml-2 text-sm text-gray-700 pt-1">I’m open to receiving an email to share how I used photos and videos.</span>
                </div>
                <div className="py-2">
                  <input type="checkbox" name="" id="" className="mr-1 bg-white shadow " />
                  <span class="ml-2 text-sm text-gray-700 pt-1">I’m open to receiving an email when someone shares how they used my photo or video.</span>
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="text-xs font-bold text-gray-600 dark:text-gray-400"
                >
                  Email settings
                </label>
                <div className="py-2">
                  <input type="checkbox" name="" id="" className="mr-1 bg-white shadow " />
                  <span class="ml-2 text-sm text-gray-700 pt-1">Receive a monthly email with stats about your photos</span>
                </div>
                <div className="py-2">
                  <input type="checkbox" name="" id="" className="mr-1 bg-white shadow " />
                  <span class="ml-2 text-sm text-gray-700 pt-1">Receive photographer related news</span>
                </div>
                <div className="py-2">
                  <input type="checkbox" name="" id="" className="mr-1 bg-white shadow " />
                  <span class="ml-2 text-sm text-gray-700 pt-1">Receive an email when reaching a new milestone</span>
                </div>
                <div className="py-2">
                  <input type="checkbox" name="" id="" className="mr-1 bg-white shadow " />
                  <span class="ml-2 text-sm text-gray-700 pt-1">Receive a newsletter with the best photos on Pexels</span>
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="text-xs font-bold text-gray-600 dark:text-gray-400"
                >
                  Password
                </label>
                <div className="py-2">
                  <a href="" className="text-sm underline">Change Password</a>
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="text-xs font-bold text-gray-600 dark:text-gray-400"
                >
                  Delete your account
                </label>
                <div className="py-2">
                  <a href="" className="text-sm underline">Delete your account (You can't undo this!)</a>
                </div>
              </div>
              
              <div className="mb-6 flex space-x-2">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-green-600 rounded hover:bg-green-700 focus:bg-green-700 focus:outline-none"
                >
                  Update Profile
                </button>
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-gray-300 rounded hover:bg-gray-400 focus:bg-gray-400 focus:outline-none"
                >
                  Cancel
                </button>
              </div>
              <p
                className="text-base text-center text-gray-400"
                id="result"
              ></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
