import React, {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'

const outerStyle = {
  overflowY: 'hidden', // hide scroll bar
  transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1)', // same as Material UI 'MuiCollapse-container'
}
const innerStyle = {
  overflowY: 'auto', // include margin of children
}

const AutoHeight = ({children, style, ...props}) => {
  const ref = useRef()

  useEffect(() => {
    const {current: el} = ref
    if (!el) {
      return
    }

    const updateHeight = () => {
      el.style.height = el.firstChild.scrollHeight + 'px'
    }
    updateHeight()

    // workaround for nested AutoHeight elements
    const checkHeight = () => {
      el.removeEventListener('transitionend', checkHeight)
      if (el.clientHeight !== el.firstChild.scrollHeight) {
        updateHeight()
      }
    }
    el.addEventListener('transitionend', checkHeight)
  })

  if (style) {
    style = {...outerStyle, ...style}
  } else {
    style = outerStyle
  }

  return (
    <div {...{ref, style, ...props}}>
      <div style={innerStyle}>{children}</div>
    </div>
  )
}

export default AutoHeight

AutoHeight.propTypes = {
  children: PropTypes.node,
  /** Props are propagated to the outer wrapper div - including style, className, data-test-id, ... */
  '...props': PropTypes.string,
}
