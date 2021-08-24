//library imports
import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useHistory } from "react-router-dom";

//confi imports
import { BASE_URL } from "../../config/config";

//image imports
import logo from "../../assets/images/transparent.png";

export default function LoginPage() {
  const [user, setUser] = useState({});
  let history = useHistory();

  const handleUserDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  function login() {
    axios
      .post(`${BASE_URL}/users/login`, {
        email_address: user.email_address,
        password: user.password,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-32 w-auto" src={logo} alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <br />
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="sr-only">Email address</label>
              <input
                id="email_address"
                name="email_address"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={handleUserDataChange}
              />
            </div>
            <br />
            <div>
              <label className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={handleUserDataChange}
              />
            </div>
          </div>

          {/* <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a className="font-medium text-red-600 hover:text-red-500">
                Forgot your password?
              </a>
            </div>
          </div> */}

          <div>
            <button
              onClick={() => {
                login();
                history.push("/home");
              }}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-white "
                  aria-hidden="true"
                />
              </span>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
