import React, { useEffect, useState } from 'react'

const useFetch = () => {
    const url = "http://localhost:8000/blogs"

    const [blogs , setBlogs] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            return res.json()
        }).then(data=>{
            setBlogs(data);
        }).catch(error=>{
            console.log(error.message)
        })
    },[url])
  return (
    {blogs}
  )
}

export default useFetch