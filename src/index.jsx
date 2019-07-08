import React from 'react'
import PropTypes from 'prop-types'

// TODO: implement similar to https://css-tricks.com/using-css-transitions-auto-dimensions/#article-header-id-5
const AutoHeight = ({children}) => {
  return <div>{children}</div>
}

export default AutoHeight

AutoHeight.propTypes = {
  children: PropTypes.node,
}
