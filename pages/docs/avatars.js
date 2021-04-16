import React from 'react'
import Layout from '../../components/Layout'

const Avatars = () => {
  return (
    <Layout>
      <div className="pb-5 border-b border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
          Avatars
            </h1>
        <p className="mt-2 max-w-4xl text-lg font-normal text-gray-500">
          In computing, an avatar (also known as a profile picture or userpic) is a graphical representation of a user or the user's character or persona.
            </p>
      </div>
      <div className="flex items-center space-x-4 flex-wrap">
        <img
          className="avatar avatar-sm"
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="User"
        />
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          className="avatar avatar-md"
          alt="User"
        />
        <img
          className="avatar avatar-lg"
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="User"
        />
        <img
          className="avatar avatar-xl"
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="User"
        />
      </div>
    </Layout>
  )
}

export default Avatars
