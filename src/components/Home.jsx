import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
        {/* <Heading /> */}
      {/* <Homebar></Homebar> */}
      <div className="homebar nav">
        <ul>
          <Link className='link' to={'/products'}>
            <li className='btn btn-border-underline'>Shoes</li>
          </Link>
          <Link className='link' to={'/about'}>
            <li className='btn btn-border-underline'>About</li> 
          </Link>
        </ul>
      </div>
      <div className="home_body">
        <div className="hero center_parent flex_column">
          <div className="headline center_parent flex_column">
            <h1 className='text-shadow-emph
'>Welcome</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa amet eligendi molestias in iste quibusdam repellat consequuntur</p>
          </div>
        </div >
          <div className="showcase center_parent">
            <Link className='link text-shadow-emph' to={'/products'}>Our Colletion</Link>
          </div>
      </div>
    </>
  )
}

export default Home