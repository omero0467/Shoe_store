import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/Global'

function ShoeItem({item}) {
  const {removeListing} =useContext(GlobalContext)
    const backgroundStyleObj={
        background: `url('${item.image}') center center/cover no-repeat`
    }
  return (
    <div className='shoe_item d-flex card_shadow'>
        <button onClick={()=>{removeListing(item.id)}} className="remove_btn btn btn-danger">X</button>
      <div className="shoe_inner shoe_header">
        <span className='shoe_inner series'>Nike{item.series}</span>
        <br />
        <span className='shoe_inner title'>Air{item.title/*model*/}</span>
      </div>
      <div className="shoe_inner shoe_footer">
        <span className='shoe_inner price'>99.99${item.price}</span>
        </div>
    </div>
  )
}

export default ShoeItem