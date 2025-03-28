import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-5 h-15 bg-purple-900 xl:px-15'>
        <h2 className='text-3xl uppercase font-bold text-purple-300'>Blogs</h2>

        <div className='flex justify-between space-x-10 text-purple-300'> 
            <Link to="/">Home</Link>
            <Link to="newBlog">New Blog</Link>
        </div>
    </div>
  )
}

export default Navbar