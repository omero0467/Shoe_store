import React from 'react'
import { useContext } from 'react'
import { Link,useParams } from 'react-router-dom'
import { GlobalContext } from '../context/Global'

function ShoePage() {
    const params = useParams()
    const { listings, editListing,} = useContext(GlobalContext)
    const SHOE = listings.find((item)=>item.id===params.id)
    const {title,id}=SHOE
  return (
      <div className='shoe_body'>
        <div className="shoe_showcase">
        <h1>{title}</h1>
            <div className="d-flex">
                <div className='shoe_page_image'></div>
                <div className="description_banner"></div>
            </div>
        <Link className='link_reset edit_btn mr-1' to={`/edit/${id}`}>Edit</Link> 
        </div>
    </div>
  )
}

export default ShoePage