import React from 'react'
import Layout from '../../components/Layout'

const Alerts = () => {
  return (
    <Layout>
      <div className="pb-5 border-b border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
          Alerts
            </h1>
        <p className="mt-2 max-w-4xl text-lg font-normal text-gray-500">
          Alerts are used to communicate a state that affects a system, feature or page.
            </p>
      </div>
      <div className="flex flex-col  space-y-4">
        <div className="alert alert-solid-success dark:text-black">
          File was uploaded to the server
      </div>
        <div className="alert alert-solid-error dark:text-black">
          Aw Snap, something bad happened.
      </div>
        <div className="alert alert-solid-warning dark:text-black">
          All of the data will be wiped.
      </div>
        <div className="alert alert-solid-info dark:text-black">
          Your account will expire on 29 Feb
      </div>
      </div>
      <div className="flex flex-col my-4 space-y-4">
        <div className="alert alert-outline-success dark:text-black">
          File was uploaded to the server
      </div>
        <div className="alert alert-outline-error dark:text-black">
          Aw Snap, something bad happened.
      </div>
        <div className="alert alert-outline-warning dark:text-black">
          All of the data will be wiped.
      </div>
        <div className="alert alert-outline-info dark:text-black">
          Your account will expire on 29 Feb
      </div>
      </div>

    </Layout>
  )
}

export default Alerts
