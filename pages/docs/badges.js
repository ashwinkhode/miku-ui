import React from 'react'
import Layout from '../../components/Layout'

const Badges = () => {
  return (
    <Layout>
      <div className="pb-5 border-b border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
          Badges
            </h1>
        <p className="mt-2 max-w-4xl text-lg font-normal text-gray-500">
          Badges are used to highlight an item's status for quick recognition.
            </p>
      </div>
      <div className="flex space-x-4 items-center flex-wrap my-4">
        <span className="badge badge-success">Success</span>
        <span className="badge badge-error">Error</span>
        <span className="badge badge-warning">Warning</span>
        <span className="badge badge-info">Info</span>
      </div>
      <div className="flex space-x-4 items-center flex-wrap my-4">
        <span className="badge badge-outline-success">Success</span>
        <span className="badge badge-outline-error">Error</span>
        <span className="badge badge-outline-warning">Warning</span>
        <span className="badge badge-outline-info">Info</span>
      </div>
    </Layout>
  )
}

export default Badges
