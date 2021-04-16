import React from 'react'
import {HiDownload} from 'react-icons/hi'
import Layout from '../../components/Layout'

const GetStarted = () => {
  return (

    <Layout>
      <div>
        <div className="pb-5 border-b border-gray-200">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
            Get Started
            </h1>
          <p className="mt-2 max-w-4xl text-lg font-normal text-gray-500">
            Learn how to configure Miku UI in your project
            </p>
        </div>
        <div className=" py-12 max-w-7xl mx-auto ">
          <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-col">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Static Websites
            </h3>
              <p className="mt-2 max-w-4xl text-sm text-gray-500">
                Simply click the download button and paste the file in your css
                directory. Don't forget to set the link attribute !
            </p>
              <input
                type="text"
                className="shadow-sm py-2 px-2 border bg-white mt-3 border-gray-200 font-mono rounded-md"
                readOnly
                value={`<link href="path/to/mikuUI.css" rel="stylesheet" />`}
              />
            </div>
          </div>
          <div className="mb-4 flex sm:mt-0">
            <a
              href="/dist/css/dogeui.css"
              type="button"
              download="dogeui.css"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Download (7.26 KB)
            </a>
            <a
              href="/dist/css/dogeui.min.css"
              type="button"
              download="dogeui.min.css"
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              <HiDownload className="text-lg mr-2" />
              Download (minified) (5.59 KB)
            </a>
          </div>
        </div>

        <div className=" max-w-7xl mx-auto ">
          <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-col">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                React/NextJS Project
            </h3>
              <p className="mt-2 max-w-4xl text-sm text-gray-500">
                Import Doge-UI in your <code>index.js (React)</code> or{" "}
                <code>_app.js (NextJS)</code> file as follows
            </p>
            </div>
          </div>
          <pre className="bg-white rounded-md  overflow-x-auto text-gray-900 px-4 py-5 sm:p-6">
            {` // pages/_app.js
    import 'path/to/miku-ui.css'
    function MyApp({ Component, pageProps }) {
      return <Component {...pageProps} />
    }
    export default MyApp`}
          </pre>
        </div>

        <div className="py-12 max-w-7xl mx-auto ">
          <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-col">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Colors and Fonts
            </h3>
              <p className="mt-2 max-w-4xl text-sm text-gray-500">
                Doge UI recommends Inter{" "}
                <a
                  target="_blank noreferrer"
                  href="https://fonts.google.com/specimen/Inter"
                >
                  (Learn More). {"  "}
                </a>
              We have couple of shades of gray and some primary colors.
            </p>
            </div>
          </div>
          <div className="mt-2 overflow-x-auto">
            <>
              <p>Gray</p>
              <div className="flex space-x-2">
                <div className="px-8 py-6 rounded-md bg-gray-100"></div>
                <div className="px-8 py-6 rounded-md bg-gray-200"></div>
                <div className="px-8 py-6 rounded-md bg-gray-300"></div>
                <div className="px-8 py-6 rounded-md bg-gray-600"></div>
                <div className="px-8 py-6 rounded-md bg-gray-700"></div>
                <div className="px-8 py-6 rounded-md bg-gray-800"></div>
                <div className="px-8 py-6 rounded-md bg-gray-900"></div>
              </div>
              <div className="mt-5">
                <p>Some basic colors</p>
                <div className="flex space-x-2">
                  <div
                    className="px-8 py-6  rounded-md"
                    style={{backgroundColor: "#fde24f"}}
                  ></div>
                  <div
                    className="px-8 py-6 rounded-md"
                    style={{backgroundColor: "#ff5470"}}
                  ></div>
                  <div
                    className="px-8 py-6 rounded-md"
                    style={{backgroundColor: "#38a169"}}
                  ></div>
                  <div
                    className="px-8 py-6 rounded-md"
                    style={{backgroundColor: "#00214d"}}
                  ></div>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default GetStarted
