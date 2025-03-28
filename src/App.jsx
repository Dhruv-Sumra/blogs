import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './Home'
import NewBlog from './NewBlog'
import Navbar from './Navbar'

const App = () => { 
  return (
    <Router >
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='newBlog' element={<NewBlog/>}/>
      </Routes>
    </Router>
  )
}

export default App