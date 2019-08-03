import React, {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'

const outerStyle = {
  display: 'flex', // include margins from the children
  flexDirection: 'column', // recalculate height when content is smaller
  overflow: 'hidden', // hide scroll bar
  transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1)', // same as Material UI 'MuiCollapse-container'
}

const PREV_HEIGHT = 'data-react-auto-height-start-value'
const AutoHeight = ({children, style, ...props}) => {
  const ref = useRef()

  useEffect(() => {
    const {current: el} = ref
    if (!el) {
      return
    }

    // find descendants created by nested AutoHeights and adjust future height of current element by the future heights of children
    let adjustBy = 0
    let descendants = Array.from(el.firstChild.children)
    for (let child of descendants) {
      let prevHeight = child.getAttribute(PREV_HEIGHT)
      if (prevHeight) {
        child = child.firstChild // skip the outer wrapper
        adjustBy += child.scrollHeight - parseInt(prevHeight)
      }
      if (child.children && child.children.length) {
        Array.from(child.children).forEach(grandChild => {
          if (grandChild.getAttribute) {
            descendants.push(grandChild)
          }
        })
      }
    }

    el.setAttribute(PREV_HEIGHT, el.style.height)
    el.style.height = el.firstChild.scrollHeight + adjustBy + 'px'
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
