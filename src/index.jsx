import React, {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'

const outerStyle = {
  display: 'flex', // include margins from the children
  flexDirection: 'column', // recalculate height when content is smaller
  overflow: 'hidden', // hide scroll bar
  transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1)', // same as Material UI 'MuiCollapse-container'
}

const AutoHeight = ({children, style, ...props}) => {
  const ref = useRef()

  useEffect(() => {
    const {current: el} = ref
    if (!el) {
      return
    }

    // find children with previous height and adjust the target height accordingly
    el.setAttribute('data-prev-height', el.style.height)
    let diff = 0
    for (const child of el.firstChild.children) {
      let prev = child.getAttribute('data-prev-height')
      if (prev) {
        diff += child.firstChild.scrollHeight - parseInt(prev)
      }
    }
    el.style.height = el.firstChild.scrollHeight + diff + 'px'
  })

  if (style) {
    style = {...outerStyle, ...style}
  } else {
    style = outerStyle
  }

  // inner div used in el.firstChild
  return (
    <div {...{ref, style, ...props}}>
      <div>{children}</div>
    </div>
  )
}

export default AutoHeight

AutoHeight.propTypes = {
  children: PropTypes.node,
  /** Props are propagated to the outer wrapper div - including style, className, data-test-id, ... */
  '...props': PropTypes.string,
}
