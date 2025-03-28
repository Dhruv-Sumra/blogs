import React from 'react'
import BlogItems from './BlogItems'
import useFetch from './useFetch'

const Home = () => {
    const {blogs} = useFetch();
  return (
    <div className='px-5 xl:px-15 bg-purple-300 h-auto'> 
        {blogs && <BlogItems/>}
    </div>
  )
}

export default Home