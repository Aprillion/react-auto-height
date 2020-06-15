import React, {memo, useEffect, useRef, Component} from 'react'
import PropTypes from 'prop-types'
import './index.css'

const PREV_HEIGHT = 'data-react-auto-height-start-value'

const setNewHeight = (el) => {
  const origDelay = getComputedStyle(el).getPropertyValue('transition-delay')
  const origDuration = getComputedStyle(el).getPropertyValue('transition-duration')
  const origHeight = el.style.height || getComputedStyle(el).getPropertyValue('height')

  // find descendants created by nested AutoHeights and adjust future height of current element by the future heights of children
  // skip for first render
  let adjustBy = 0
  if (el.style.height) {
    el.setAttribute(PREV_HEIGHT, el.style.height)
    let descendants = Array.from(el.children)
    for (let child of descendants) {
      let prevHeight = child.getAttribute(PREV_HEIGHT)
      if (prevHeight) {
        adjustBy += parseInt(child.style.height) - parseInt(prevHeight)
      } else if (child.children && child.children.length) {
        Array.from(child.children).forEach((grandChild) => {
          if (grandChild.getAttribute) {
            descendants.push(grandChild)
          }
        })
      }
    }
  }

  el.style.transitionDelay = '0'
  el.style.transitionDuration = '0'
  el.style.height = 'auto'
  const newHeight = el.scrollHeight + adjustBy + 'px'
  el.style.height = origHeight
  el.scrollHeight // force reflow before re-enabling transitions

  el.style.transitionDelay = origDelay
  el.style.transitionDuration = origDuration
  el.style.height = newHeight
}

const myClassName = 'react-auto-height'
const AutoHeight = ({children, className: propClassName = '', ...props}) => {
  const ref = useRef()

  useEffect(() => {
    const {current: el} = ref
    el && setNewHeight(el)
  })

  return (
    <div ref={ref} className={`${myClassName} ${propClassName}`} {...props}>
      {children}
    </div>
  )
}

export default AutoHeight

AutoHeight.displayName = 'AutoHeigh'
AutoHeight.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /** Props are passed to div - including className, style, data-test-id, ... */
  '...props': PropTypes.any,
}
