import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/Global'

function ShoeItem({item}) {
  

  const {removeListing} =useContext(GlobalContext)
    const backgroundStyleObj={
      background: `url('${item.image}') center center/cover no-repeat`
    }
    return (
      <>
    <div className='shoe_item d-flex card_shadow' style={backgroundStyleObj}>
        <button onClick={(e)=>{ e.stopPropagation(); e.preventDefault(); removeListing(item.id)}} className="remove_btn btn btn-danger">X</button>
      <div className="shoe_inner shoe_header">
        <span className='shoe_inner series'>{item.series}</span>
        <br />
        <span className='shoe_inner title'>{item.model/*model*/}</span>
      </div>
      <div className="shoe_inner shoe_footer">
        <span className='shoe_inner price'>{item.price}$</span>
        </div>
    </div>
      </>
  )
}

export default ShoeItem