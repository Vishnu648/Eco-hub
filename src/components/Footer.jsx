import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div
    className='w-full h-[10vh] fixed bottom-0 left-0 bg-[#008000] flex justify-end items-center px-10'
    >
      <Link to='/login'>
      <button className="text-sm font-semibold px-3 py-2 rounded-full text-white bg-[#f8b72b] hover:bg-black">
        JOIN US/LOGIN
        </button>
      </Link>
    </div>
  )
}

export default Footer