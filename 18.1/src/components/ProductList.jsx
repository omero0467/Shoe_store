import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import ShoeItem from './ShoeItem';
import { GlobalContext } from '../context/Global';
// import Card from './Card'
function List() {
    const { listings, removeListing,} = useContext(GlobalContext)
    console.log(listings);
    if (listings.length===0){   
 return <h4>No Listings</h4>
} 
return (
  <div className="home_body product_body">
    <div className='ad_banner center_parent'><span><Link className='link_reset' to="/">See More</Link></span></div>
    <div className='productlist'>
    {listings.map((item)=>{
      return (<>
        <Link to={`/shoe/${item.id}`} className='link_reset'>
          <ShoeItem item={item}></ShoeItem>
        </Link>
    </>)
    })}
      <div className="card_shadow add_item">
        <Link className='btn' to='/add'>Add Listing</Link>
      </div>
    </div>
  </div>
)
}

export default List


    //   <span>{item.title}</span> 
    //  <div className="ml-auto"> 
    //      <Link className='btn btn-warning mr-1' to={`/edit/${item.id}`}>Edit</Link> 
    //      <Button onClick={()=>removeListing(item.id)} color='danger'>Delete</Button> 
    //  </div> 