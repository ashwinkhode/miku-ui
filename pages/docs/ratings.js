import React from 'react'
import Layout from '../../components/Layout'
import {ImStarEmpty, ImStarFull, ImStarHalf} from "react-icons/im"

const Ratings = () => {
  return (
    <Layout>
      <div className="pb-5 border-b border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
          Ratings
            </h1>
        <p className="mt-2 max-w-4xl text-lg font-normal text-gray-500">
          Often denoted as stars, ratings indicate quality of a particular entity
            </p>
      </div>
      <div className='my-4'>
        <ul className="rating-container">
          <li className="rating-star">
            <ImStarFull fill="#d4af37" />
          </li>
          <li className="rating-star">
            <ImStarFull fill="#d4af37" />
          </li>
          <li className="rating-star">
            <ImStarFull fill="#d4af37" />
          </li>
          <li className="rating-star">
            <ImStarHalf fill="#d4af37" />
          </li>
          <li className="rating-star">
            <ImStarEmpty fill="#d4af37" />
          </li>
        </ul>
      </div>

    </Layout>
  )
}

export default Ratings
