import React from 'react'
import Layout from '../../components/Layout'

const Cards = () => {
  return (
    <Layout>
      <div className="pb-5 border-b border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
          Cards
            </h1>
        <p className="mt-2 max-w-4xl text-lg font-normal text-gray-500">
          Used to display information to users, with button to trigger actions. These are very versatile and often found in eCommerce websites and blogs.
            </p>
      </div>
      <div className="card my-4">
        <img src="https://placekitten.com/250/150" alt="Cat" />
        <div className="card-body">
          <h4>Card Title</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            natus veniam animi, reprehenderit tempora quam perspiciatis id nostrum
            neque? Consequatur.
        </p>
          <button>Read More...</button>
        </div>
      </div>
      <div className="card card-img-side">
        <img src="https://placekitten.com/150/200" alt="" />
        <div className="card-body">
          <h4>Card Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, id
            fuga. At corrupti laborum sit, hic, quis numquam odio, cumque aliquam
            unde fugiat molestias aliquid eaque fugit a iure iste!
        </p>
          <button>Read More</button>
        </div>
      </div>
      <div className="card my-4">
        <div className="card-body">
          <h4>Card Title</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            natus veniam animi, reprehenderit tempora quam perspiciatis id nostrum
            neque? Consequatur.
        </p>
          <button>Read More...</button>
        </div>
      </div>
    </Layout>
  )
}

export default Cards
