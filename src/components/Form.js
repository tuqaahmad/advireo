import { useState } from "react";

export default function Form() {
  const audience = [
    { name: "West Amman Dentists" },
    { name: "Shemesani Internists" },
    { name: "Aqaba Cardiologists" },
    { name: "Khaldi Cardiologists" },
    { name: "East Amman GPs" },
    { name: "Irbid Dermatologists" },
  ];

  const [image, setImage] = useState(false);
  const [brodcast, setBrodcastMsg] = useState(false);

  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 py-4 ">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Upload
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Upload promotional manage.
              </p>
            </div>
          </div>
          <div className="py-4 mt-5 md:mt-0 md:col-span-2">
            <div className=" shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Cover photo
                  </label>

                  {image ? (
                    <img
                      src="https://www.pharmacy.biz/wp-content/uploads/sites/1/2021/05/Panadol-More-Laughs-Less-Pain.png"
                      alt="img"
                      className="justify-center mx-auto h-80 w-auto"
                    />
                  ) : null}

                  {image ? null : (
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-red-600 hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              onClick={() => {
                                setImage(true);
                              }}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 ">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Select Audience
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Decide to which audience you want to brodcast now.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <fieldset>
                  <legend className="text-base font-medium text-gray-900">
                    Audience
                  </legend>
                  <div className="mt-4 space-y-4">
                    {audience.map((item) => (
                      <>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="comments"
                              name="comments"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="comments"
                              className="font-medium text-gray-700"
                            >
                              {item.name}
                            </label>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </fieldset>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-7 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  onClick={() => {
                    setBrodcastMsg(true);
                    setTimeout(() => {
                      window.location.reload(true);
                    }, 2000);
                  }}
                >
                  Brodcast
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      {brodcast ? (
        <div
          class="flex items-center bg-green-500 text-white text-sm font-bold px-4 py-3 w-1/2 mx-auto"
          role="alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          <p>Brodcast has been successfully sent.</p>
        </div>
      ) : null}
      <br />
    </>
  );
}
