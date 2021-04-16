import React from 'react'
import Layout from '../../components/Layout'

const Lists = () => {
  return (
    <Layout>
      <div className="pb-5 border-b border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
          Lists
            </h1>
        <p className="mt-2 max-w-4xl text-lg font-normal text-gray-500">
          Lists are used to present list of information in well formed and semantic way.
            </p>
      </div>
      <div className="list-container my-4">
        <ul className="list">
          <li className="list-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        </li>
          <li className="list-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        </li>
          <li className="list-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        </li>
          <li className="list-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        </li>
        </ul>
      </div>
      <div className="list-container my-4">
        <ul className="list list-striped">
          <li className="list-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        </li>
          <li className="list-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        </li>
          <li className="list-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        </li>
          <li className="list-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        </li>
        </ul>
      </div>

    </Layout>
  )
}

export default Lists
