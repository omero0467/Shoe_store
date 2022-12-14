import React from 'react'
import { GiRunningShoe } from "react-icons/gi";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='navbar nav'>
        <GiRunningShoe size={30}/>
        <h3>Shoestore</h3>
        <ul>
            <Link to={'/about'} className="link_reset current"><li>About</li></Link>
            <Link to={'/'} className="link_reset"><li>Home</li></Link>
            <Link to={'/products'} className="link_reset"><li>Shoes</li></Link>
        </ul>
    </div>
  )
}

export default Nav