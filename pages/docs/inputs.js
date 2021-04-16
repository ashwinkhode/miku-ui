import React from 'react'
import Layout from '../../components/Layout'

const Inputs = () => {
  return (
    <Layout>
      <div className="pb-5 border-b border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
          Input Fields
            </h1>
        <p className="mt-2 max-w-4xl text-lg font-normal text-gray-500">
          This component is used to taking user's input in a text, email or password field.
            </p>
      </div>
      <div className="flex flex-col space-x-1 items-start">
        <label className="my-2" htmlFor="email">
          Email Address
      </label>
        <input
          id="email"
          type="email"
          className="input"
          placeholder="your.name@email.com"
          autoComplete="off"
        />
        <label className="my-2" htmlFor="username">
          Username
      </label>
        <input
          id="username"
          type="text"
          className="input"
          placeholder="Miku Nakano"
          autoComplete="off"
        />
        <label className="my-2" htmlFor="password">
          Password
      </label>
        <input
          id="password"
          type="password"
          className="input"
          placeholder="Enter Password"
          autoComplete="off"
        />
      </div>

    </Layout>
  )
}

export default Inputs
