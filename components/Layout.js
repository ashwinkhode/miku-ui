import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import clsx from 'clsx'
import {AiFillGithub, AiOutlineMenu} from 'react-icons/ai'
import SEO from './SEO'

const navLinks = [
  {
    name: 'Get Started',
    path: 'get-started'
  },
  {
    name: 'Avatars',
    path: 'avatars'
  },
  {
    name: 'Alerts',
    path: 'alerts'
  },
  {
    name: 'Badges',
    path: 'badges'
  },
  {
    name: 'Buttons',
    path: 'buttons'
  },
  {
    name: 'Cards',
    path: 'cards'
  },
  {
    name: 'Images',
    path: 'images'
  },
  {
    name: 'Inputs',
    path: 'inputs'
  },
  {
    name: 'Lists',
    path: 'lists'
  },
  // {
  //   name: 'Navigation',
  //   path: 'navigation'
  // },
  {
    name: 'Modal',
    path: 'modal'
  },
  {
    name: 'Ratings',
    path: 'ratings'
  },
  {
    name: 'Typography',
    path: 'typography'
  },
]

const Layout = ({children}) => {
  const router = useRouter()
  const [menuToggle, setMenuToggle] = useState(false)
  return (
    <div className='w-full h-full flex flex-col lg:flex-row'>
      <SEO />
      <div className='lg:hidden h-[10vh] flex flex-row justify-between items-center overflow-hidden z-20'>
        <button
          className='p-2'
          onClick={() => setMenuToggle(!menuToggle)}
        >
          <AiOutlineMenu className='w-6 h-6' />
        </button>
        <Link href='/'>
          <div className='relative flex items-center cursor-pointer'>
            <Image
              src='/favicon.ico'
              width='80'
              height='60'
              objectFit='contain'
            />
            <h1 className='font-bold text-2xl'>
              Miku <span className='text-[#0070f3]'>UI</span>
            </h1>
          </div>
        </Link>
        <Link href='https://github.com/ashwinkhode/' >
          <button className='p-2'>
            <span><AiFillGithub className='w-6 h-6' /></span>
          </button>
        </Link>
      </div>
      <div className={clsx(menuToggle ? '' : 'hidden', 'lg:hidden w-full h-full')}>
        <div className='w-full'>
          {
            navLinks.map(
              link => (
                <Link key={link.name} href={`/docs/${link.path}`}>
                  <li className={clsx(router.pathname.split('/')[2] === link.path ? 'bg-gray-300' : '', 'w-full list-none py-2 px-4 cursor-pointer')}>
                    {
                      link.name
                    }
                  </li>
                </Link>
              )
            )
          }
        </div>
      </div>
      <div className='hidden lg:block w-1/5 h-full bg-white p-4'>
        <div className='flex flex-col justify-center items-start space-y-2'>
          <div className='w-full flex flex-col justify-center items-center space-y-2'>
            <Image
              src='/favicon.ico'
              width='200'
              height='120'
              objectFit='contain'
            />
            <h1 className='font-bold text-2xl'>
              Miku <span className='text-[#0070f3]'>UI</span>
            </h1>
          </div>
          <div className='w-full'>
            {
              navLinks.map(
                link => (
                  <Link key={link.name} href={`/docs/${link.path}`}>
                    <li className={clsx(router.pathname.split('/')[2] === link.path ? 'bg-gray-300' : '', 'w-full list-none py-2 px-4 cursor-pointer')}>
                      {
                        link.name
                      }
                    </li>
                  </Link>
                )
              )
            }
          </div>
        </div>
      </div>
      <div className='w-full lg:w-4/5 h-[90vh] lg:h-[100vh] bg-gray-200 p-8 overflow-y-scroll'>
        {children}
      </div>
    </div>
  )
}

export default Layout
