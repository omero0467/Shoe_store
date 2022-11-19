import React from 'react'
import PropTypes from 'prop-types'

function Card({children, reverse, shadow}) {

  return (
    <div className={`card ${reverse&& 'reverse'} ${shadow&& 'card_shadow'} center_parent`}>{children}</div>
  )
}

Card.defaultProps ={
    reverse: false
}

Card.propTypes={
    reverse: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default Card