import React from 'react'
import Login from './Login'
import Register from './Register'

function Navbar() {
  return (
   <div className='navbar'>
     <ul>
       <li>
         <a href="./Login">Sign in</a>
       </li>
       <li>
       <a href="./Register">Sign up</a>
       </li>
     </ul>
   </div>
   
   
  )
}

export default Navbar