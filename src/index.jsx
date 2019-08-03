import React, {memo, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import './index.css'

const PREV_HEIGHT = 'data-react-auto-height-start-value'
const AutoHeight = memo(({children, className, ...props}) => {
  const ref = useRef()

  useEffect(() => {
    const {current: el} = ref
    if (!el) {
      return
    }

    // find descendants created by nested AutoHeights and adjust future height of current element by the future heights of children
    // skip for first render
    let adjustBy = 0
    if (el.style.height) {
      el.setAttribute(PREV_HEIGHT, el.style.height)
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
    }

    el.style.height = el.firstChild.scrollHeight + adjustBy + 'px'
  })

  // inner div used in el.firstChild
  return (
    <div ref={ref} className={`react-auto-height ${className}`} {...props}>
      <div>{children}</div>
    </div>
  )
})

export default AutoHeight

AutoHeight.propTypes = {
  children: PropTypes.node,
  /** Props are propagated to the outer wrapper div - including style, className, data-test-id, ... */
  '...props': PropTypes.string,
}
