import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
   <div className='HomeNav'>
   <Link to={"/Home"}><h3>Home</h3></Link>
        <Link to={"/About"}><h3>About</h3></Link>
        <Link to={"/FAQ"}><h3>FAQ</h3></Link>
        <Link to={"/contact"}><h3>Contect</h3></Link>
   </div>
  )
}
