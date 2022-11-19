import React from 'react'
import { useContext } from 'react'
import { Link,useParams } from 'react-router-dom'
import { GlobalContext } from '../context/Global'
import Nav from './Nav';

function ShoePage() {
    const params = useParams()
    const { listings,} = useContext(GlobalContext)
    const SHOE = listings.find((item)=>item.id===params.id)
    const {model,id,price,des,size,isAvaliable,color,series,image}=SHOE
    const backgroundStyleObj={
        background: `url('${image}') center center/cover no-repeat`
    }
    
    return (
        <>
      <Nav></Nav>
      <div className='shoe_body'>
        <div className="shoe_showcase">
        <h1>{model}</h1>
        <h4>{series}</h4>
            <div className="d-flex mb-4">
                <div className='shoe_page_image card_shadow' style={backgroundStyleObj}></div>
                <div className="description_banner card_shadow">
                    {des}
                    <br />
                    Size: <span><b>{size}</b></span>
                    <br />
                    Stock: {`${isAvaliable?'in stock':'out of stock'}`}
                    <br />
                    Color: <span><b>{color}</b></span>
                    <br />
                    Price: {price}$
                </div>
            </div>
        <Link className='link_reset edit_btn mr-1' to={`/edit/${id}`}>Edit</Link> 
        </div>
    </div>
        </>
  )
}

export default ShoePage