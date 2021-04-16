import React from 'react'
import Layout from '../../components/Layout'

const Navigation = () => {
  return (
    <Layout>
      <div className="pb-5 border-b border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
          Navigation
            </h1>
        <p className="mt-2 max-w-4xl text-lg font-normal text-gray-500">
          It is used to navigation across your application and is usually placed at top of the page.
            </p>
      </div>
      <div className='space-y-8'>
        <nav className="nav dark:bg-primary-600">
          <div className="navbar-brand">
            <h3 className='font-bold text-xl'>Company</h3>
          </div>
          <ul className="navbar-links">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <button className="btn btn-sm nav-item">Contact</button>
          </ul>
        </nav>
        <nav className="nav">
          <div className="navbar-brand">
            <h3 className='font-bold text-xl'>Company</h3>
          </div>
          <ul className="navbar-links">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Pricing</li>
          </ul>
          <div>
            <button className="btn btn-sm nav-item">Contact</button>
          </div>
        </nav>
      </div>

    </Layout>
  )
}

export default Navigation
