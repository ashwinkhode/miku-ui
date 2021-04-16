import React from 'react'
import Layout from '../../components/Layout'

const Images = () => {
  return (
    <Layout>
      <div className="pb-5 border-b border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
          Images
            </h1>
        <p className="mt-2 max-w-4xl text-lg font-normal text-gray-500">
          Images are really important aspect of any website.
            </p>
      </div>
      <div className='my-4 space-y-4'>
        <p className="mt-2 max-w-4xl text-lg font-normal text-gray-500">
          Centered Image within a div
           </p>
        <img
          className="img-center"
          src="https://via.placeholder.com/150"
          alt="placeholder"
        />
      </div>
      <div className='my-4 space-y-4'>
        <p className="mt-2 max-w-4xl text-lg font-normal text-gray-500">
          Rounded Image
           </p>
        <img
          className="rounded"
          src="https://via.placeholder.com/150"
          alt="placeholder"
        />
      </div>
    </Layout>
  )
}

export default Images
