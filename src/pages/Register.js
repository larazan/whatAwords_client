import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/user_actions";

import Message from "../components/Message";
import imgSignup from "../assets/undraw_Access_account_re_8spm.svg";

const Register = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password, passwordConfirm));
    }
  };

  return (
    <>
      <div className="flex min-h-screen bg-white">
        <div className="w-1/2 flex items-center justify-center bg-cover md:block2 hidden2">
          <img src={imgSignup} className="w-4/6 mx-auto" alt="login image" />
        </div>

        <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
          {message && <Message variant="danger">{message}</Message>}
          <h1 className=" text-gray-800 text-3xl font-medium">
            Create an account for free
          </h1>
          <h3 className="mb-4 p-1 text-gray-700">
            Free forever. No payment needed.
          </h3>
          <form onSubmit={submitHandler} class="flex flex-col space-y-5">
            <div class="flex flex-col space-y-1">
              <label for="username" class="text-sm font-semibold text-gray-500">
                Username
              </label>
              <input
                type="text"
                id="username"
                autofocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div class="flex flex-col space-y-1">
              <label for="email" class="text-sm font-semibold text-gray-500">
                Email address
              </label>
              <input
                type="email"
                id="email"
                autofocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div class="flex flex-col space-y-1">
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="text-sm font-semibold text-gray-500"
                >
                  Password
                </label>
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div class="flex flex-col space-y-1">
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="text-sm font-semibold text-gray-500"
                >
                  Confirm Password
                </label>
              </div>
              <input
                type="password"
                id="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div class="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
              />
              <label for="remember" class="text-sm font-semibold text-gray-500">
                {" "}
                By creating an account you are agreeing to our
                <a
                  className=""
                  href="/s/terms"
                  target="_blank"
                  data-test="Link"
                >
                  <span className="underline "> Terms and Conditions</span>{" "}
                </a>{" "}
                and
                <a
                  className=""
                  href="/s/privacy"
                  target="_blank"
                  data-test="Link"
                >
                  <span className="underline"> Privacy Policy</span>{" "}
                </a>
              </label>
            </div>
            <div>
              <button
                type="submit"
                class="w-full px-4 py-2 text-md font-semibold text-white transition-colors duration-300 shadow py-3 bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-green-200 focus:ring-4"
              >
                Sign Up
              </button>
            </div>
          </form>

          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            <a className="" data-test="Link">
              <span className="block  p-5 text-center text-gray-800  text-xs ">
                Already have an account?
              </span>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
