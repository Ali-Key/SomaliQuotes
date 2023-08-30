import React from 'react'
import { Link } from 'react-router-dom'

function Pages() {
  return (
    <div className='text-white space-x-12 uppercase font-mono text-xl'>

      <Link className='hover:text-orange-400  te' to="/">Home</Link>
      <Link className='hover:text-orange-400  te' to="/about">About</Link>
      <Link className='hover:text-orange-400  te' to="/counten">Counten</Link>



     
    </div>
  )
}

export default Pages