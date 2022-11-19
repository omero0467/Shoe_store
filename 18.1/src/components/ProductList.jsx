import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import ShoeItem from './ShoeItem';
import { GlobalContext } from '../context/Global';
import Nav from './Nav';
// import Card from './Card'
function List() {
    const { listings,} = useContext(GlobalContext)
    console.log(listings);
    if (listings.length===0){   
 return <h4>No Listings</h4>
} 
return (
  <>
      <Nav></Nav>
    <h1>Browse Shoes</h1>
  <div className="home_body product_body">
    <div className='ad_banner center_parent'><span className='banner_text text-shadow-emph'><Link className='link_reset white_text' to="/">See More</Link></span></div>
    <div className='productlist'>
    {listings.map((item)=>{
      return (<>
        <Link to={`/shoe/${item.id}`} className='link_reset'>
          <ShoeItem item={item}></ShoeItem>
        </Link>
    </>)
    })}
      <div className="card_shadow add_item text_shadow_emph">
        <Link className='link_reset' to='/add'><span className='text-shadow-emph white_text'>Add Listing</span></Link>
      </div>
    </div>
  </div>
    </>
)
}

export default List
