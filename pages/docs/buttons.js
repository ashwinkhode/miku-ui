import React from 'react'
import Layout from '../../components/Layout'

const Buttons = () => {
  return (
    <Layout>
      <div className="pb-5 border-b border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
          Buttons
            </h1>
        <p className="mt-2 max-w-4xl text-lg font-normal text-gray-500">
          The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
            </p>
      </div>
      <div className="my-4 flex items-center space-x-4  flex-wrap sm:flex-row">
        <button className="btn btn-sm">Button</button>
        <button className="btn btn-r">Button</button>
        <button className="btn btn-lg">Button</button>
        <button className="btn btn-xl">Button</button>
      </div>
      <div className="my-4 flex space-x-4 items-center flex-wrap">
        <button className="btn btn-outline btn-sm">Button</button>
        <button className="btn btn-outline btn-r">Button</button>
        <button className="btn btn-outline btn-lg">Button</button>
        <button className="btn btn-outline btn-xl">Button</button>
      </div>
    </Layout>
  )
}

export default Buttons
